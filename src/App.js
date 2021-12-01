import './App.css';
import HomePage from './pages/HomePage';
import ExpensesPage from './pages/ExpensesPage';
import IncomesPage from './pages/IncomesPage';
import ReportsPage from './pages/ReportsPage';

import NavBar from './components/NavBar/NavBar';
import FormAddCategory from './components/FormAddCategory';
function App() {
  return (
    <div className="App">
      <FormAddCategory />

      <header className="App-header"></header>

      <HomePage />

      <IncomesPage />
      <ReportsPage />
    </div>
  );
}

export default App;
