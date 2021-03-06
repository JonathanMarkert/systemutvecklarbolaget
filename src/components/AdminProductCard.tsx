import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import React, { FC, useContext } from "react";
import { ProductContext } from "../components/context/ProductContext";
import { Product } from "../Interfaces/IProduct";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: "0.5rem",
      boxSizing: "content-box",
      "&::before, ::after": {
        boxSizing: "content-box",
      },
    },
    paper: {
      maxWidth: 1200,
      padding: "0.5rem",
    },
    cardMedia: {
      width: 128,
      height: 128,
      objectFit: "contain",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        height: "100%",
      },
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    deleteButton: {
      color: theme.palette.error.main,
    },
    editButton: {
      color: theme.palette.secondary.main,
    },
    wordWrap: {
      wordWrap: "break-word",
    },
    gridXs: {
      [theme.breakpoints.down("xs")]: {
        minWidth: "100%",
        minhHeight: "100%",
      },
    },
  })
);

interface Props {
  product: Product;
  handleClickOpen: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    product: Product
  ) => void;
}

const AdminProductCard: FC<Props> = ({ product, handleClickOpen }) => {
  const classes = useStyles();
  const { deleteBeerProduct } = useContext(ProductContext);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={5}>
        <Grid container spacing={3}>
          <Grid item className={classes.gridXs}>
            <Typography variant="h6" align="center">
              Image
            </Typography>
            <CardMedia className={classes.cardMedia}>
              <img
                className={classes.img}
                alt={product.name}
                src={product.url}
              />
            </CardMedia>
          </Grid>
          <Grid item className={classes.gridXs}>
            <Typography variant="h6" align="center">
              Detail Image
            </Typography>
            <CardMedia className={classes.cardMedia}>
              <img
                className={classes.img}
                alt={product.name}
                src={product.urlDetails}
              />
            </CardMedia>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs={12} md={2}>
              <Typography variant="h6" align="center">
                Name
              </Typography>
              <Tooltip title={product.name} arrow>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  align="center"
                  className={classes.wordWrap}
                >
                  {product.name.length > 23 && product.name.indexOf(" ") <= 0
                    ? product.name.substring(0, 20) + "..."
                    : product.name}
                </Typography>
              </Tooltip>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="h6" align="center">
                Brewery
              </Typography>
              <Tooltip title={product.brewery} arrow>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  align="center"
                  className={classes.wordWrap}
                >
                  {product.brewery.length > 30 &&
                  product.brewery.indexOf(" ") <= 0
                    ? product.brewery.substring(0, 20) + "..."
                    : product.brewery}
                </Typography>
              </Tooltip>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="h6" align="center">
                Price
              </Typography>
              <Typography gutterBottom variant="subtitle1" align="center">
                {product.price}???
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" align="center">
                Description
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                align="center"
                className={classes.wordWrap}
              >
                {product.description}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} className={classes.center}>
              <Button
                className={classes.editButton}
                onClick={(event) => handleClickOpen(event, product)}
              >
                EDIT
              </Button>
              <Button
                className={classes.deleteButton}
                onClick={() => deleteBeerProduct(product)}
              >
                DELETE
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default AdminProductCard;
