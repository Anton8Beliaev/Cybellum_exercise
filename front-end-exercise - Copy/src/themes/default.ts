import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          scrollBehavior: 'smooth',
        },
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
          height: '100%',
          overflowY: 'scroll',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        autoComplete: 'off',
        fullWidth: true,
        InputLabelProps: {
          shrink: true,
        },
      },
      styleOverrides: {
        root: {
          legend: {
            span: {
              display: 'none',
            },
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& > .MuiInputLabel-root': {
            position: 'unset',
            transform: 'unset',
          },
          '& fieldset': {
            top: 0,
          },
          '& label + div fieldset': {
            top: -5,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {},
      styleOverrides: {
        root: {
          textTransform: 'none',
          minWidth: 'unset',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#4D4D4D',
    },
    secondary: {
      main: '#BAA182',
    },
    error: {
      main: '#BA1A1A',
    },
    background: {
      default: '#F9F9FA',
    },
  },
});

export default theme;
