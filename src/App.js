import "./App.css";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
