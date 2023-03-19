import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import NotFoundPage from './pages/NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
