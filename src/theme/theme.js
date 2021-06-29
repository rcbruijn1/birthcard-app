import { createMuiTheme } from '@material-ui/core/styles';
import { components } from './components';
import raleway from 'typeface-raleway';

export const createTheme = createMuiTheme({
  palette: {
    text: {
      primary: '#212121',
      secondary: '#FFF',
    },
    primary: {
      main: '#6E7363',
    },
    secondary: {
      main: '#BFA3A7',
    },
  },
  typography: {
    fontFamily: '"Raleway"',
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [raleway]
      }
    },
  },
  components: components,
  mixins: {
    scrollbar: {
      '&::-webkit-scrollbar': {
        width: 5,
        background: 'rgba(255, 255, 255, 0.22) !important',
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'rgba(0, 0, 0, 0.12) !important',
        borderRadius: 4,
      },
    },
  },
});