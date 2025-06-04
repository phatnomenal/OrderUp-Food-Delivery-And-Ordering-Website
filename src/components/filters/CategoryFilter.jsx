import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Danh mục</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center px-4 py-2 rounded-full border transition-colors ${
              selectedCategory === category.id
                ? 'bg-green-500 text-white border-green-500'
                : 'bg-white text-gray-700 border-gray-300 hover:border-green-500'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            <span className="font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
