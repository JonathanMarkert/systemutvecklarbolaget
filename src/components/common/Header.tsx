import { Badge, Hidden, Tooltip } from "@material-ui/core";
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
    iconButtonStyle: {
      padding: "0 0.5rem",
    },
    titleStyle: {
      flexGrow: 1,
      fontFamily: "cursive",
      color: theme.palette.primary.contrastText,
    },
    iconStyle: {
      fontSize: 29,
      color: theme.palette.primary.contrastText,
      "&:hover": {
        color: "#fff",
      },
    },
    animateStyle: {
      color: theme.palette.secondary.main,
      fontSize: 33,
    },
    removeBgOnHover: {
      "&:hover": {
        backgroundColor: "transparent",
      },
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
      }, 300);
    }
  }, [previousTotal, totalItems]);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBarStyle}>
        <Toolbar>
          <Link to="/">
            <Tooltip title="Home" arrow>
              <IconButton
                className={classNames(
                  classes.iconButtonStyle,
                  classes.removeBgOnHover
                )}
              >
                <img style={{ width: "100%" }} src={MainLogo} alt="" />
              </IconButton>
            </Tooltip>
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
              <Tooltip title="Shopping Cart" arrow>
                <IconButton
                  aria-label="cart"
                  className={classNames(
                    classes.iconButtonStyle,
                    classes.removeBgOnHover
                  )}
                >
                  <Badge badgeContent={totalItems} color={"secondary"}>
                    <ShoppingCartOutlinedIcon
                      className={classNames(classes.iconStyle, {
                        [classes.animateStyle]: animate,
                      })}
                    />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Link>
            <Link to="/admin">
              <Tooltip title="Admin" arrow>
                <IconButton
                  className={classNames(
                    classes.iconButtonStyle,
                    classes.removeBgOnHover
                  )}
                >
                  <AccountCircle className={classes.iconStyle} />
                </IconButton>
              </Tooltip>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
