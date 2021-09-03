import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { Footer } from "./Footer";
import  Header  from "./Header";
import ViewContainer from "./ViewContainer";
import amber from '@material-ui/core/colors/amber';


const theme = createTheme({
  palette: {
    primary: {
      main: amber[800],
      contrastText: amber[50],
    },
    secondary: {
      // ljus orange
      main: '#f46f04',
    },
    warning: {
      // ljus orange
      main: '#f46f04',
    },
    success: {
      // ljus orange
      main: '#f46f04',
    },
  },
});

export default function Layout() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <ViewContainer />
        <Footer />
      </ThemeProvider>
    </>
  );
}
