import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        edgeEnd: {
          '&:hover, :focus': {
            background: 'transparent',
          },
          ['@media (min-width:980px)']: {
            marginLeft: '30px',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          fontSize: '14px',
          color: '#52555F',
          lineHeight: ' 14px',
          display: 'flex',
          alignItems: 'center',
          marginLeft: '10px',
          position: 'relative',
          paddingLeft: '40px',
          border: 'none',
          '&:before': {
            borderBottom: 'none',
            outline: 'none',
            display: 'none',
          },
          '&:before:hover': {
            border: 'none',
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          position: 'absolute',
          top: '10px',
          right: '85px',
          ['@media (min-width:980px)']: {
            right: '85px',
          },
          svg: {
            fill: 'none',
          },
        },
      },
    },
  },
});

export default theme;
