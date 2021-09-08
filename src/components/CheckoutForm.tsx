import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import CallTwoToneIcon from '@material-ui/icons/CallTwoTone';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import PublicTwoToneIcon from '@material-ui/icons/PublicTwoTone';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '18rem',
      },
      color: 'black',
      marginTop: '2rem',
    },
    displayIcon: {
        color: 'black',
    },
    orderButton: {
      marginTop: '2rem',
    },
  }),
);

export default function CheckoutForm() {
  const classes = useStyles();
  
  return (
    <form className={classes.root} noValidate autoComplete="on">
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineTwoToneIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineTwoToneIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address"
            name="address"
            label= "Address"
            fullWidth
            autoComplete="shipping address"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeTwoToneIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zipcode"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeTwoToneIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeTwoToneIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PublicTwoToneIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mobileNumber"
            name="mobileNumber"
            label="Mobile Number"
            fullWidth
            autoComplete="tel-national username"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CallTwoToneIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailTwoToneIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Button variant="contained" color="secondary" className={classes.orderButton}>Place Order</Button>
    </form>
  );
}
