
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React, { useContext } from 'react';
import ProductCard from "../components/ProductCard";
import HeroSection from "../components/HeroSection";
import { ProductContext } from '../components/context/ProductContext';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
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
  const { beerProductArray } = useContext(ProductContext);

  return (
      <main className={classes.background}>
        <HeroSection />
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {beerProductArray.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
  );
}

//add this for admins under cardAction
//<Button size="small" color="primary">
//Edit
//</Button>