import TextField from '@material-ui/core/TextField';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import CallTwoToneIcon from '@material-ui/icons/CallTwoTone';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import PublicTwoToneIcon from '@material-ui/icons/PublicTwoTone';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import { IFormFieldErrors } from './CheckoutForm';

interface Props {
  errors: IFormFieldErrors,
  handleFirstNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleLastNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleAdderssChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleZipcodChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleCityChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleCountryChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handlePhoneChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleMailChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
};

export default function CheckoutFormFields({ errors, ...props}: Props) {
  console.log('formfeild');

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          // key={errors.firstName}
          required
          id="firstName"
          name="firstName"
          label="First name"
          fullWidth
          autoComplete="given-name"
          variant="outlined"
          error={(Boolean(errors.firstName))}
          helperText={(errors.firstName)}
          onChange={props.handleFirstNameChange}
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
          // key={errors.lastName}
          required
          id="lastName"
          name="lastName"
          label="Last name"
          fullWidth
          autoComplete="family-name"
          variant="outlined"
          error={Boolean(errors.lastName)}
          helperText={(errors.lastName)}
          onChange={props.handleLastNameChange}
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
        //  key={errors.address}
          required
          id="address"
          name="address"
          label= "Address"
          fullWidth
          autoComplete="shipping address"
          variant="outlined"
          error={Boolean(errors.address)}
          helperText={(errors.address)}
          onChange={props.handleAdderssChange}
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
          // key={errors.zipcode}
          required
          id="zip"
          name="zip"
          label="Zipcode"
          fullWidth
          autoComplete="shipping postal-code"
          variant="outlined"
          error={Boolean(errors.zipcode)}
          helperText={(errors.zipcode)}
          onChange={props.handleZipcodChange}
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
          // key={errors.city}
          required
          id="city"
          name="city"
          label="City"
          fullWidth
          autoComplete="shipping address-level2"
          variant="outlined"
          error={Boolean(errors.city)}
          helperText={(errors.city)}
          onChange={props.handleCityChange}
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
          // key={errors.country}
          required
          id="country"
          name="country"
          label="Country"
          fullWidth
          autoComplete="shipping country"
          variant="outlined"
          error={Boolean(errors.country)}
          helperText={(errors.country)}
          onChange={props.handleCountryChange}
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
          // key={errors.phone}
          required
          id="mobileNumber"
          name="mobileNumber"
          label="Mobile Number"
          fullWidth
          autoComplete="tel-national username"
          variant="outlined"
          error={Boolean(errors.phone)}
          helperText={(errors.phone)}
          onChange={props.handlePhoneChange}
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
          // key={errors.mail}
          variant="outlined"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          error={Boolean(errors.mail)}
          helperText={(errors.mail)}
          onChange={props.handleMailChange}
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
  );
}