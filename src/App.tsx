import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import TailwindCss from "./olin-assessment-tailwind/Index";
import ReactJsAssessment from "./olin-assessment-reactJs/Index";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={ReactJsAssessment} />
          <Route path="/tailwindcss" Component={TailwindCss} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
