import "./App.css";
import ProductCard from "./Components/productCard";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./Components/Footer";






function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
