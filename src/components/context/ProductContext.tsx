import { createContext, FC, useEffect, useState } from "react";
import { Product, products } from "../../Mockdata";

interface IProductContext {
  beerProductArray: Product[];
  AddToLocalStorage: (beerProduct: Product) => void;
}

const ProductProvider: FC = (props) => {
  const [productsState, setProductsState] = useState<Product[]>(products);

  const AddToLocalStorage = (beerProduct: Product) => {
    setProductsState((pre) => {
      return [...pre, beerProduct];
    });
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
        AddToLocalStorage,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const ProductContext = createContext<IProductContext>({
  beerProductArray: [],
  AddToLocalStorage: () => {},
});
