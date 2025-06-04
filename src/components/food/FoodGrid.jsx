import React from 'react';
import FoodCard from './FoodCard';

const FoodGrid = ({ category }) => {
  // Sample food data - in real app this would come from API
  const foods = [
    {
      id: 1,
      name: 'Phở Bò Tái',
      description: 'Phở bò tái truyền thống với nước dùng đậm đà',
      price: 45000,
      originalPrice: 50000,
      discount: 10,
      rating: 4.8,
      deliveryTime: '20-30 phút',
      image: 'https://placehold.co/300x200/22c55e/ffffff?text=Pho+Bo',
      category: 'noodles'
    },
    {
      id: 2,
      name: 'Cơm Gà Xối Mỡ',
      description: 'Cơm gà Hải Nam thơm ngon với nước chấm đặc biệt',
      price: 55000,
      rating: 4.6,
      deliveryTime: '25-35 phút',
      image: 'https://placehold.co/300x200/22c55e/ffffff?text=Com+Ga',
      category: 'rice'
    },
    {
      id: 3,
      name: 'Bánh Mì Thịt Nướng',
      description: 'Bánh mì giòn với thịt nướng thơm lừng',
      price: 25000,
      rating: 4.7,
      deliveryTime: '15-20 phút',
      image: 'https://placehold.co/300x200/22c55e/ffffff?text=Banh+Mi',
      category: 'all'
    },
    {
      id: 4,
      name: 'Trà Sữa Trân Châu',
      description: 'Trà sữa ngọt ngào với trân châu dai dai',
      price: 35000,
      rating: 4.5,
      deliveryTime: '10-15 phút',
      image: 'https://placehold.co/300x200/22c55e/ffffff?text=Tra+Sua',
      category: 'drinks'
    },
    {
      id: 5,
      name: 'Bánh Flan',
      description: 'Bánh flan mềm mịn với caramel thơm ngon',
      price: 20000,
      rating: 4.4,
      deliveryTime: '15-20 phút',
      image: 'https://placehold.co/300x200/22c55e/ffffff?text=Banh+Flan',
      category: 'dessert'
    },
    {
      id: 6,
      name: 'Bún Bò Huế',
      description: 'Bún bò Huế cay nồng đậm đà hương vị miền Trung',
      price: 48000,
      rating: 4.9,
      deliveryTime: '25-30 phút',
      image: 'https://placehold.co/300x200/22c55e/ffffff?text=Bun+Bo+Hue',
      category: 'noodles'
    }
  ];

  const filteredFoods = category === 'all' 
    ? foods 
    : foods.filter(food => food.category === category);

  const handleAddToCart = (food) => {
    // Handle add to cart logic
    console.log('Added to cart:', food);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredFoods.map(food => (
        <FoodCard 
          key={food.id} 
          food={food} 
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default FoodGrid;
