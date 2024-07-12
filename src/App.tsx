import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import TailwindCss from "./olin-assessment-tailwind/Index";
import ReactJsAssessment from "./olin-assessment-reactJs/Index";
import ApiFetch from "./olin-assessment-api-fetch/Index";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={ReactJsAssessment} />
          <Route path="/tailwindcss" Component={TailwindCss} />
          <Route path="/apifetch" Component={ApiFetch} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
