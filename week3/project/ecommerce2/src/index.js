import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import NotFoundPage from './pages/NotFoundPage';
import Favourites from './pages/Favourites';
import { FavouriteListContextProvider } from './context/FavouriteList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <FavouriteListContextProvider>
            <App />
          </FavouriteListContextProvider>
        }
      />
      <Route
        path="/product/:id"
        element={
          <FavouriteListContextProvider>
            <ProductDetails />
          </FavouriteListContextProvider>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
      <Route
        path="/products/favourites"
        element={
          <FavouriteListContextProvider>
            <Favourites />
          </FavouriteListContextProvider>
        }
      />
    </Routes>
  </Router>,
);
