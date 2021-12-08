import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  components: {
    // Name of the component
    MuiIconButton: {
      styleOverrides: {
        // Name of the slot
        edgeEnd: {
          // Some CSS
          // paddingLeft: '20px',
          marginLeft: '16px',
          position: 'absolute',
          top: '-3px',
          left: '10px',
          '&:hover, :focus': {
            background: 'transparent',
          },
          ['@media (min-width:980px)']: {
            // eslint-disable-line no-useless-computed-key
            marginLeft: '30px',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          position: 'relative',
          paddingLeft: '40px',
          border: 'none',
          '&:before': {
            borderBottom: 'none',
            outline: 'none',
            display: 'none',
          },
          '&:before:hover': {
            // normal
            border: 'none',
          },
        },
      },
    },
    // MuiSvgIcon: {
    //   styleOverrides: {
    //     fontSizeMedium: {
    //       width: '30px',
    //       fill: 'none',
    //       background: 'none',
    //     },
    //   },
    // },
    // MuiButtonBase: {
    //   styleOverrides: {
    //     root: {
    //       '&:after': {
    //         borderBottom: '2px solid red',
    //       },
    //     },
    //   },
    // },
  },
});

export default theme;
