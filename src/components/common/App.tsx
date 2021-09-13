import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import CartProvider from '../context/CartContext';
import ProductProvider from '../context/ProductContext';
import ScrollToTop from '../ScrollToTop';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ProductProvider>
      <CartProvider>
      <Layout/>
      </CartProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;
