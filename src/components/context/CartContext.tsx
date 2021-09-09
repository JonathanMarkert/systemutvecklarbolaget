import { FC, createContext, useState } from "react";
import { Product } from "../../Interfaces/IProduct";

interface ICartContext {
  cart: Product[];
  handleAddToCart: (beerProduct: Product) => void;
  handleRemoveFromCart: (beerProduct: Product) => void;
  incrementNumber: (beerProduct: Product) => void;
  decrementNumber: (beerProduct: Product) => void;
  totalCartPrice: () => void;
}

const CartProvider: FC = (props) => {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (beerProduct: Product) => {
    setCart((previousState) => {
      const isProductInCart = previousState.find(
        (item) => item.id === beerProduct.id
      );

      if (isProductInCart) {
        return previousState.map((item) =>
          item.id === beerProduct.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...previousState, { ...beerProduct, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (beerProduct: Product) => {
    const filteredState = cart.filter((item) => item.id !== beerProduct.id);
    setCart(filteredState);
  };
  
  const incrementNumber = (beerProduct: Product) => {
    setCart((previousState) => {
      const foundBeer = previousState.find(
        (item) => item.id === beerProduct.id
      );
      if (foundBeer) {
        return previousState.map((item) =>
          item.id === beerProduct.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...previousState, { ...beerProduct }];
    });
  };

  const decrementNumber = (beerProduct: Product) => {
    setCart((previousState) => {
      const foundBeer = previousState.find(
        (item) => item.id === beerProduct.id
      );
      if (foundBeer) {
        if(foundBeer.amount < 2) {handleRemoveFromCart(foundBeer)}
        return previousState.map((item) =>
          item.id === beerProduct.id
            ? { ...item, amount: item.amount - 1 }
            : item
        );
      }
      return [...previousState, { ...beerProduct }];
    });

  };

  const totalCartPrice = () => {
    const sum = cart.reduce((sum,beer) => sum + beer.price*beer.amount,0);
    return sum
  }

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        handleAddToCart,
        handleRemoveFromCart,
        incrementNumber,
        decrementNumber,
        totalCartPrice,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;

export const CartContext = createContext<ICartContext>({
  cart: [],
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
  incrementNumber: () => {},
  decrementNumber: () => {},
  totalCartPrice: () => {},
});

