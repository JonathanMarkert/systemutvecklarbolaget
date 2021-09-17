import { Card, Container } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "Center",
      alignItems: "center",
    },
    card: {
      textAlign: "center",
      padding: "2rem",
      margin: "2rem 0rem",
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
    },
  })
);

export default function Checkout() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Card className={classes.card}>
        <Typography variant="h1">Thank you for your order.</Typography>
        <Typography variant="subtitle1">
          Your order number is #2001539. We have emailed your order
          confirmation, and will send you an update when your order has shipped.
        </Typography>
      </Card>
    </Container>
  );
}
