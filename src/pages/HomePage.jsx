import React, { useState } from 'react';
import FoodCard from '../components/food/FoodCard';
import RestaurantCard from '../components/restaurant/RestaurantCard';
import CategoryFilter from '../components/filters/CategoryFilter';
import FoodGrid from '../components/food/FoodGrid';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất cả', icon: '🍽️' },
    { id: 'rice', name: 'Cơm', icon: '🍚' },
    { id: 'noodles', name: 'Bún/Phở', icon: '🍜' },
    { id: 'drinks', name: 'Đồ uống', icon: '🥤' },
    { id: 'dessert', name: 'Tráng miệng', icon: '🍰' }
  ];

  const featuredRestaurants = [
    {
      id: 1,
      name: 'Nanica Homemade Pies',
      rating: 4.8,
      reviews: 120,
      distance: '1.2km',
      image: 'https://placehold.co/300x200/22c55e/ffffff?text=Restaurant',
      cuisine: 'Bánh ngọt',
      deliveryTime: '25-35 phút'
    },
    {
      id: 2,
      name: 'Phở Hà Nội',
      rating: 4.6,
      reviews: 89,
      distance: '0.8km',
      image: 'https://placehold.co/300x200/22c55e/ffffff?text=Pho+Restaurant',
      cuisine: 'Việt Nam',
      deliveryTime: '20-30 phút'
    },
    {
      id: 3,
      name: 'Burger House',
      rating: 4.7,
      reviews: 156,
      distance: '1.5km',
      image: 'https://placehold.co/300x200/22c55e/ffffff?text=Burger+House',
      cuisine: 'Fast Food',
      deliveryTime: '15-25 phút'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 mb-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Đặt món ngon, giao tận nơi</h1>
        <p className="text-green-100 mb-4">Khám phá hàng ngàn món ăn từ các nhà hàng yêu thích</p>
        <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
          Khám phá ngay
        </button>
      </div>

      {/* Category Filter */}
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Featured Restaurants */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Nhà hàng nổi bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRestaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </section>

      {/* Food Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Món ăn phổ biến</h2>
        <FoodGrid category={selectedCategory} />
      </section>
    </div>
  );
};

export default HomePage;
