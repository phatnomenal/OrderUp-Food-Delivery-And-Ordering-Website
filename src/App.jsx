import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import RestaurantDetail from './pages/RestaurantDetail';
import ChatPage from './pages/ChatPage';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import RestaurantDetail from './pages/RestaurantDetail';
import ChatPage from './pages/ChatPage';
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/restaurant/:id" element={<RestaurantDetail />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
import ChatPage from './pages/ChatPage';
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </div>
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/restaurant" element={<RestaurantDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
