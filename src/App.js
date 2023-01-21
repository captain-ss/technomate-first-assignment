import './App.css';
import { Link } from 'react-router-dom';
import productCard from './Components/productCard';
function App() {
  return (
    <div className="App">
      <nav style={{ background: '#F5F5F5', padding: '20px' }}>
      <Link to="/" style={{ color: '#000000', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ color: '#000000', textDecoration: 'none', marginLeft: '20px' }}>About</Link>
      <Link to="/contact" style={{ color: '#000000', textDecoration: 'none', marginLeft: '20px' }}>Contact</Link>
    </nav>
      <productCard/>
       
    </div>
  );
}

export default App;
