import React, { useContext, useState } from "react";
import { Product } from "../Interfaces/IProduct";
import { Button, DialogActions, TextField } from "@material-ui/core";
import { ProductContext } from "./context/ProductContext";

interface Props {
  product?: Product,
  // handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleClose: () => void;
}

let defaultProduct: Product = {
  id: '',
  name:  '',
  brewery: '',
  url: '',
  urlDetails: '',
  description: '',
  price: 0,
  amount: 0,
} 


export default function ProductForm ({ product, handleClose }: Props) {
  const [newProduct, setNewProduct] = useState<Product>(defaultProduct); 
  const { addBeerProduct, editBeerProduct } = useContext(ProductContext);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!product) {
      const { value, name, type } = event.target;
      const inputValue = type === "number" ? Number(value) : value;
      setNewProduct({ ...newProduct, [name]: inputValue });
    } else {
      const { value, name, type } = event.target;
      const inputValue = type === "number" ? Number(value) : value;
      setNewProduct({ ...product, [name]: inputValue });
    }
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
