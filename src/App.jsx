import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navegation from "./components/Navegation";
import ProducatPage from "./components/ProducatPage";
import Admin from "./components/Admin";

function App() {
  return (
    <>
      <Router>
        <Navegation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/producat" element={<ProducatPage />} />
          <Route path="/6363" element={<Admin />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
