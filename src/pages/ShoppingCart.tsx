import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import { CartContext } from "../components/context/CartContext";
import SlipCard from "../components/SlipCard";

const useStyles = makeStyles((theme) => ({
  gridContainerStyle: {
    paddingTop: theme.spacing(3),
  },
  topGrid: {
    paddingTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomGrid: {
    paddingTop: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  formStyle: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
  },
  slipCardContainer: {
    flexGrow: 1,
  },
  papperStyle: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
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
        <Grid item xs={12} className={classes.topGrid}>
          <Typography variant="h2">Shopping cart</Typography>
          <Typography variant="h5">Items in cart: {totalItems}</Typography>
          <Typography variant="h5">Total: {totalCartPrice()}</Typography>
        </Grid>
        <Grid container direction="column">
          {cart.map((product) => (
            <SlipCard key={product.id} product={product} />
          ))}
        </Grid>
      </Grid>
      <Grid item className={classes.topGrid}>
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
