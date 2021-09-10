import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table"
import { Children, useContext, useState } from "react";
import { CartContext } from "../components/context/CartContext";
import { ProductContext } from "../components/context/ProductContext";
import { Product } from "../Interfaces/IProduct";
import React from "react";


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
}
)



const Admin = () => {
  const classes = useStyles();
  const { beerProductArray, addBeerProduct, editBeerProduct, deleteBeerProduct } = useContext(ProductContext);
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = useState<Product>();

  //   const [value, setValue] = React.useState({beerProductArray});
  //   const handleChange = () => {
  //     setValue
  // };
  function handleClickOpen(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: Product) {
    event.persist();
    setProduct(product);
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  };

  // const handleSaveAndClose = () => {
  //   // editBeerProduct();
  //   setOpen(false);
  // }

  return (
    <>
      <TableContainer className={classes.tableContainer} component={Paper}>
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
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">{product.name}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Edit this beer
            </DialogContentText>
            <form action="">

              <TextField
                key={product.id}
                required
                margin="dense"
                id={product.id}
                label="Name"
                defaultValue={product.name}
                variant="filled"

                // onChange={handleChange}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="brewery"
                label="Brewery"
                // onChange={handleChange}                     
                fullWidth
              />
            </form>

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() => { editBeerProduct(product); handleClose(); }} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
          
        )}      
    </>
  );
};

export default Admin;


  // const alfons:Product = {
  //   id:"1000",
  //   url:"https://i.pinimg.com/736x/26/b2/50/26b250a738ea4abc7a5af4d42ad93af0.jpg",
  //   urlDetails:"https://i.pinimg.com/736x/26/b2/50/26b250a738ea4abc7a5af4d42ad93af0.jpg",
  //   name:"o",
  //   brewery:"m",
  //   description:"a",
  //   price:1337,
  //   amount:0,
  // }

  // const alfons2: Product = {
  //   id: "1",
  //   url: "",
  //   urlDetails: "",
  //   name: "Testar om det blev uppdaterat",
  //   brewery: "",
  //   description: "",
  //   price: 666,
  //   amount: 0,
  // };





  // <TableContainer>
  //   <h1>ADMIN</h1>
  //   <p>{beerProductArray.map((item) => item.price)}</p>
  //   <button onClick={() => addBeerProduct(alfons)}>
  //     ADD to localStorage
  //   </button>
  //   <button onClick={() => editBeerProduct(alfons2)}>
  //     Edit existing beer
  //   </button>
  //   <button onClick={() => deleteBeerProduct(alfons)}>
  //     Delete existing beer
  //   </button>
  //   <h2>CHECK CART ITEMS</h2>
  //   <p>{cart.map((item) => item.id)}</p>
  // </TableContainer>