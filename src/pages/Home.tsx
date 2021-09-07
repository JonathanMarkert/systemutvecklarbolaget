
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
import HeroSection from "../components/HeroSection";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },

//detta ska lyftas in i tema eller css
  background: {
    backgroundColor: 'white',
  },
  cardGrid: {
    backgroundColor: 'white',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
  }, 

}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      
      <main className={classes.background}>
          <HeroSection/>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
      
            {products.map(product => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}

    </React.Fragment>
  );
}

//add this for admins under cardAction
//<Button size="small" color="primary">
//Edit
//</Button>