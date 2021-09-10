import React, { FC, useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Product } from "../Interfaces/IProduct";
import { CartContext } from "./context/CartContext";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
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
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Price: {product.price} :- /each
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Total: {product.price * product.amount} :-
              </Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={() => handleRemoveFromCart(product)}>
                <DeleteForeverTwoToneIcon className={classes.deleteIcon} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <AddCircleIcon onClick={() => incrementNumber(product)} />
          {product.amount}
          <RemoveCircleIcon onClick={() => decrementNumber(product)} />
        </Grid>
      </Paper>
    </div>
  );
};

export default SlipCard;
