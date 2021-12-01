import './App.css';
import HomePage from './pages/HomePage';
import ExpensesPage from './pages/ExpensesPage';
import IncomesPage from './pages/IncomesPage';
import ReportsPage from './pages/ReportsPage';

import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <div className="App">

      <header className="App-header"></header>
      
      <HomePage />
      {/* <ExpensesPage />
      <IncomesPage />
      <ReportsPage /> */}
    </div>
  );
}

export default App;
