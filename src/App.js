import './App.css';
import HomePage from './pages/HomePage';
import ExpencesPage from './pages/ExpencesPage';
import IncomesPage from './pages/IncomesPage';
import ReportsPage from './pages/ReportsPage';

import NavBar from './components/NavBar/NavBar';
import FormAddCategory from './components/FormAddCategory';
function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <FormAddCategory />
      {/* <ExpencesPage />
      <IncomesPage />
      <ReportsPage /> */}
    </div>
  );
}

export default App;
