import { Box, Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import { CartContext } from "../components/context/CartContext";
import SlipCard from "../components/SlipCard";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import EuroSymbolOutlinedIcon from "@material-ui/icons/EuroSymbolOutlined";

const useStyles = makeStyles((theme) => ({
  gridContainerStyle: {
    padding: theme.spacing(3),
  },
  topGridFlex: {
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomGridFlex: {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
  },
  formStyle: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
  },
}));

export default function ShoppingCart() {
  const { cart, totalCartPrice } = useContext(CartContext);
  const classes = useStyles();
  const [showForm, setShowForm] = useState(false);
  const totalItems = cart.reduce(
    (total: number, cart) => total + cart.amount,
    0
  );

  return (
    <Container>
      <Grid container className={classes.gridContainerStyle}>
        <Grid item xs={12} className={classes.topGridFlex}>
          <Box className={classes.topGridFlex}>
            <Typography variant="h5">Shopping</Typography>
            <ShoppingCartOutlinedIcon />
            <Typography variant="h5" style={{color:"green"}}>({totalItems})</Typography>
          </Box>
          <Box className={classes.topGridFlex}>
            <Typography variant="h5">Total: {totalCartPrice()}</Typography>
            <EuroSymbolOutlinedIcon style={{color:"green"}} />
          </Box>
        </Grid>
        <Grid container direction="column">
          {cart.map((product) => (
            <SlipCard key={product.id} product={product} />
          ))}
        </Grid>
      </Grid>
      <Grid item className={classes.bottomGridFlex}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setShowForm(true)}
        >
          CheckOut
        </Button>
        <Container className={classes.formStyle}>
          {showForm && <CheckoutForm />}
        </Container>
      </Grid>
    </Container>
  );
}
