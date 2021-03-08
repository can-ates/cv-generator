import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Fira Sans Condensed',
    h1: {
      fontWeight: 300,
      color: '#515257'
    },
    h3: {
      fontWeight: 500,
    }
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiTextField: {
      root:{
        marginRight: '1.4em',
        marginBottom: '1em'
      }
    },
  }
});

export default theme;
