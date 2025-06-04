import React, { useState } from 'react';
import FoodCard from '../components/food/FoodCard';

const RestaurantDetail = () => {
  const [activeTab, setActiveTab] = useState('menu');

  const restaurant = {
    id: 1,
    name: 'Nanica Homemade Pies',
    rating: 4.8,
    reviews: 120,
    distance: '1.2km',
    image: 'https://placehold.co/800x300/22c55e/ffffff?text=Restaurant+Banner',
    cuisine: 'Bánh ngọt',
    deliveryTime: '25-35 phút',
    deliveryFee: '15000',
    description: 'Nhà hàng chuyên về các loại bánh ngọt homemade với công thức truyền thống'
  };

  const menuItems = [
    {
      id: 1,
      name: 'Bánh Táo Cinnamon',
      description: 'Bánh táo thơm ngon với quế và đường nâu',
      price: 45000,
      image: 'https://placehold.co/300x200/22c55e/ffffff?text=Apple+Pie',
      category: 'dessert',
      rating: 4.7,
      deliveryTime: '20-25 phút'
    },
    {
      id: 2,
      name: 'Bánh Chocolate Chip',
      description: 'Bánh cookies với chocolate chip Bỉ',
      price: 35000,
      image: 'https://placehold.co/300x200/22c55e/ffffff?text=Chocolate+Chip',
      category: 'dessert',
      rating: 4.5,
      deliveryTime: '15-20 phút'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Restaurant Banner */}
      <div className="relative mb-6">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-64 object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              ⭐ {restaurant.rating} ({restaurant.reviews} đánh giá)
            </span>
            <span>📍 {restaurant.distance}</span>
            <span>🕒 {restaurant.deliveryTime}</span>
          </div>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
        <p className="text-gray-600 mb-4">{restaurant.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{restaurant.rating}</div>
              <div className="text-sm text-gray-500">Đánh giá</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{restaurant.deliveryTime}</div>
              <div className="text-sm text-gray-500">Giao hàng</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{parseInt(restaurant.deliveryFee).toLocaleString()}đ</div>
              <div className="text-sm text-gray-500">Phí giao hàng</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('menu')}
            className={`px-6 py-3 font-medium ${
              activeTab === 'menu'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Thực đơn
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-6 py-3 font-medium ${
              activeTab === 'reviews'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Đánh giá
          </button>
          <button
            onClick={() => setActiveTab('info')}
            className={`px-6 py-3 font-medium ${
              activeTab === 'info'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Thông tin
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'menu' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map(item => (
            <FoodCard key={item.id} food={item} onAddToCart={() => {}} />
          ))}
        </div>
      )}

      {activeTab === 'reviews' && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Đánh giá từ khách hàng</h3>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="border-b border-gray-100 pb-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                    U{i}
                  </div>
                  <div>
                    <div className="font-medium">Khách hàng {i}</div>
                    <div className="flex items-center">
                      <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                      <span className="text-sm text-gray-500 ml-2">2 ngày trước</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">Bánh rất ngon, đóng gói cẩn thận. Sẽ đặt lại lần sau!</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'info' && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Thông tin nhà hàng</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Địa chỉ</h4>
              <p className="text-gray-600">123 Đường ABC, Quận 1, TP.HCM</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Giờ mở cửa</h4>
              <p className="text-gray-600">8:00 - 22:00 (Thứ 2 - Chủ nhật)</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Số điện thoại</h4>
              <p className="text-gray-600">0123 456 789</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetail;
