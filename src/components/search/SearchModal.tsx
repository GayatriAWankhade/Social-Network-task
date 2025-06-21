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
      <input
        type="text"
        className="w-full border p-2 rounded mb-4"
        placeholder="Search users by name or username..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus
      />
      {loading ? (
        <p>Searching...</p>
      ) : (
        <SearchResults results={results} />
      )}
    </Modal>
  );
};

export default SearchModal;
