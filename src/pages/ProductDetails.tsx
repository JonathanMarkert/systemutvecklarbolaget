import {
  Button,
  CardMedia, Container,
  createStyles, Grid, makeStyles, Paper, Theme,
  Typography
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { FC, useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import { ProductContext } from "../components/context/ProductContext";
import { Product, products } from "../Mockdata";


const useStyles = makeStyles((theme: Theme) =>
createStyles({
  page: {
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(4),
  },
  containerStyle: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: theme.spacing(1),
  },
  image: {
    height: 500,
    width: 'auto',
    objectFit: 'contain',
  },
  card: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 200,
  },
  root: {
    padding: theme.spacing(5),
    flexGrow: 1,
    display: "flex",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
})
);

interface DetailsProps extends RouteComponentProps <{productid: string}> {}

const ProductDetails: FC<DetailsProps> = ({ match}:DetailsProps) => {
  
  const { handleAddToCart } = useContext(ProductContext);
  const classes = useStyles();
  const productId = match.params.productid;
  const product = products.find((p) => p.id === productId) as Product;
   
  return (
   
    <Container className={classes.root}>
      <Grid container direction={"row"}justifyContent={"center"}alignItems={"center"}>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={6}>
          <div className={classes.card}>
           <CardMedia className={classes.image}   
           component='img'         
           image={product.urlDetails} 
           />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h2">{product.name}</Typography>
            <Typography variant="h5">{product.brewery}</Typography>
            <Typography>{product?.description}</Typography>
            <Button size="large" color="secondary" onClick={() => handleAddToCart(product)}>
            <AddShoppingCartIcon style={{ fontSize: 50 }} color="secondary"/>
              Buy now
            </Button>
          </Paper>
        </Grid>
      </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetails;