import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography
} from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Product } from "../Interfaces/IProduct";
import { CartContext } from "./context/CartContext";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
  },
  cardMedia: {
    display: "flex",
    justifyContent: "center",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100%",
    },
  },
  img: {
    width: 285,
    objectFit: "contain",
  },
  cardContent: {
    flexGrow: 1,
    height: "10rem",
    textOverflow: "",
    overflow: "hidden",
    textJustify: "inter-word",
    "&:hover": {
      overflow: "auto",
    },
  },
  linkStyling: {
    textDecoration: "none",
  },
  actionButton: {
    textDecoration: "none",
    color: theme.palette.primary.light,
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  wordWrap: {
    wordWrap: "break-word",
  },
}));

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const classes = useStyles();
  const { handleAddToCart } = useContext(CartContext);
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cardMedia}>
        <img className={classes.img} alt={product.name} src={product.url} />
      </CardMedia>
      <CardContent className={classes.cardContent}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          align="center"
          className={classes.wordWrap}
        >
          {product.name}
        </Typography>
        <Box>{product.description}</Box>
      </CardContent>
      <CardActions>
        <Link className={classes.linkStyling} to={`/details/${product.id}`}>
          <Button
            className={classes.actionButton}
            size="small"
            aria-label="details"
          >
            View
          </Button>
        </Link>
        <Button
          className={classes.actionButton}
          size="small"
          onClick={() => handleAddToCart(product)}
          aria-label="add to cart"
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
