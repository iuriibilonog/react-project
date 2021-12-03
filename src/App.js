import { checkCurrentUser } from './redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import ExpensesPage from './pages/ExpensesPage';
import IncomesPage from './pages/IncomesPage';
import ReportsPage from './pages/ReportsPage';
import NavBar from './components/NavBar/NavBar';
import SwitchTheme from './shared/SwitchTheme/SwitchTheme';
import Chart from './components/Chart';
import s from './App.module.css';

import { useLocation } from 'react-router';

// new
import { Switch, Redirect } from 'react-router';
import { Suspense } from 'react';

import PublicRoute from './components/Routes/PublicRoute';
import PrivateRoute from './components/Routes/PrivateRoute';
// new

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

  const { pathname } = useLocation();
  let isSpend = '';
  pathname === '/spend' ? (isSpend = true) : (isSpend = false);

  return (
    <div className="App">
      <Chart />
      <SwitchTheme />
      <header className="App-header"></header>
      {/* {isSpend && <ExpensesPage />}
      {!isSpend && <IncomesPage />} */}
      <NavBar />
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Switch>
          <PublicRoute exact path="/" redirectTo="/spend">
            <HomePage />
          </PublicRoute>
          <PrivateRoute exact path="/spend" redirectTo="/">
            <ExpensesPage />
          </PrivateRoute>
          <PrivateRoute exact path="/income" redirectTo="/">
            <IncomesPage />
          </PrivateRoute>
          <PrivateRoute>
            <ReportsPage path="/report" />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
