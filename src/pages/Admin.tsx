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
  id: "1",
  url: "",
  urlDetails: "",
  name: "Testar om det blev uppdaterat",
  brewery: "",
  description: "",
  price: 666,
  amount: 0,
};

const Admin = () => {
  const { beerProductArray, addBeerProduct, editBeerProduct,deleteBeerProduct } = useContext(ProductContext);
   console.log(beerProductArray);
  // console.log(alfons);
  return (
    <>
      <h1>ADMIN</h1>
      <p>{beerProductArray.map((item) => item.price)}</p>
      <button onClick={() => addBeerProduct(alfons)}>
        ADD to localStorage
      </button>
      <button onClick={() => editBeerProduct(alfons2)}>
        Edit existing beer
      </button>
      <button onClick={() => deleteBeerProduct(alfons)}>
        Delete existing beer
      </button>
    </>
  );
};

export default Admin;
