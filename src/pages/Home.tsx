
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ProductCard from "../components/ProductCard";
import { products } from "../Mockdata";


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