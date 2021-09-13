import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import CheckoutFormFields from './ChekoutFormFields';
import { CartContext } from './context/CartContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        maxWidth: '18rem',
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

export interface IFormFieldErrors {
  firstName?: string, 
  lastName?: string, 
  address?: string, 
  zipcode?: string, 
  city?: string,
  country?: string, 
  phone?: string, 
  mail?: string
}

export default function CheckoutForm() {
  const history = useHistory();
  const classes = useStyles();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [zipcode, setZipcode] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [errors, setErrors] = useState<IFormFieldErrors>({});
  const {emptyAllFromCart} = useContext(CartContext)

  const isFormValuesEntered = () => {
    return firstName && 
    lastName && 
    address &&
    zipcode &&
    city &&
    country &&
    phone &&
    mail;
  };
  const formHasNoError = () => {
    return !errors.firstName && 
    !errors.lastName && 
    !errors.address &&
    !errors.zipcode &&
    !errors.city &&
    !errors.country &&
    !errors.phone &&
    !errors.mail;
  };

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: {value} } = event;
    setFirstName(value);
    checkFirstNameValidation(value);
  };
  const checkFirstNameValidation = (value: string) => {
    setErrors({ ...errors, firstName: '' })
    let firstNameReg = new RegExp(
      /^[a-zåäöA-ZÅÄÖ\u00C0-\u00ff\s'-]+$/)
      .test(value);
    if (!firstNameReg) {
      let newErrors = errors;
      newErrors.firstName = 'Only letters are permitted'
      setErrors(newErrors)
    }  
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: {value} } = event;
    setLastName(value);
    checkLastNameValidation(value);  
  };
  const checkLastNameValidation = (value: string) => {
    setErrors({ ...errors, lastName: '' })
    let lastNameReg = new RegExp(
      /^[a-zåäöA-ZÅÄÖ\u00C0-\u00ff\s'-]+$/)
      .test(value);
    if (!lastNameReg) {
      let newErrors = errors
      newErrors.lastName = 'Only letters are permitted'
      setErrors(newErrors)
    }  
  };
  
  const handleAdderssChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: {value} } = event;
    setAddress(value);
    checkAdderssValidation(value);
  };
  const checkAdderssValidation = (value:string) => {
    setErrors({ ...errors, address: '' })
    let addressReg = new RegExp(
      /[A-Za-zåäö]+/)
      .test(value);
    if (!addressReg) {
      let newErrors = errors
      newErrors.address = 'Only letters and numbers are permitted'
      setErrors(newErrors)
    } 
  };

  const handleZipcodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: {value} } = event;
    setZipcode(value);
    checkZipcodeValidation(value);
  };
  const checkZipcodeValidation = (value:string) => {
    setErrors({ ...errors, zipcode: '' })
    let zipReg = new RegExp(
      /^[+ 0-9]{5}$/)
      .test(value.replace(/\s/g, ""));
    if (!zipReg) {
      let newErrors = errors
      newErrors.zipcode = 'Has to be 5 numbers'
      setErrors(newErrors)
    } 
  }

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: {value} } = event;
    setCity(value);
    checkCityValidation(value);
  };
  const checkCityValidation = (value:string) => {
    setErrors({ ...errors, city: '' })
    let cityReg = new RegExp(
      /^[a-zåäöA-ZÅÄÖ\u00C0-\u00ff\s'-]+$/)
      .test(value);
    if (!cityReg) {
      let newErrors = errors
      newErrors.city = 'Only letters are permitted'
      setErrors(newErrors)
    }  
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: {value} } = event;
    setCountry(value);
    checkCountryValidation(value);
  }; 
  const checkCountryValidation = (value:string) => {
    setErrors({ ...errors, country: '' })
    let countryReg = new RegExp(
      /^[a-zåäöA-ZÅÄÖ\u00C0-\u00ff\s'-]+$/)
      .test(value);
    if (!countryReg) {
      let newErrors = errors
      newErrors.country = 'Only letters are permitted'
      setErrors(newErrors)
    }    
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: {value} } = event;
    setPhone(value);
    checkPhoneValidation(value);   
  };
  const checkPhoneValidation = (value: string) => {
    setErrors({ ...errors, phone: '' })
    let phoneReg = new RegExp(
      /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm)
      .test(value);
    if (!phoneReg) {
      let newErrors = errors
      newErrors.phone = 'Needs a valid phonenumber'
      setErrors(newErrors)
    }
  };
  
  const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: {value} } = event;
    setMail(value);
    checkMailValidation(value);
  };
  const checkMailValidation = (value: string) => {
    setErrors({ ...errors, mail: '' })
    let mailReg = new RegExp(
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
      .test(value);
    if (!mailReg ) {
      let newErrors = errors;
      newErrors.mail = 'Needs to be an valid email'
      setErrors(newErrors)
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isFormValuesEntered() && formHasNoError()) {
      emptyAllFromCart();
      history.push('/checkout');
    } else {
      checkFirstNameValidation(firstName);
      checkLastNameValidation(lastName);
      checkAdderssValidation(address);
      checkZipcodeValidation(zipcode);
      checkCityValidation(city);
      checkCountryValidation(country);
      checkPhoneValidation(phone);
      checkMailValidation(mail);
      const updatedState = { ...errors };
      setErrors(updatedState);
    }
  };
  
  return (
    <form className={classes.root} noValidate autoComplete="on" onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <CheckoutFormFields
        errors={errors}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        handleAdderssChange={handleAdderssChange}
        handleZipcodChange={handleZipcodeChange}
        handleCityChange={handleCityChange}
        handleCountryChange={handleCountryChange}
        handlePhoneChange={handlePhoneChange}
        handleMailChange={handleMailChange}
      />
      <Button 
        className={classes.orderButton}
        variant="contained" 
        color="secondary"
        type="submit"
      >
        Place Order
      </Button>
    </form>
  );
};
