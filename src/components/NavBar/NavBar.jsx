import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../img/logo.svg';
import logout from '../../img/logout.svg';
import s from './NavBar.module.css';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { createTheme, MuiThemeProvider, makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

const settings = ['Logout'];
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
const theme = createTheme({
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints

    values: {
      axs: 400,
      asm: 768,
      amd: 800,
      alg: 900,
      axl: 1200,
    },
  },
});
// const newTheme = createMuiTheme({
//   breakpoints: {
// Define custom breakpoint values.
// These will apply to Material-UI components that use responsive
// breakpoints, such as `Grid` and `Hidden`. You can also use the
// theme breakpoint functions `up`, `down`, and `between` to create
// media queries for these breakpoints
//     values: {
//       xs: 0,
//       sm: 440,
//       md: 660,
//       mobile: 768,
//       lg: 900,
//       xl: 1200,
//     },
//   },
// });
// const styles = themes => {
//   console.log(themes);
//   return {
//     mob: {
//       [themes.breakpoints.up('sm')]: {
//         background: `red`,
//         color: `blue`,
//       },
// '&::before': {
//   [theme.breakpoints.down('sm')]: {
//     content: `'Screen size = xs'`,
//   },
//   [theme.breakpoints.up('sm')]: {
//     content: `'Screen size = sm'`,
//   },
//   [theme.breakpoints.up('md')]: {
//     content: `'Screen size = md'`,
//   },
//   [theme.breakpoints.up('lg')]: {
//     content: `'Screen size = lg'`,
//   },
//   [theme.breakpoints.up('xl')]: {
//     content: `'Screen size = xl'`,
//   },
// },
//     },
//   };
// };

const styles = theme => {
  console.log(theme);
  return {
    root: {
      ...theme.typography.display1,
      padding: theme.spacing.unit * 4,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.getContrastText(theme.palette.secondary.main),
      // Display the name of the current breakpoint
      '&::before': {
        [theme.breakpoints.down('axs')]: {
          content: `'Screen size = xxs'`,
        },
        [theme.breakpoints.up('asm')]: {
          content: `'Screen size = sm'`,
        },
        [theme.breakpoints.up('amd')]: {
          content: `'Screen size = md'`,
        },
        [theme.breakpoints.up('alg')]: {
          content: `'Screen size = lg'`,
        },
        [theme.breakpoints.up('axl')]: {
          content: `'Screen size = xl'`,
        },
      },
    },
  };
};
const NavBar = ({ classes }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  console.log(classes);
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="static" sx={{ background: 'white', boxShadow: 'none' }}>
        <Container maxWidth="axl">
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Avatar
              alt="Logo"
              src={logo}
              id={s.logo}
              variant="square"
              style={{ width: 90 + 'px' }}
            />
            <div className={s.wrapper}>
              <Stack direction="row" spacing={2}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                  sx={{ mr: 2 }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </StyledBadge>
              </Stack>
              <Typography
                noWrap
                component="p"
                sx={{
                  display: { axs: 'none', asm: 'flex' },
                  color: '#52555F',
                  fontFamily: 'Roboto',
                  fontSize: '12px',
                }}
              >
                User Name
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  my: 0.2,
                  background: '#E0E5EB',
                  ml: 2,
                  mr: 2,
                  // display: { xs: 'none', sm: 'block' },
                }}
                className={classes.root}
              />
              <Button
                variant="text"
                sx={{
                  color: 'white',
                  textDecoration: 'underline',
                  textTransform: 'capitalize',
                  // display: { xs: 'none', sm: 'flex' },
                  color: '#52555F',
                  fontFamily: 'Roboto',
                  fontSize: '12px',
                }}
                className={classes.root}
              >
                Выйти
              </Button>
              <img
                className={s.logoutIcon}
                src={logout}
                sx={{
                  display: { axs: 'block', asm: 'none' },
                }}
              />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </MuiThemeProvider>
  );
};
export default withStyles(styles)(NavBar);
