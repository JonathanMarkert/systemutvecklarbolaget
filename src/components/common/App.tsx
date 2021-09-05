import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import CartProvider from '../context/ProductContext';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <CartProvider>
      <Layout/>
      </CartProvider>
    </Router>
  );
}

export default App;
