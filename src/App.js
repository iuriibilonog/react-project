import "./App.css";
import HomePage from "./pages/HomePage";
import ExpencesPage from "./pages/ExpencesPage";
import IncomesPage from "./pages/IncomesPage";
import ReportsPage from "./pages/ReportsPage";

function App() {
  return (
    <div className="App">

      <header className="App-header"></header>
      
      <HomePage />
      <ExpencesPage />
      <IncomesPage />
      <ReportsPage />
    </div>
  );
}

export default App;
