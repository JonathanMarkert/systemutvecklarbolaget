import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import CartProvider from '../context/CartContext';
import ProductProvider from '../context/ProductContext';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <ProductProvider>
      <CartProvider>
      <Layout/>
      </CartProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;
