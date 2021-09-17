import {
  Button,
  Container,
  createStyles,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
  Theme,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, { useContext, useState } from "react";
import AdminProductCard from "../components/AdminProductCard";
import { ProductContext } from "../components/context/ProductContext";
import ProductForm from "../components/ProductForm";
import { Product } from "../Interfaces/IProduct";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    addButton: {
      margin: "1rem",
      backgroundColor: theme.palette.secondary.light,
      color: "#fff",
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
      },
    },
    title: {
      padding: "1rem",
    },
    centerMobile: {
      [theme.breakpoints.down("xs")]: {
        justifyContent: "center",
      },
    },
  })
);

const Admin = () => {
  const classes = useStyles();
  const { beerProductArray } = useContext(ProductContext);
  const [open, setOpen] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);
  const [product, setProduct] = useState<Product>();

  function handleClickOpen(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    product: Product
  ) {
    event.persist();
    setProduct(product);
    setOpen(true);
  }

  function handleAddClickOpen(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.persist();
    setOpenAdd(true);
  }

  function handleClose() {
    setOpen(false);
    setOpenAdd(false);
  }

  return (
    <>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className={classes.centerMobile}
        >
          <Typography variant="h3" align="center" className={classes.title}>
            Admin
          </Typography>
          <Button
            className={classes.addButton}
            onClick={(event) => handleAddClickOpen(event)}
          >
            Add new product
          </Button>
        </Grid>
        <Grid container direction="column">
          {beerProductArray.map((product) => (
            <AdminProductCard
              key={product.id}
              product={product}
              handleClickOpen={handleClickOpen}
            />
          ))}
        </Grid>
      </Container>

      {open && product && (
        <Dialog open={open} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">{product.name}</DialogTitle>
          <DialogContent>
            <DialogContentText>Edit this beer</DialogContentText>
            <ProductForm product={product} handleClose={handleClose} />
          </DialogContent>
        </Dialog>
      )}
      {openAdd && (
        <Dialog open={openAdd} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add Beer</DialogTitle>
          <DialogContent>
            <ProductForm handleClose={handleClose} />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Admin;
