import React from 'react';
import UserSearchItem from './UserSearchItem';
import { User } from '../../types/user';

interface SearchResultsProps {
  results: User[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mb-4 shadow-inner">
          <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <p className="text-slate-500 font-medium text-lg">No users found.</p>
        <p className="text-slate-400 text-sm mt-2">Try searching with different keywords</p>
      </div>
    );
  }

  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-inner">
      <div className="p-4 border-b border-slate-200/50 bg-gradient-to-r from-slate-50/80 to-blue-50/30 rounded-t-xl">
        <p className="text-sm font-medium text-slate-600">
          Found {results.length} user{results.length !== 1 ? 's' : ''}
        </p>
      </div>
      <ul className="space-y-1 max-h-64 overflow-auto p-2 scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-transparent hover:scrollbar-thumb-slate-500">
        {results.map(user => (
          <div key={user.id} className="transform transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
            <UserSearchItem user={user} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;