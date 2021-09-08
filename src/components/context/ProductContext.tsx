import { createContext, FC, useEffect, useState } from "react";
import { Product, products } from "../../Mockdata";

interface IProductContext {
  beerProductArray: Product[];
  addBeerProduct: (beerProduct: Product) => void;
  editBeerProduct: (beerProduct: Product) => void;
  deleteBeerProduct: (beerProduct: Product) => void;
}

const ProductProvider: FC = (props) => {
  const [productsState, setProductsState] = useState<Product[]>(products);

  const addBeerProduct = (beerProduct: Product) => {
    setProductsState((pre) => {
      return [...pre, beerProduct];
    });
  };

  const editBeerProduct = (beerProduct: Product) => {
    const index = productsState.findIndex((item) => item.id === beerProduct.id);
    const newBeerProducts = [...productsState];
    newBeerProducts[index] = beerProduct;
    setProductsState(newBeerProducts);
  };

  const deleteBeerProduct = (beerProduct: Product) => {
    const filteredState = productsState.filter((item) => item.id !== beerProduct.id);
    setProductsState(filteredState);
  };

  useEffect(() => {
    localStorage.setItem("Products", JSON.stringify(productsState));
  }, [productsState]);

  useEffect(() => {
    const data = localStorage.getItem("Products");
    if (data) {
      setProductsState(JSON.parse(data));
    }
  }, []);

  return (
    <ProductContext.Provider
      value={{
        beerProductArray: productsState,
        addBeerProduct,
        editBeerProduct,
        deleteBeerProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const ProductContext = createContext<IProductContext>({
  beerProductArray: [],
  addBeerProduct: () => {},
  editBeerProduct: () => {},
  deleteBeerProduct: () => {},
});
