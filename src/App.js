import './App.css';
import ProductCard from './Components/productCard';
import Navbar from './Components/Navbar/Navbar';
import { ProductsData } from './DummyData';
function App() {
  return (
    <div className="App">
      <Navbar/>
    <div className='Home-product-cards'>

     {ProductsData.map((Data,idx)=>{
      return <ProductCard Data={Data} key={idx}/>
     })}
    </div>
    </div>

  );
}

export default App;
