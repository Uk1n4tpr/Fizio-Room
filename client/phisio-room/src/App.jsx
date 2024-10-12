import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import HomePage from "./components/HomePage";
import Termini from "./components/Termini";
import UslugeDescription from "./components/smallComponents/UslugeDescription";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/termini" element={<Termini />}></Route>
          <Route path="/usluge-opis/:index" element={<UslugeDescription />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
