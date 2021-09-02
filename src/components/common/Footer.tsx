import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    footer: {
      backgroundColor: "#7c3f04",
      padding: theme.spacing(6),
    },
    textColor: {
      color: "#d4ccce",
    }
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography className={classes.textColor} variant="subtitle1" align="center" color="textSecondary" component="p">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
      </Typography>
      <Box textAlign="center" className={classes.textColor}>
          Systemutveklar Bolaget 	&copy; {new Date().getFullYear()}
      </Box>
    </div>
  );
};
