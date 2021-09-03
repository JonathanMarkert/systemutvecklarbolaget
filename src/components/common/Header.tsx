import { Badge, Hidden } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";



const image: string =
  "https://cdn.systembolaget.se/4a51ce/globalassets/logo.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      // opacity: "50%",
    },
    grow: {
      flexGrow: 1,
    },
    appBarStyle: {
      position: "fixed",
      // backgroundImage: `url(${headerImage})`,
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
        // color white
        color: '#fff',
      },
    },
    mainImage: {},
  })
);

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBarStyle}>
        <Toolbar>
          <Link to="/">
          <IconButton>
            <img src={image} alt="" />
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
              <Badge badgeContent={3} color={"secondary"}>
                <ShoppingCartOutlinedIcon className={classes.iconStyle} />
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
