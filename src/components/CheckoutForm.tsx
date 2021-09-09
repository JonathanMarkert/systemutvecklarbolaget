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
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    link: {
      textDecoration: 'none',
    }
  }),
);

export default function CheckoutForm() {
  const classes = useStyles();
  // const [text, setText] = useState<string>();
  // const [zipcode, setZipcode] = useState<string>();
  // const [address, setAddress] = useState<string>();
  // const [phone, setPhone] = useState<string>();
  // const [mail, setMail] = useState<string>();
  const [errors, setErrors] = useState<{ phone?: string, text?: string, zipcode?: string, address?:string, mail?: string }>();

  
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: {value} } = event;
    setErrors({ ...errors, text: '' })
    // setText(value);
    let textReg = new RegExp(/^[a-zåäöA-ZÅÄÖ\u00C0-\u00ff\s'-]+$/).test(value);
    if (!textReg) {
      setErrors({ ...errors, text: 'Only letters are permitted'})
    }    
  }; // Behöver bryta upp denna i firstName, lastName etc
  const handleAdderssChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: {value} } = event;
    setErrors({ ...errors, address: '' })
    // setAddress(value);
    let addressReg = new RegExp(/[A-Za-zåäö]+/).test(value);
    if (!addressReg) {
      setErrors({ ...errors, address: 'Only letters and numbers are permitted'})
    }    
  };
  const handleZipcodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: {value} } = event;
    setErrors({ ...errors, zipcode: '' })
    // setZipcode(value);
    let zipReg = new RegExp(/^[+ 0-9]{5}$/).test(value.replace(/\s/g, ""));
    if (!zipReg) {
      setErrors({ ...errors, zipcode: 'Has to be 5 numbers'})
    }    
  };
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: {value} } = event;
    setErrors({ ...errors, phone: '' })
    // setPhone(value);
    let phoneReg = new RegExp(/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm).test(value);
    if (!phoneReg ) {
      setErrors({ ...errors, phone: 'Only numbers are permitted'})
    }    
  };
  const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: {value} } = event;
    setErrors({ ...errors, mail: '' })
    // setMail(value);
    let mailReg = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/).test(value);
    if (!mailReg ) {
      setErrors({ ...errors, mail: 'Needs to be an valid email'})
    }    
  };
  
  // Flytta till egen fil ex checkoutFormFields
  // bara fälten
  // ta in props och changes
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
            error={Boolean(errors?.text)}
            helperText={(errors?.text)}
            onChange={handleTextChange}
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
            error={Boolean(errors?.text)}
            helperText={(errors?.text)}
            onChange={handleTextChange}
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
            error={Boolean(errors?.address)}
            helperText={(errors?.address)}
            onChange={handleAdderssChange}
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
            error={Boolean(errors?.zipcode)}
            helperText={(errors?.zipcode)}
            onChange={handleZipcodChange}
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
            error={Boolean(errors?.text)}
            helperText={(errors?.text)}
            onChange={handleTextChange}
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
            error={Boolean(errors?.text)}
            helperText={(errors?.text)}
            onChange={handleTextChange}
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
            error={Boolean(errors?.phone)}
            helperText={(errors?.phone)}
            onChange={handlePhoneChange}
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
            error={Boolean(errors?.mail)}
            helperText={(errors?.mail)}
            onChange={handleMailChange}
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
      <Link to="/checkout" className={classes.link}>
        <Button 
          className={classes.orderButton}
          variant="contained" 
          color="secondary" 
        >
          Place Order
        </Button>
      </Link>
    </form>
  );
}


