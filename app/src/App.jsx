import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PasswordPage from "./PasswordPage";
import TransitionPage from "./TransitionPage";
import InaugurationPage from "./InaugurationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PasswordPage />} />
        <Route path="/transition" element={<TransitionPage />} />
        <Route path="/inauguration" element={<InaugurationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
