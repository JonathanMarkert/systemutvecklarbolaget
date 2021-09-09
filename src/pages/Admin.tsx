import { useContext } from "react";
import { ProductContext } from "../components/context/ProductContext";
import { Product } from "../Interfaces/IProduct";

const alfons:Product = {
  id:"1000",
  url:"https://i.pinimg.com/736x/26/b2/50/26b250a738ea4abc7a5af4d42ad93af0.jpg",
  urlDetails:"https://i.pinimg.com/736x/26/b2/50/26b250a738ea4abc7a5af4d42ad93af0.jpg",
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
