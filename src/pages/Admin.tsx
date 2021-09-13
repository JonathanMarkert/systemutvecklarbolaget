import { Avatar, Button, Dialog, DialogContent, DialogContentText, DialogTitle, makeStyles, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import React, { useContext, useState } from "react";

import { ProductContext } from "../components/context/ProductContext";
import ProductForm from "../components/ProductForm";
import { Product } from "../Interfaces/IProduct";


const useStyles = makeStyles({
  tableContainer: {
    justifyContent: "center"
  },
  table: {
    maxWidth: '50rem',
  },
  deleteButton: {
    color: "red"
  },
  editButton: {
    color: "#00C967"
  },
  addButton: {
    margin: "1rem",
    backgroundColor: "#00C967"
  },
})

const Admin = () => {
  const classes = useStyles();
  const { beerProductArray, deleteBeerProduct } = useContext(ProductContext);
  const [open, setOpen] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);
  const [product, setProduct] = useState<Product>();

  function handleClickOpen(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: Product) {
    event.persist();
    setProduct(product);
    setOpen(true);
  };

  function handleAddClickOpen(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.persist();
    setOpenAdd(true);
  };

  function handleClose() {
    setOpen(false);
    setOpenAdd(false);
  };

   return (
    <>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Button className={classes.addButton} onClick={(event) => handleAddClickOpen(event)}>
          Add
        </Button>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Beer</TableCell>
              <TableCell align="right">Thumbnail</TableCell>
              <TableCell align="right">Brewery</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {beerProductArray.map((product) => (
              <TableRow key={product.id}>
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell align="right">
                  <Avatar src={product.url}></Avatar>
                </TableCell>
                <TableCell align="right">{product.brewery}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{product.description}</TableCell>
                <TableCell align="right">
                  <Button className={classes.deleteButton} onClick={() => deleteBeerProduct(product)}> DELETE
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button className={classes.editButton} onClick={(event) => handleClickOpen(event, product)} > EDIT
                  </Button>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {open && product && (
        <Dialog open={open} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">{product.name}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Edit this beer
            </DialogContentText>
            <ProductForm
              product={product}
              handleClose={handleClose}
            />
          </DialogContent>
        </Dialog>
      )}
      {openAdd && (
        <Dialog open={openAdd} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add Beer</DialogTitle>
          <DialogContent>
            <ProductForm
              handleClose={handleClose}
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Admin;