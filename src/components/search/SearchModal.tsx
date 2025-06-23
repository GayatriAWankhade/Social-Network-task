import React, { useState, useEffect } from 'react';
import { Modal } from '../ui/Modal';
import SearchResults from './SearchResults';
import { searchUsersAPI as searchUsers } from '../../lib/api/users';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      setLoading(true);
      searchUsers(query)
        .then(setResults)
        .finally(() => setLoading(false));
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <Modal onClose={onClose} title="Search Users" isOpen={isOpen}>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          className="w-full bg-white/80 backdrop-blur-sm border border-slate-200/50 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 p-4 pl-12 pr-4 rounded-xl shadow-lg shadow-blue-500/5 transition-all duration-300 text-slate-700 placeholder-slate-400 font-medium focus:outline-none focus:shadow-blue-500/10"
          placeholder="Search users by name or username..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors duration-200"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
            <span className="text-slate-600 font-medium">Searching users...</span>
          </div>
        </div>
      ) : (
        <div className="transition-all duration-300 ease-in-out">
          <SearchResults results={results} />
        </div>
      )}
    </Modal>
  );
};

export default SearchModal;