import { FC, createContext, useState } from "react";
import { Product } from "../../Mockdata";

interface CartContext {
  cart: Product[];
  handleAddToCart: (beerProduct: Product) => void;
  handleRemoveFromCart: (beerProduct: Product) => void;
  incrementNumber: (num: number) => void;
  decrementNumber: (num: number) => void;
}


const CartProvider: FC = (props) => {
    const [cart, setCart] = useState<Product[]>([]);
    
    const handleAddToCart = (beerProduct: Product) => {
        setCart((previousState) => {
            const isProductInCart = previousState.find(
                (item) => item.id === beerProduct.id);

                if (isProductInCart) {
                    return previousState.map((item) =>
                    item.id === beerProduct.id
                    ? { ...item, amount: item.amount + 1 }
                    : item
                    );
                }
                return [...previousState, {...beerProduct, amount: 1}]
              });
            };
            // alternativt i varukorgen foreacha arrayn och ha en ny property som plussar på beroende på hur många id av samma det är.

        const handleRemoveFromCart = (beerProduct: Product) => {
            // remove from cart
           const test = cart.filter(item => item.id !== beerProduct.id);
           setCart(test);
          
        };
        const incrementNumber = (num: number) => {
            // alternativt flytta till cart component och ändra inparameter
            // ta in en product[] och gå igenom.
            // add number
        };
        const decrementNumber = (num: number) => {
            // subtract number
        };
        
        return (
          <ProductContext.Provider
            value={{
              cart: cart,
              handleAddToCart,
              handleRemoveFromCart,
              incrementNumber,
              decrementNumber,
            }}
          >
            {props.children}
          </ProductContext.Provider>
        );
};
export default CartProvider;


export const ProductContext = createContext<CartContext>({
  cart: [],
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
  incrementNumber: () => {},
  decrementNumber: () => {},
});


// consume:a en context i en component:
//const {cart, handleAddToCart} = useContext(ProductContext);

// sen använda i t.ex onclick på en button
// onClick={() => handleAddToCart(product:Product)}

  // till header använd sen funktionen i badge
  // const getTotalItems = () =>
  // cart.reduce((total: number, cart) => total + cart.amount, 0);



