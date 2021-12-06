import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import logo from '../../img/logo.svg';
import logout from '../../img/logout.svg';
import s from './NavBar.module.css';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { StyledBadge } from './StyledBadge';
import { useDispatch, useSelector } from 'react-redux';
import { login, logOut } from '../../redux/auth/auth-operations';
import { setBalance, setIsSystemStarted } from '../../redux/actions';

const NavBar = ({ socialName, socialImg, isAuthFromSocial }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const socialAuth = useSelector(state => state.auth.socialAuth);
  const loginForm = useSelector(state => state.auth.user?.userData?.email);
  const loginNameFromGoogle = useSelector(state => state.auth?.user?.email)

  const loginName = loginForm || loginNameFromGoogle;

  // console.log(loginName.length)
  const dispatch = useDispatch();

  // const loginFromEmail = () => {
  //   for (let i = 0; i <= loginName.length; i++) {

  //   }
  // }
  return (
    <>
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
            {isLoggedIn && (
              <div className={s.wrapper}>
                <Stack direction="row" spacing={2}>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                    sx={{ mr: 2 }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={
                        isAuthFromSocial && socialAuth ? socialImg : '/static/images/avatar/1.jpg'
                      }
                    />
                  </StyledBadge>
                </Stack>
                <Typography
                  noWrap
                  component="p"
                  sx={{
                    color: '#52555F',
                    fontFamily: 'Roboto',
                    fontSize: '12px',
                    cursor: 'default',
                  }}
                  className={s.visibility}
                >
                  {isAuthFromSocial && socialAuth ? socialName : loginName}
                </Typography>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    my: 0.2,
                    background: '#E0E5EB',
                    ml: 2,
                    mr: 2,
                  }}
                  className={s.visibility}
                />
                <div
                  onClick={() => {
                    dispatch(logOut());
                    dispatch(setIsSystemStarted(null));
                    dispatch(setBalance(null));
                  }}
                >
                  <Typography
                    variant="text"
                    sx={{
                      color: 'white',
                      textDecoration: 'underline',
                      textTransform: 'capitalize',
                      color: '#52555F',
                      fontFamily: 'Roboto',
                      padding: '10px',
                      fontSize: '12px',
                      cursor: 'pointer',
                      '&:hover,&:focus': {
                        color: '#ff751d',
                      },
                    }}
                    className={s.visibility}
                  >
                    Выйти
                  </Typography>
                  <img className={s.logoutIcon} src={logout} />
                </div>
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
