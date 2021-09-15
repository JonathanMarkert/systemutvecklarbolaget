import { Button, DialogActions, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import React, { useContext } from "react";
import * as yup from "yup";
import { Product } from "../Interfaces/IProduct";
import { ProductContext } from "./context/ProductContext";

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

const productFormValidation = yup.object<
  Record<keyof Omit<Product, "id" | "amount">, yup.AnySchema>
>({
  name: yup
    .string()
    .required("The product must have a name")
    .min(3, "Must be at least 3 characters long")
    .max(30, "This name is too long"),
  brewery: yup
    .string()
    .required("A brewery must have a name")
    .min(3, "Must be at least 3 characters long")
    .max(30, "The brewery name is too long"),
  url: yup.string().required("Image link to a beer logo is required."),
  urlDetails: yup.string().required("Image link to the product is required."),
  description: yup.string().notRequired().max(120, "Description is too long"),
  price: yup
    .number()
    .required("Beer ain't free!")
    .min(1, "minimum value of one")
    .max(200, "really... more then 200 for a beer ?"),
});

export default function ProductForm({ product, handleClose }: Props) {
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
    validateOnChange: true,
    enableReinitialize: true,
    validationSchema: productFormValidation,
  });

  return (
    <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
      <TextField
        name="name"
        type="text"
        onChange={formik.handleChange}
        margin="dense"
        label="Name"
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
