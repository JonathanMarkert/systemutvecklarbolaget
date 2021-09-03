import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Footer } from "./Footer";
import  Header  from "./Header";
import ViewContainer from "./ViewContainer";
import amber from '@material-ui/core/colors/amber';

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    neutral: Palette['primary'];
    brown: Palette['primary'];
    pastelGreen: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
    brown: PaletteOptions['primary'];
    pastelGreen: PaletteOptions['primary'];
  }
}


const theme = createTheme({
  palette: {
    primary: {
      main: amber[800],
      contrastText: amber[100],
    },
    secondary: {
      // grön
      main: '#009135',
    },
    neutral: {
      main: '#BAA89B',
      light: '#c7b9af',
      dark: '#82756C',
    },
    brown: {
      main: '#524439',
      light: '#746960',
      dark: '#392f27',
    },
    pastelGreen: {
      main: '#00C967',
      light: '#33d385',
      dark: '#00C967',
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
