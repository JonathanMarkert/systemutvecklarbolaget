import { Button, DialogActions, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Product } from "../Interfaces/IProduct";
import { ProductContext } from "./context/ProductContext";

interface Props {
  product?: Product,
  // handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleClose: () => void;
}


export default function ProductForm ({ product, handleClose }: Props) {
  const [newProduct, setNewProduct] = useState<Product>(); 
  const { addBeerProduct, editBeerProduct } = useContext(ProductContext);
  // if(!product) return;
    // if (!product) return;
    console.log(product);
     
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!product) return;
        
        const { value, name, type } = event.target;
        const trueValue = type === "number" ? Number(value) : value;
        setNewProduct({ ...product, [name]: trueValue });
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!newProduct) return;
      if (!product) {
        addBeerProduct(newProduct);
      }
      else {
        editBeerProduct(newProduct);
      }
      handleClose();
    }
      
    return(
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          name="name" 
          type="text"
          onChange={handleChange}
          // onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })}
          margin="dense"
          label="Name"
          defaultValue={product?.name}
          variant="filled"
          fullWidth
        /> 
          <TextField
          name="brewery"
          type="text"
          onChange={handleChange}
          margin="dense"
          label="Brewery"
          defaultValue={product?.brewery}
          variant="filled"
          fullWidth
        />
          <TextField
          name="url"
          type="text"
          onChange={handleChange}
          margin="dense"
          label="Image URL"
          defaultValue={product?.url}
          variant="filled"
          fullWidth
        />
          <TextField
          name="urlDetails"
          type="text"
          onChange={handleChange}
          margin="dense"
          label="Alternative image URL"
          defaultValue={product?.urlDetails}
          variant="filled"
          fullWidth
        />
          <TextField
          name="description"
          type="text"
          onChange={handleChange}
          margin="dense"
          label="Description"
          defaultValue={product?.description}
          variant="filled"
          fullWidth
          multiline
          rows={4}
        />
          <TextField
          name="price"
          type="number"
          onChange={handleChange}
          margin="dense"
          label="Price"
          defaultValue={product?.price}
          variant="filled"
          fullWidth
        />

        <DialogActions>
          <Button type="submit" color="secondary">
            Save
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
    </form>
  );
}
