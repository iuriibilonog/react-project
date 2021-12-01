import { checkCurrentUser } from './redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import ExpensesPage from './pages/ExpensesPage';
import IncomesPage from './pages/IncomesPage';
import ReportsPage from './pages/ReportsPage';
import NavBar from './components/NavBar/NavBar';

import s from './App.module.css';

  const changeTheme = () => {
    document.body.style.setProperty('--accent-bright', 'red');

    //    document.body.style.setProperty('--bg-primary', '');
    document.body.style.setProperty('--bg-secondary', '#f5fbf6');

    document.body.style.setProperty('--font-primary', '#0e2a10');
    document.body.style.setProperty('--font-secondary', '#525f54');
    // document.body.style.setProperty('--font-tertiary', '');

    document.body.style.setProperty('--accent-bright', '#499034');
    document.body.style.setProperty('--accent-bleak', '#c2ffc0');
    document.body.style.setProperty('--accent-bleak-logo', 'rgba(47, 251, 57, 0.2)');

    document.body.style.setProperty('--modal-color-first', '#1d6a23');
    document.body.style.setProperty('--modal-color-second', '#03340b');

    document.body.style.setProperty('--dropdown-text', '#c7dcc8');
    document.body.style.setProperty('--box-shadow', 'rgba(90, 105, 88, 0.4)');

    document.body.style.setProperty('--hero-primary', '#499034');
    document.body.style.setProperty('--hero-back', 'rgba(29, 255, 48, 0.3)');
    document.body.style.setProperty('--hero-shadow', 'rgba(26, 117, 37, 0.25)');
  };



function App() {
  const dispatch = useDispatch();
  const sid = useSelector(state => state.auth.sid);

  useEffect(() => {
    dispatch(checkCurrentUser());
  }, [dispatch]);


  return (
    <div className="App">
      <header className="App-header"></header>
      <button className={s.theme_switch} type="button" onClick={changeTheme}>
        MAGIC
      </button>
      <HomePage />
      <ExpensesPage />
      <IncomesPage />
      <ReportsPage />
    </div>
  );
}

export default App;
