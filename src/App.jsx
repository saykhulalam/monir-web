import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Methai from "./components/Methai";
import Navegation from "./components/Navegation";
import ProducatPage from "./components/ProducatPage";

function App() {
  return (
    <>
      <Navegation />
      <Banner />
      <ProducatPage />
      <About/>
      <Methai/>
    </>
  );
}

export default App;
