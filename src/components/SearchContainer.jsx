import React, { useState } from 'react';
import Searchbar from './Searchbar';

export default function SearchContainer({ data }) {
  const [searchResults, setSearchResults] = useState(data);

  const handleSearch = (query) => {
    if (!query.trim()) {
      setSearchResults(data);
      return;
    }

    const filtered = data.filter(category => {
      const searchableContent = [
        category.language.toLowerCase(),
        category.description.toLowerCase(),
        ...category.tools.map(tool => tool.name.toLowerCase())
      ].join(' ');

      return searchableContent.includes(query.toLowerCase());
    });

    setSearchResults(filtered);
  };

  return (
    <div>
      <Searchbar 
        onSearch={handleSearch} 
        placeholder="Search for languages, frameworks, or tools..." 
      />
      
      <section className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchResults.map(category => (
          <div
            key={category.slug}
            className="category-item p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition"
          >
            <a href={`/categories/${category.slug}`} className="block">
              <div className="text-3xl">{category.icon}</div>
              <h2 className="text-xl font-semibold">{category.language}</h2>
              <p className="text-sm text-gray-600">{category.description}</p>
              <div className="mt-2">
                <h3 className="font-medium mb-1">Tools:</h3>
                <div className="flex flex-wrap gap-1">
                  {category.tools.slice(0, 3).map(tool => (
                    <span key={tool.name} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {tool.icon} {tool.name}
                    </span>
                  ))}
                  {category.tools.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{category.tools.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
