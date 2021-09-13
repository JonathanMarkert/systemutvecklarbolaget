import { Avatar, Button, Dialog, DialogContent, DialogContentText, DialogTitle, makeStyles, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, /*TextField, Typography*/ } from "@material-ui/core";
import Table from "@material-ui/core/Table"
import { /*Children,*/ useContext, useState } from "react";
// import { CartContext } from "../components/context/CartContext";
import { ProductContext } from "../components/context/ProductContext";
import { Product } from "../Interfaces/IProduct";
import React from "react";
import ProductForm from "../components/ProductForm";


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
  const { beerProductArray, /*addBeerProduct,*/ editBeerProduct, deleteBeerProduct } = useContext(ProductContext);

   const [open, setOpen] = React.useState(false);
  const [product, setProduct] = useState<Product>();


  function handleClickOpen(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: Product) {
    event.persist();
    setProduct(product);
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  };
  
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (!product) return;
    
  //   const { value, name, type } = event.target;
  //   const trueValue = type === "number" ? Number(value) : value;
  //   setProduct({ ...product, [name]: trueValue });
  // }

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (!product) return;
  //   // console.log(newProduct);
  //   // editBeerProduct(newProduct);

  //   // console.log(value);
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
        <Dialog open={open}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{product.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit this beer
          </DialogContentText>
         <ProductForm 
          product={product}
          // handleSubmit={handleSubmit}
          handleClose={handleClose}
        />
        </DialogContent>
      </Dialog>  
      )}      
    </>
  );
};

export default Admin;