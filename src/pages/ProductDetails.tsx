import {
  Button,
  CardMedia,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { FC, useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import { CartContext } from "../components/context/CartContext";
import { ProductContext } from "../components/context/ProductContext";
import { Product } from "../Interfaces/IProduct";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(5),
      flexGrow: 1,
      display: "flex",
    },
    card: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 200,
    },
    image: {
      objectFit: "contain",
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    wordWrap: {
      wordWrap: "break-word",
    },
  })
);

interface DetailsProps extends RouteComponentProps<{ productId: string }> {}

const ProductDetails: FC<DetailsProps> = ({ match }: DetailsProps) => {
  const { handleAddToCart } = useContext(CartContext);
  const { beerProductArray } = useContext(ProductContext);
  const classes = useStyles();
  const id = match.params.productId;
  const product = beerProductArray.find((p) => p.id === id) as Product;

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <div className={classes.card}>
              <CardMedia
                className={classes.image}
                component="img"
                image={product.urlDetails}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography className={classes.wordWrap} variant="h2">
                {product.name}
              </Typography>
              <Typography className={classes.wordWrap} variant="h5">
                {product.brewery}
              </Typography>
              <Typography className={classes.wordWrap} variant="subtitle2">
                {product?.description}
              </Typography>
              <Button
                size="large"
                color="secondary"
                onClick={() => handleAddToCart(product)}
              >
                <AddShoppingCartIcon
                  style={{ fontSize: 50 }}
                  color="secondary"
                />
                Buy now
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;