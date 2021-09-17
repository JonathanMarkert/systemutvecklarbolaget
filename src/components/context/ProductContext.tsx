import { createContext, FC, useEffect, useState } from "react";
import { v1 as uuidv1 } from "uuid";
import { Product } from "../../Interfaces/IProduct";
import { products } from "../../Mockdata";

interface IProductContext {
  beerProductArray: Product[];
  addBeerProduct: (beerProduct: Product) => void;
  editBeerProduct: (beerProduct: Product) => void;
  deleteBeerProduct: (beerProduct: Product) => void;
}

const preLoadToLocalStorage = (): Product[] => {
  const data = localStorage.getItem("Products");

  if (!data) {
    localStorage.setItem("Products", JSON.stringify(products));
  }

  return JSON.parse(data as string) || products;
};

const ProductProvider: FC = (props) => {
  const [productsState, setProductsState] = useState<Product[]>(
    preLoadToLocalStorage
  );

  const addBeerProduct = (beerProduct: Product) => {
    setProductsState((pre) => {
      beerProduct.id = uuidv1();
      beerProduct.amount = 0;
      return [...pre, beerProduct];
    });
  };

  const editBeerProduct = (beerProduct: Product) => {
    const index = productsState.findIndex((item) => item.id === beerProduct.id);
    if (index === -1) return;
    const newBeerProducts = [...productsState];
    newBeerProducts[index] = beerProduct;
    setProductsState(newBeerProducts);
  };

  const deleteBeerProduct = (beerProduct: Product) => {
    const filteredState = productsState.filter(
      (item) => item.id !== beerProduct.id
    );
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
