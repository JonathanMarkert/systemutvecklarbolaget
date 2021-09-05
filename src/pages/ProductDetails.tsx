import {
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Button,
  CardMedia,
  Hidden,
} from "@material-ui/core";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { products } from "../Mockdata";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    page: {
      display: "flex",
      flexWrap: "wrap",
      padding: theme.spacing(4),
    },
    containerStyle: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-end",
      padding: theme.spacing(1),
    },
    image: {
      maxWidth: "10rem",
      padding: theme.spacing(2),
    },
  })
);

const testData = products.find((p) => p.id === "1");

export default function ProductDetails() {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <Container className={classes.containerStyle}>
        <div className={classes.image}>
          <CardMedia
            component="img"
            alt=""
            height="400" // ändra till variabel med state beroende på storlek ?
            image={testData?.url}
            title={testData?.name}
          />
        </div>
        <Hidden xsDown>
          <Button size="large" color="primary">
            <AddShoppingCartIcon style={{ fontSize: 50 }} color="primary" />
          </Button>
        </Hidden>
      </Container>

      <Container>
        <Typography variant="h2">{testData?.name}</Typography>
        <Typography variant="h5">{testData?.brewery}</Typography>
        <Hidden smDown>
          <Typography>{testData?.description}</Typography>
        </Hidden>
      </Container>
      <Hidden smUp>
        <Button size="large" color="primary">
          Buy
        </Button>
      </Hidden>
    </div>
  );
}
