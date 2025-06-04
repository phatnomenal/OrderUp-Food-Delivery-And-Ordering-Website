import React from 'react';

const FoodCard = ({ food, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="relative">
        <img 
          src={food.image} 
          alt={food.name}
          className="w-full h-48 object-cover"
        />
        {food.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            -{food.discount}%
          </div>
        )}
        <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-50">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{food.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{food.description}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <span className="text-yellow-400">⭐</span>
            <span className="text-sm font-medium ml-1">{food.rating}</span>
          </div>
          <span className="text-gray-400 mx-2">•</span>
          <span className="text-sm text-gray-600">{food.deliveryTime}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {food.originalPrice && (
              <span className="text-gray-400 line-through text-sm mr-2">
                {food.originalPrice.toLocaleString('vi-VN')}đ
              </span>
            )}
            <span className="text-green-600 font-bold text-lg">
              {food.price.toLocaleString('vi-VN')}đ
            </span>
          </div>
          
          <button 
            onClick={() => onAddToCart(food)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
          >
            Thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
