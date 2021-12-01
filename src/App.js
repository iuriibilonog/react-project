import './App.css';
import HomePage from './pages/HomePage';
import ExpencesPage from './pages/ExpencesPage';
import IncomesPage from './pages/IncomesPage';
import ReportsPage from './pages/ReportsPage';
import NavBar from './components/NavBar/NavBar';
import { checkCurrentUser } from './redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const sid = useSelector(state => state.auth.sid);

  useEffect(() => {
    dispatch(checkCurrentUser());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log('ok');
  //   dispatch(getUser());
  // }, [sid]);

  return (
    <div className="App">
      <HomePage />
      <ExpencesPage />
      <IncomesPage />
      <ReportsPage />
    </div>
  );
}

export default App;
