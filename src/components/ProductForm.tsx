import React, { useContext } from "react";
import { Product } from "../Interfaces/IProduct";
import { Button, DialogActions, TextField } from "@material-ui/core";
import { ProductContext } from "./context/ProductContext";
import * as yup from "yup";
import { useFormik } from "formik";

interface Props {
  product?: Product;
  handleClose: () => void;
}

let defaultProduct: Product = {
  id: "",
  name: "",
  brewery: "",
  url: "",
  urlDetails: "",
  description: "",
  price: 0,
  amount: 0,
};
// Pick välja properties
// Omit välja bort properties

const productFormValidation = yup.object<Record<keyof Omit<Product,"id"|"amount">, yup.AnySchema>>({
  name: yup
    .string()
    .required("Beer must have a name")
    .min(3, "Must be atleast 3 characters long")
    .max(30, "Name is to long"),
  brewery: yup
    .string()
    .required("Brewery must have a name")
    .min(3, "Must be atleast 3 characters long")
    .max(30, "Name is to long"),
  url: yup.string().required("Image of beer is required."),
  //.oneOf(["jpg", "png"]),
  urlDetails: yup.string().required("Image of beer is required."),
  //.oneOf(["jpg", "png"]),
  description: yup.string().notRequired().max(50, "Description is to long"),
  price: yup
    .number()
    .required("Beer aint free!")
    .min(1, "minimum value of one")
    .max(200, "really... more then 200 for a beer ?"),
});

export default function ProductForm({ product, handleClose }: Props) {
  //const [newProduct, setNewProduct] = useState<Product>(product || defaultProduct);
  const { addBeerProduct, editBeerProduct } = useContext(ProductContext);

  const formik = useFormik({
    initialValues: product || defaultProduct,
    onSubmit: (updatedProduct) => {
          if (!product) {
            addBeerProduct(updatedProduct);
          } else {
            editBeerProduct(updatedProduct);
          }
      handleClose();
    },
    validateOnChange: true, //osäker om behövs
    enableReinitialize: true, // viktig
    validationSchema: productFormValidation,
  });

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (!product) {
  //     const { value, name, type } = event.target;
  //     const inputValue = type === "number" ? Number(value) : value;
  //     setNewProduct({ ...newProduct, [name]: inputValue });
  //   } else {
  //     const { value, name, type } = event.target;
  //     const inputValue = type === "number" ? Number(value) : value;
  //     setNewProduct({ ...product, [name]: inputValue });
  //   }
  // };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (!newProduct) return;
  //   if (!product) {
  //     addBeerProduct(newProduct);
  //   } else {
  //     editBeerProduct(newProduct);
  //   }
  //   handleClose();
  // };

  return (
    <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
      <TextField
        name="name"
        type="text"
        onChange={formik.handleChange}
        margin="dense"
        label="Name"
        //defaultValue={product?.name}
        variant="filled"
        fullWidth
        value={formik.values.name}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        onBlur={formik.handleBlur}
      />
      <TextField
        name="brewery"
        type="text"
        onChange={formik.handleChange}
        margin="dense"
        label="Brewery"
        //defaultValue={product?.brewery}
        variant="filled"
        fullWidth
        value={formik.values.brewery}
        error={formik.touched.brewery && Boolean(formik.errors.brewery)}
        helperText={formik.touched.brewery && formik.errors.brewery}
        onBlur={formik.handleBlur}
      />
      <TextField
        name="url"
        type="text"
        onChange={formik.handleChange}
        margin="dense"
        label="Image URL"
        //defaultValue={product?.url}
        variant="filled"
        fullWidth
        value={formik.values.url}
        error={formik.touched.url && Boolean(formik.errors.url)}
        helperText={formik.touched.url && formik.errors.url}
        onBlur={formik.handleBlur}
      />
      <TextField
        name="urlDetails"
        type="text"
        onChange={formik.handleChange}
        margin="dense"
        label="Alternative image URL"
        //defaultValue={product?.urlDetails}
        variant="filled"
        fullWidth
        value={formik.values.urlDetails}
        error={formik.touched.urlDetails && Boolean(formik.errors.urlDetails)}
        helperText={formik.touched.urlDetails && formik.errors.urlDetails}
        onBlur={formik.handleBlur}
      />
      <TextField
        name="description"
        type="text"
        onChange={formik.handleChange}
        margin="dense"
        label="Description"
        //defaultValue={product?.description}
        variant="filled"
        fullWidth
        multiline
        rows={4}
        value={formik.values.description}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
        onBlur={formik.handleBlur}
      />
      <TextField
        name="price"
        type="number"
        onChange={formik.handleChange}
        margin="dense"
        label="Price"
        //defaultValue={product?.price}
        variant="filled"
        fullWidth
        value={formik.values.price}
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={formik.touched.price && formik.errors.price}
        onBlur={formik.handleBlur}
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
