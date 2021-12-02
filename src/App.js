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
import s from './App.module.css';


function App() {
  const dispatch = useDispatch();
  const sid = useSelector(state => state.auth.sid);

  useEffect(() => {
    dispatch(checkCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <SwitchTheme />
      <header className="App-header"></header>
      <HomePage />
      <ExpensesPage />
      <IncomesPage />
      <ReportsPage />
    </div>
  );
}

export default App;
