import React from 'react';
import UserSearchItem from './UserSearchItem';
import { User } from '../../types/user';

interface SearchResultsProps {
  results: User[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  if (results.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <ul className="space-y-2 max-h-64 overflow-auto">
      {results.map(user => (
        <UserSearchItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default SearchResults;
