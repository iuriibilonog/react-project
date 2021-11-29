import "./App.css";
import HomePage from "./pages/HomePage";
import ExpencesPage from "./pages/ExpencesPage";
import IncomesPage from "./pages/IncomesPage";
import ReportsPage from "./pages/ReportsPage";

import IncomesAndExpencesList from "./components/IncomesAndExpencesList";

function App() {
  return (
    <div className="App">

      <header className="App-header"></header>
      <IncomesAndExpencesList />
      {/* <HomePage /> */}
      <ExpencesPage />
      <IncomesPage />
      <ReportsPage />
    </div>
  );
}

export default App;
