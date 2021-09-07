
import { CSSProperties } from "@material-ui/styles";
import  ProductCard from "../components/ProductCard";
import { products } from "../Mockdata";

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  background: {
    backgroundColor: 'white',
  },
  welcomeToShoppingCart: {
    backgroundColor: 'blue',
    textAlign: 'center',
    color: 'white',
    marginBottom: 0,
    padding: '0.5rem'
  },
  wrapper: {
    backgroundColor: 'purple',
    textAlign: 'center',
    color: 'white',
    marginBottom: 0,
    padding: '0.5rem'
  },
  cartSlip: {
    height: '100%',
    backgroundColor: 'grey',
    marginBottom: '1rem',
    marginLeft: '1rem',
    padding: '1rem'
  },
  cartSlipMedia: {
    width: '100%',
    height: 100
  }

}));

interface Props {
  
}

export default function ShoppingCart(){
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <CssBaseline/>

      <main className={classes.background}>
        <Container className={classes.welcomeToShoppingCart} maxWidth="md">
          <h1>Shopping cart</h1>
        </Container>
          <Container className={classes.wrapper} maxWidth="md">
            <h2>Wrapper</h2>
              <Grid container spacing={2}>
                <div className={classes.cartSlip}>
                  <h3>cart slip</h3>
                    <div className={classes.cartSlipMedia}>
                      <h4>cart slip media</h4>
                    </div>
                </div>
                <div className={classes.cartSlip}>
                  <h3>cart slip</h3>
                    <div className={classes.cartSlipMedia}>
                      <h4>cart slip media</h4>
                    </div>
                </div>
                <div className={classes.cartSlip}>
                  <h3>cart slip</h3>
                    <div className={classes.cartSlipMedia}>
                      <h4>cart slip media</h4>
                    </div>
                </div>
                <div className={classes.cartSlip}>
                  <h3>cart slip</h3>
                    <div className={classes.cartSlipMedia}>
                      <h4>cart slip media</h4>
                    </div>
                </div>

              </Grid>
          </Container>
      </main>
    </React.Fragment>
  );
};

//<Container maxWidth="md">
/*<div className={classes.welcomeToShoppingCart}>
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
</Container>*/
