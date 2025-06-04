import React from "react";

export default function RestaurantDetail() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <img
        src="/assets/restaurant-banner.jpg"
        alt="Restaurant Banner"
        className="w-full h-64 object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-4">Nanica Homemade Pies</h1>
      <p className="text-gray-600 mt-1">⭐ 4.8 · 120 reviews · 📍 1.2km</p>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Menu</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <img src="/assets/menu-item-1.png" alt="Dish" className="rounded mb-2" />
            <h3 className="font-medium">Pho Bo</h3>
            <p className="text-gray-500 text-sm">Beef noodle soup</p>
            <p className="font-bold text-lg mt-1">$8.99</p>
            <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded">
              Thêm vào giỏ hàng
            </button>
          </div>
          {/* Add more dishes here */}
        </div>
      </section>
    </div>
  );
}
