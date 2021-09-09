import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Product } from "../Interfaces/IProduct";
import { FC, useContext } from "react";
import { CartContext } from "./context/CartContext";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cartSlipMedia: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    marginBottom: "1rem",
    padding: "1rem",
    color: "#000",
  },
  cartSlipContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    paddingLeft: "1rem",
  },
  thumbNail: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  titleText: {
    margin: "0 0 2rem 0",
  },
  spaceBetween: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  row: {
    display: "flex",
    alignItems: "center",
  },
  amountText: {
    margin: "0 2rem",
  },
  amountButton: {
    borderRadius: "50%",
    color: "#fff",
    backgroundColor: theme.palette.secondary.light,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  amountDiv: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: "20px",
    border: "1px solid #444444",
    padding: "0.2rem",
  },
  amountPadding: {
    padding: "0 0.5rem",
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
}));

interface Props {
  product: Product;
}

const SlipCard: FC<Props> = ({ product }) => {
  const classes = useStyles();
  const {
    handleRemoveFromCart,
    decrementNumber,
    incrementNumber,
  } = useContext(CartContext);
  return (
    <Card className={classes.cartSlipMedia}>
      <Avatar
        variant="rounded"
        src={product.url}
        alt={product.name}
        className={classes.thumbNail}
      ></Avatar>
      <div className={classes.cartSlipContent}>
        <div>
          <h2 className={classes.titleText}>{product.name}</h2>
          <h3>{product.price}:-/st</h3>
        </div>
        <div className={classes.row}>
          <h2 className={classes.amountText}>Antal: </h2>
          <div className={classes.amountDiv}>
            <button className={classes.amountButton}>
              <AddIcon onClick={() => incrementNumber(product)} />
            </button>
            <span className={classes.amountPadding}>{product.amount}</span>
            <button className={classes.amountButton}>
              <RemoveIcon onClick={() => decrementNumber(product)} />
            </button>
          </div>
        </div>
        <div className={classes.spaceBetween}>
          <IconButton onClick={() => handleRemoveFromCart(product)}>
            <DeleteForeverTwoToneIcon className={classes.deleteIcon} />
          </IconButton>
          <h3>summa pris: {product.price * product.amount}</h3>
        </div>
      </div>
    </Card>
  );
};

export default SlipCard;
