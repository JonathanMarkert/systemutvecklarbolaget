import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    footer: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: theme.spacing(6),
    },
    icon: {
      margin: "0 1rem",
      fontSize: "2rem"
    }
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography  variant="subtitle1" align="center" component="p">
          <FacebookIcon className={classes.icon}/>
          <InstagramIcon className={classes.icon}/>
          <TwitterIcon className={classes.icon}/>
      </Typography>
      <Box textAlign="center">
          Systemutveklar Bolaget 	&copy; {new Date().getFullYear()}
      </Box>
    </div>
  );
};
