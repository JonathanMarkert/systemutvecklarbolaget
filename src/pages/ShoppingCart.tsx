import React from "react";
import  ProductCard from "../components/ProductCard";
import { Product, products } from "../Mockdata";
import { Container, CardMedia } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  welcomeToShoppingCart: {
    backgroundColor: 'blue',
    textAlign: 'center',
    color: 'white'
  },
  cardGrid: {
    backgroundColor: '#009135',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
  },
  cartSlip: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'grey'
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
          // Statisk
          <h1>ShoppingCart</h1>
          // Vill ta in ett värde från vagnen //
            <h2>Your cart is empthy</h2>
        </div>
        <div className={classes.cartSlip}>
          This is a cardslip
          // Grid? // Name
          <div className={classes.cardSlipMedia}>
            content
          </div>
        </div>
    </Container>
  </>
  );
};
