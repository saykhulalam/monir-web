import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Navegation from "./components/Navegation";
import ProducatPage from "./components/ProducatPage";

function App() {
  return (
    <>
      <Navegation />
      <Banner />
      <ProducatPage />
      <About/>
    </>
  );
}

export default App;
