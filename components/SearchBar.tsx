'use client';

import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({ onSearch, placeholder = "Busca tu poster favorito..." }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto mb-12">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full px-6 py-4 pl-14 rounded-full border-2 border-purple-200 dark:border-purple-700 focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900 transition-all text-gray-700 dark:text-white text-lg shadow-lg bg-white dark:bg-gray-800"
        />
        <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl">
          🔍
        </span>
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              onSearch('');
            }}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl"
          >
            ✕
          </button>
        )}
      </div>
    </form>
  );
}
