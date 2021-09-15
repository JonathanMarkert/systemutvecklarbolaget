import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import CartProvider from '../context/CartContext';
import ProductProvider from '../context/ProductContext';
import ScrollToTop from '../ScrollToTop';
import Layout from './Layout';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ProductProvider>
      <CartProvider>
      <CssBaseline />
      <Layout/>
      </CartProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;
