import "./App.css";
import ProductCard from "./Components/productCard";
import NavbarTop from "./Components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Cart" element={< Cart/>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
