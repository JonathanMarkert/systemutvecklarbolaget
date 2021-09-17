import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import CartProvider from "../context/CartContext";
import ProductProvider from "../context/ProductContext";
import ScrollToTop from "../ScrollToTop";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ProductProvider>
        <CartProvider>
          <CssBaseline />
          <Layout />
        </CartProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;
