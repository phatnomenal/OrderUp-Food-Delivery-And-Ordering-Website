import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const categories = [
    { name: 'Tất cả', icon: 'grid', active: true },
    { name: 'Món chính', icon: 'utensils' },
    { name: 'Món phụ', icon: 'bowl-food' },
    { name: 'Tráng miệng', icon: 'ice-cream' },
    { name: 'Đồ uống', icon: 'coffee' },
    { name: 'Combo', icon: 'layer-group' },
  ];

  return (
    <aside className="w-64 bg-white shadow-md h-screen sticky top-0 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Danh mục</h2>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <Link 
                to={`/category/${category.name.toLowerCase()}`}
                className={`flex items-center p-3 rounded-lg ${
                  category.active 
                    ? 'bg-green-100 text-green-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="w-6 h-6 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </span>
                <span>{category.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-4 border-t">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Bộ lọc</h2>
        
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Giá</h3>
          <div className="flex items-center space-x-2">
            <input 
              type="range" 
              min="0" 
              max="500000" 
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-600">0đ</span>
            <span className="text-sm text-gray-600">500.000đ</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Đánh giá</h3>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map(rating => (
              <div key={rating} className="flex items-center">
                <input type="checkbox" id={`rating-${rating}`} className="mr-2" />
                <label htmlFor={`rating-${rating}`} className="flex items-center">
                  {Array(rating).fill(0).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  {Array(5 - rating).fill(0).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-gray-600">& trở lên</span>
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
          Áp dụng
        </button>
      </div>
    </aside>
  );
}
