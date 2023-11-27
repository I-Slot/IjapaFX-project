import "./App.css";
import Hero from "./components/Hero";
import Folktales from "./components/Folktales";
import Footer from "./components/Footer";
import Feature from "./components/Feature";
import Popup from "./components/Popup";

function App() {
  return (
    <div>
      <header className="App-header">
        {/* <Navbar /> */}
        <Hero />
        <Folktales />
        <Feature />
        <Footer />
      </header>
    </div>
  );
}

export default App;
// className = "bg-[url('../src/ijapa-assets-main/header_bcg.png')]";
