import { Box, Hidden, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import { CartContext } from "../components/context/CartContext";
import SlipCard from "../components/SlipCard";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  background: {
    backgroundColor: "white",
  },
  welcomeToShoppingCart: {
    backgroundColor: theme.palette.secondary.light,
    textAlign: "center",
    color: "white",
    marginBottom: 0,
    padding: "0.5rem",
  },
  wrapper: {
    textAlign: "center",
    color: "white",
    marginBottom: 0,
    padding: "0.5rem",
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
  const [cartIsEmpty, setCartEmpty] = useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <Box className={classes.background}>

          <Box className={classes.welcomeToShoppingCart} 
            maxWidth="md"
            visibility="hidden"
            >
            <Typography variant="h2">Shopping cart</Typography>
            <Typography variant="h5">Your shopping cart is empty</Typography>
          </Box>

        <Container className={classes.welcomeToShoppingCart} maxWidth="md">
          <Typography variant="h2">Shopping cart</Typography>
          <Typography variant="h5">Items in cart: {totalItems}</Typography>
          <Typography variant="h5">Total: {totalCartPrice()}</Typography>
        </Container>
        <Container className={classes.wrapper} maxWidth="md">
          <Container maxWidth="md">
            {cart.map((product) => (
              <SlipCard key={product.id} product={product} />
            ))}
          </Container>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setShowForm(true)}
          >
            CheckOut
          </Button>
          {showForm && <CheckoutForm />}
        </Container>
      </Box>
    </React.Fragment>
  );
}
