import './App.css';
import s from './App.module.css';

import { checkCurrentUser, getUser } from './redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Switch, Redirect } from 'react-router';
import { Suspense } from 'react';
import { Home } from '@mui/icons-material';

import SwitchTheme from './shared/SwitchTheme/SwitchTheme';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage';
import TransactionsPage from './pages/TransactionsPage';
import ReportsPage from './pages/ReportsPage';
import Chart from './components/Chart';

import PublicRoute from './components/Routes/PublicRoute';
import PrivateRoute from './components/Routes/PrivateRoute';
import Loader from './components/Loader';
import Team from './components/Team/Team';

function App() {
  const dispatch = useDispatch();
  const sid = useSelector(state => state.auth.sid);
  const token = useSelector(state => state.auth.token);
  const isRefreshFulfilled = useSelector(state => state.auth.isRefreshFullFilled);

  const newAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWE2MmM1MTM4ZTk5YTZlNmQ4YTk5MjAiLCJzaWQiOiI2MWFjZTJmNjM4ZTk5YTZlNmQ4YWI1ZDgiLCJpYXQiOjE2Mzg3MjAyNDYsImV4cCI6MTYzODcyMzg0Nn0.ztSH-N9ICERSVPPcdYuI-7EuFjbSCbvZugWuuqungqE';
  const newRefreshToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWE2MmM1MTM4ZTk5YTZlNmQ4YTk5MjAiLCJzaWQiOiI2MWFjZTJmNjM4ZTk5YTZlNmQ4YWI1ZDgiLCJpYXQiOjE2Mzg3MjAyNDYsImV4cCI6MTY0MTM0ODI0Nn0.wvQV21ozCm2bQJufXbISoA4vM7IyDMN4lO4MQUnbCiw';
  const newSid = '61ace2f638e99a6e6d8ab5d8';

  // newAccessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M…AzMX0.U6zknGZ4Qziv7u0xV7c3STt3h5D-59qdV6fgy-UUUVE', newRefreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M…QzMX0.1DV87iJPIEk3HQfa3CojnGVO_znt0bav2Hg_Y5W6dbU',
  //   newSid: '61ace3af38e99a6e6d8ab5dc'
  const sidUser = useSelector(state => state.auth.user.sid);
  const accessToken = useSelector(state => state.auth.user.accessToken);
  const refreshToken = useSelector(state => state.auth.user.refreshToken);

  useEffect(() => {
    if (token !== '') {
      dispatch(checkCurrentUser());
      console.log('REFRESH');
    }
    return;
  }, []);

  useEffect(() => {
    if (isRefreshFulfilled) {
      dispatch(getUser({ accessToken, refreshToken, sidUser }));
    }
  }, [isRefreshFulfilled]);

  // const { pathname } = useLocation();
  // let isSpend = '';
  // pathname === '/spend' ? (isSpend = true) : (isSpend = false);

  return (
    <div className="App">
      <SwitchTheme />

      <header className="App-header"></header>
      <NavBar />

      {/* <IncomesPage/> */}
      <Suspense fallback={<Loader />} />
      <Switch>
        <PublicRoute exact path="/" restricted>
          <HomePage />
        </PublicRoute>

        <PublicRoute exact path="/team" redirectTo="/">
          <Team />
        </PublicRoute>
        {/* <PrivateRoute exact path="/"> */}

        <PrivateRoute exact path="/transactions">
          <TransactionsPage />
        </PrivateRoute>
        <PrivateRoute exact path="/reports">
          <ReportsPage />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
