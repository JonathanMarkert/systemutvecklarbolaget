import { Box, Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useEffect, useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import { CartContext } from "../components/context/CartContext";
import SlipCard from "../components/SlipCard";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import EuroSymbolOutlinedIcon from "@material-ui/icons/EuroSymbolOutlined";
import classNames from "classnames";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formStyle: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
    marginBottom: "1rem",
  },
  stickyContent: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      position: "fixed",
      top: 77,
      backgroundColor: "#fafafa",
      height: 10,
      color: theme.palette.primary.light,
      borderStyle: "solid",
      borderRadius: "0.5rem",
      zIndex: 9,
    },
  },
  checkoutButton: {
    marginBottom: '1rem',
  }
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
      {cart.length === 0 ? (
        <Box className={classes.topGridFlex}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4">Cart is empty</Typography>
            <Box>
              <SentimentVeryDissatisfiedIcon />
              <ShoppingCartOutlinedIcon />
            </Box>
          </Box>
        </Box>
      ) : (
        <Container>
          <Grid container className={classes.gridContainerStyle}>
            <Grid item xs={12} className={classes.topGridFlex}>
              <Box
                className={classNames(
                  classes.stickyContent,
                  classes.topGridFlex
                )}
              >
                <Box className={classes.topGridFlex}>
                  <Typography variant="h5">Shopping</Typography>
                  <ShoppingCartOutlinedIcon />
                  <Typography variant="h5" style={{ color: "green" }}>
                    ({totalItems})
                  </Typography>
                </Box>
                <Box className={classes.topGridFlex}>
                  <Typography variant="h5"> {totalCartPrice()}</Typography>
                  <EuroSymbolOutlinedIcon style={{ color: "green" }} />
                </Box>
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
              className={classes.checkoutButton}
              onClick={() => setShowForm(true)}
            >
              CheckOut
            </Button>
            <Container className={classes.formStyle}>
              {showForm && <CheckoutForm />}
            </Container>
          </Grid>
        </Container>
      )}
    </Container>
  );
}
