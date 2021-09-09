import { Badge, Hidden } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import classNames from "classnames";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePrevious } from "../../CustomHook";
import MainLogo from "../../images/logga.png";
import { CartContext } from "../context/CartContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    grow: {
      flexGrow: 1,
    },
    appBarStyle: {
      position: "fixed",
      backgroundColor: theme.palette.primary.main,
    },
    titleStyle: {
      flexGrow: 1,
      fontFamily: "cursive",
      color: theme.palette.primary.contrastText,
    },
    iconStyle: {
      fontSize: 40,
      color: theme.palette.primary.contrastText,
      "&:hover": {
        color: "#fff",
      },
    },
    animateStyle: {
      color: theme.palette.secondary.main,
      fontSize: 50,
    },
  })
);

export default function MenuAppBar() {
  const classes = useStyles();
  const { cart } = useContext(CartContext);
  const [animate, setAnimate] = useState<boolean>(false);

  const totalItems = cart.reduce(
    (total: number, cart) => total + cart.amount,
    0
  );

  const previousTotal = usePrevious(totalItems);
  useEffect(() => {
    if (previousTotal !== totalItems) {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 1000);
    }
  }, [previousTotal, totalItems]);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBarStyle}>
        <Toolbar>
          <Link to="/">
            <IconButton>
              <img style={{width:"100%"}} src={MainLogo} alt="" />
            </IconButton>
          </Link>
          <div className={classes.grow}>
            <Hidden only="xs">
              <Typography variant="h6" className={classes.titleStyle}>
                SystemUtvecklarBolaget
              </Typography>
            </Hidden>
          </div>
          <div>
            <Link to="/cart">
              <IconButton aria-label="cart">
                <Badge badgeContent={totalItems} color={"secondary"}>
                  <ShoppingCartOutlinedIcon
                    className={classNames(classes.iconStyle, {
                      [classes.animateStyle]: animate,
                    })}
                  />
                </Badge>
              </IconButton>
            </Link>
            <Link to="/admin">
              <IconButton>
                <AccountCircle className={classes.iconStyle} />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
