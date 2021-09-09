import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import CheckoutForm from '../components/CheckoutForm';
import SplipCard from "../components/SlipCard";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  background: {
    backgroundColor: 'white',
  },
  welcomeToShoppingCart: {
    backgroundColor: theme.palette.secondary.light,
    textAlign: 'center',
    color: 'white',
    marginBottom: 0,
    padding: '0.5rem'
  },
  wrapper: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 0,
    padding: '0.5rem',
  },
  
}));


export default function ShoppingCart(){
  const classes = useStyles();
  const [showForm, setShowForm] = useState(false)
  
  return (
    <React.Fragment>
      <CssBaseline/>
      <main className={classes.background}>
        <Container className={classes.welcomeToShoppingCart} maxWidth="md">
          <h1>Shopping cart</h1>
          <h2>Antal varor i varukorg</h2>
        </Container>
          <Container className={classes.wrapper} maxWidth="md">
              <Container maxWidth="md">
                <SplipCard />
              </Container>
                <Button variant="contained" color="secondary" onClick={() => setShowForm(true) }>CheckOut</Button>
            {showForm && <CheckoutForm />}
          </Container>
      </main>
    </React.Fragment>
  );
};
