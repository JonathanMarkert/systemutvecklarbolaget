import { Box, CardMedia, IconButton } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import classNames from "classnames";
import { FC, useContext } from "react";
import { Product } from "../Interfaces/IProduct";
import { CartContext } from "./context/CartContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: '1.5rem'
    },
    paper: {
      maxWidth: 1200,
    },
    image: {
      width: 128,
      height: 128,
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
    deleteIcon: {
      color: "red",
      opacity: "0.3",
      fontSize: "2rem",
      "&:hover": {
        color: "red",
        opacity: 1,
        outline: "none",
      },
    },
    incAmountButton: {
      color: theme.palette.primary.light,
      "&:active": {
        color: theme.palette.secondary.light,
       },
    },
    decAmountButton: {
      color: theme.palette.primary.light,
      "&:active": {
        color: theme.palette.error.light,
      },
    },
    amountButtonsMobile: {
      [theme.breakpoints.down("xs")]: {
        fontSize: 70,
      },
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    textCenterMobile:{
      [theme.breakpoints.down("sm")]:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
      },
    },
    textWrap: {
        whiteSpace: 'pre-line',
    },
  })
);

interface Props {
  product: Product;
}

const SlipCard: FC<Props> = ({ product }) => {
  const classes = useStyles();
  const { handleRemoveFromCart, decrementNumber, incrementNumber } = useContext(CartContext);
  
  return (
    <div className={classes.root}>
      <Paper elevation={5} className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <CardMedia className={classes.image}>
              <img
                className={classes.img}
                alt={product.name}
                src={product.urlDetails}
              />
            </CardMedia>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item md container direction="column" spacing={1} className={classes.textCenterMobile}>
              <Grid item xs={12}>
                <Tooltip title={product.name} arrow>
                  <Typography gutterBottom variant="h6" className={classes.textWrap}>
                    {product.name.length > 16 && product.name.indexOf(' ') <= 0 ? product.name.substring(0,13) + '...' : product.name}
                  </Typography>
                </Tooltip>
                  <Typography variant="body2" color="textSecondary" className={classes.textCenterMobile}>
                    {product.price}€
                  </Typography>
              </Grid>
            </Grid>
            <Grid item container className={classes.center} xs={12} sm={3} md={3}>
              <Box className={classes.center}>
                <IconButton style={{ background: 0 }}>
                  <RemoveCircleIcon
                    fontSize="large"
                    onClick={() => decrementNumber(product)}
                    className={classNames(
                      classes.decAmountButton,
                      classes.amountButtonsMobile
                    )}
                  />
                </IconButton>
                <Typography variant="h6">{product.amount}</Typography>
                <IconButton style={{ background: 0 }}>
                  <AddCircleIcon
                    fontSize="large"
                    onClick={() => incrementNumber(product)}
                    className={classNames(
                      classes.incAmountButton,
                      classes.amountButtonsMobile
                    )}
                  />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={3} className={classes.center}>
              <Typography variant="subtitle2">
                Total: {product.price * product.amount}€
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={3} className={classes.center}>
              <IconButton
                style={{ background: 0 }}
                onClick={() => handleRemoveFromCart(product)}
              >
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
