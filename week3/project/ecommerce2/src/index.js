import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import NotFoundPage from './pages/NotFoundPage';
import Favourites from './pages/Favourites';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/favourites" element={<Favourites />} />
    </Routes>
  </Router>,
);
