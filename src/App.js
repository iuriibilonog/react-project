import './App.css';
import s from './App.module.css';

import { checkCurrentUser } from './redux/auth/auth-operations';
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

function App() {
  const dispatch = useDispatch();
  const sid = useSelector(state => state.auth.sid);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (token !== '') {
      dispatch(checkCurrentUser());
    }
    return;
  }, []);

  // const { pathname } = useLocation();
  // let isSpend = '';
  // pathname === '/spend' ? (isSpend = true) : (isSpend = false);

  return (
    <div className="App">
      {/* <SwitchTheme /> */}

      <header className="App-header"></header>

      <NavBar />

      {/* <IncomesPage/> */}
      <Suspense fallback={<Loader />} />
      <Switch>
        <PublicRoute exact path="/" restricted>
          <HomePage />
        </PublicRoute>
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
