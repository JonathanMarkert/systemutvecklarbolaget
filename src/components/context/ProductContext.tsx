import { createContext, FC, useEffect, useState } from "react";
import { products } from "../../Mockdata";

interface IProductContext {
  AddToLocalStorage: () => void;
  GetFromLocalStorage: () => void;
}

const ProductProvider: FC = (props) => {
  const [product, setProduct] = useState(products);

  useEffect(() => {
    const data = localStorage.getItem("Products");
    if (data) {
      setProduct(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Products", JSON.stringify(product));
  }, [product]);

  const AddToLocalStorage = () => {

  }

  const GetFromLocalStorage = () => {
      
  }

  return (
    <ProductContext.Provider
      value={{
        GetFromLocalStorage,
        AddToLocalStorage,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const ProductContext = createContext<IProductContext>({
  GetFromLocalStorage: () => {},
  AddToLocalStorage: () => {},
});
