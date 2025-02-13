import React, { useState } from 'react';

const Searchbar = ({ placeholder = "Search...", onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(query);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder={placeholder}
                className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-r-md cursor-pointer"
            >
                Search
            </button>
        </form>
    );
};

export default Searchbar;
