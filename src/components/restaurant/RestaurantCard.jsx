import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
        <div className="relative">
          <img 
            src={restaurant.image} 
            alt={restaurant.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 shadow-md">
            <span className="text-sm font-semibold">{restaurant.distance}</span>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">{restaurant.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-yellow-400">⭐</span>
              <span className="text-sm font-medium ml-1">{restaurant.rating}</span>
              <span className="text-gray-400 text-sm ml-1">({restaurant.reviews})</span>
            </div>
            <span className="text-sm text-gray-600">{restaurant.deliveryTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
