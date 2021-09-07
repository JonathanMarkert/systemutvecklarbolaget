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
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';

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
    backgroundColor: '#345621',
    textAlign: 'center',
    color: 'white',
    marginBottom: 0,
    padding: '0.5rem',
  },
  cartSlipMedia: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    border: 'pink',
    marginBottom: '1rem',
    padding: '1rem',
    color: 'brown'
  },
  cartSlipContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    // height: 100,
    paddingLeft: '1rem',
    color: 'green'
  },
  thumbNail: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  },
  titleText: {
    margin: '0 0 2rem 0',
  },
  spaceBetween: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // textAlign: 'right'
  },
  row: {
    display: 'flex',
  },
  amountText: {
    margin: '0 2rem',
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
          <h2>Antal varor i varukorg</h2>
        </Container>
          <Container className={classes.wrapper} maxWidth="md">
            <h2>Wrapper</h2>
              <Container maxWidth="md">
                <Card className={classes.cartSlipMedia}>
                  <Avatar 
                    variant="rounded" 
                    src='https://images.ctfassets.net/ngqihdllh70f/3P0eSoXiTYlcZcGAHrtoZn/7f8214f4aaee2bbced7dcf72022a1457/xmas_override_keg.png' 
                    alt=""
                    className={classes.thumbNail}>
                  </ Avatar>
                  <div className={classes.cartSlipContent}>
                    <div>
                      <h2 className={classes.titleText}>name</h2>
                      <h3>price/st</h3>
                    </div>
                    <div className={classes.row}>
                      <h2 className={classes.amountText}>Antal:</h2>
                      <button>- 0 +</button>
                    </div>
                    <div className={classes.spaceBetween}>
                      <DeleteForeverTwoToneIcon />
                      <h3>summa pris</h3>
                    </div>
                  </div>
                </Card>

                <Card className={classes.cartSlipMedia}>
                  <Avatar 
                    variant="rounded" 
                    src='https://images.ctfassets.net/ngqihdllh70f/3P0eSoXiTYlcZcGAHrtoZn/7f8214f4aaee2bbced7dcf72022a1457/xmas_override_keg.png' 
                    alt=""
                    className={classes.thumbNail}>
                  </ Avatar>
                  <div className={classes.cartSlipContent}>
                    <div>
                      <h2 className={classes.titleText}>name</h2>
                      <h3>price/st</h3>
                    </div>
                    <div className={classes.row}>
                      <h2 className={classes.amountText}>Antal:</h2>
                      <button>- 0 +</button>
                    </div>
                    <div className={classes.spaceBetween}>
                      <DeleteForeverTwoToneIcon />
                      <h3>summa pris</h3>
                    </div>
                  </div>
                </Card>
              </Container>
          </Container>
      </main>
    </React.Fragment>
  );
};
