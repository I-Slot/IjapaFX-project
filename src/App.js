import "./App.css";
import Hero from "./components/Hero";
import Folktales from "./components/Folktales";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <header className="App-header">
        {/* <Navbar /> */}
        <Hero />
        <Folktales />
        <Footer />
      </header>
    </div>
  );
}

export default App;
// className = "bg-[url('../src/ijapa-assets-main/header_bcg.png')]";
