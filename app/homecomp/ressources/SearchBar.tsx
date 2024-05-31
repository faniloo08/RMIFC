import { useState, ChangeEvent, FormEvent } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [city, setCity] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center mt-10">
      <input
        type="text"
        value={city}
        onChange={handleChange}
        placeholder="Enter city"
        className="px-4 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button type="submit" className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md">
        Search
      </button>
    </form>
  );
}
