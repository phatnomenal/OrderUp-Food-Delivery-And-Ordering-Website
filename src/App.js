import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import RestaurantDetail from './pages/RestaurantDetail';
import ChatPage from './pages/ChatPage';
import './App.css';

function App() {
  return (
    <Router>
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
        {/* Test Tailwind */}
        <div className="bg-blue-500 flex items-center justify-center p-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-blue-600">Test Tailwind</h1>
            <p className="mt-4 text-gray-600">If you see this styled, Tailwind is working!</p>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
