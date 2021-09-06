import React from "react";
import  ProductCard from "../components/ProductCard";
import { Product, products } from "../Mockdata";
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  welcomeToShoppingCart: {
    backgroundColor: 'blue',
    textAlign: 'center',
    color: 'white',
    width: '32rem',
    margin: 'auto',
    padding: '0.5rem'
  },
  wrapper: {
    backgroundColor: 'purple',
    width: '32rem',
    margin: 'auto',
    padding: '0 0 30px 0'
  },
  cartSlip: {
    height: '100%',
    backgroundColor: 'grey',
    marginBottom: '1rem'
  },
  cardSlipMedia: {
    width: '100%',
    height: 100
  }

}));

interface Props {
  product: Product
}

export default function ShoppingCart(){
  const classes = useStyles();
  return (
  <>
    <Container>
        <div className={classes.welcomeToShoppingCart}>
          <h1>ShoppingCart</h1>
          // Vill ta in ett värde från vagnen //
            <h2>Your cart is empthy</h2>
        </div>
        <Container className={classes.wrapper}>
          <div className={classes.cartSlip}>
            This is a cardslip
            // Grid? // Name
            <div className={classes.cardSlipMedia}>
              content
            </div>
          </div>
          <div className={classes.cartSlip}>
            This is a cardslip
            // Grid? // Name
            <div className={classes.cardSlipMedia}>
              content
            </div>
          </div>
          <div className={classes.cartSlip}>
            This is a cardslip
            // Grid? // Name
            <div className={classes.cardSlipMedia}>
              content
            </div>
          </div>
        </Container>
    </Container>
  </>
  );
};
