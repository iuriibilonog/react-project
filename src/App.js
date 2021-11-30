import "./App.css";
import HomePage from "./pages/HomePage";
import ExpencesPage from "./pages/ExpencesPage";
import IncomesPage from "./pages/IncomesPage";
import ReportsPage from "./pages/ReportsPage";
import Container from "./components/Container/Container";
import Report from "./components/Report/Report";
import ReportAmount from "./components/Report/ReportAmount/ReportAmount";

function App() {
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
