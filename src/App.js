import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App hero ">
      <header className="App-header">
        <Navbar />
        <Hero />
      </header>
    </div>
  );
}

export default App;
