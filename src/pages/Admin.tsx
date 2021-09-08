import { useContext } from "react";
import { ProductContext } from "../components/context/ProductContext";
import { Product } from "../Mockdata";

const alfons:Product = {
  id:"1000",
  url:"t",
  urlDetails:"h",
  name:"o",
  brewery:"m",
  description:"a",
  price:1337,
  amount:0,
}

const alfons2: Product = {
  id: "544",
  url: "t",
  urlDetails: "h",
  name: "o",
  brewery: "m",
  description: "a",
  price: 666,
  amount: 0,
};

const Admin = () => {
  const { beerProductArray: beerProducyArray, AddToLocalStorage } = useContext(ProductContext);
   console.log(beerProducyArray);
  // console.log(alfons);
  return (
    <>
      <h1>ADMIN</h1>
      <p>{beerProducyArray.map((item) => item.price)}</p>
      <button onClick={() => AddToLocalStorage(alfons)}>
        ADD to localStorage
      </button>
      <button onClick={() => AddToLocalStorage(alfons2)}>
        ADD to localStorage
      </button>
    </>
  );
};

export default Admin;
