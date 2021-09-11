import { IconButton } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import React, { FC, useContext } from "react";
import { Product } from "../Interfaces/IProduct";
import { CartContext } from "./context/CartContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      maxWidth: 700,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    deleteIcon: {
      color: "red",
      opacity: "0.5",
      fontSize: "3rem",
      "&:hover": {
        fontSize: "3.5rem",
        color: "red",
        opacity: 1,
      },
    },
    amountButtons: {
      color: theme.palette.secondary.light,
      "&:hover": {
        color: theme.palette.primary.light,
      },
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    end: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
  })
);

interface Props {
  product: Product;
}

const SlipCard: FC<Props> = ({ product }) => {
  const classes = useStyles();
  const { handleRemoveFromCart, decrementNumber, incrementNumber } =
    useContext(CartContext);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt={product.name}
                src={product.url}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs={12} md={3}>
                <Typography gutterBottom variant="subtitle1">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Price: {product.price} :- /each
                </Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems="center" xs={12} md={3}>
              <AddCircleIcon
                fontSize="large"
                onClick={() => incrementNumber(product)}
                className={classes.amountButtons}
              />
              <Typography variant="h6">
              {product.amount}
                </Typography>
              <RemoveCircleIcon
                fontSize="large"
                onClick={() => decrementNumber(product)}
                className={classes.amountButtons}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="subtitle2">
                Total: {product.price * product.amount} :-
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <IconButton onClick={() => handleRemoveFromCart(product)}>
                <DeleteForeverTwoToneIcon className={classes.deleteIcon} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default SlipCard;
