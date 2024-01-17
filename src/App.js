import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Asset/Assets/banner_mens.png'
import women_banner from './Components/Asset/Assets/banner_women.png'
import kids_banner from './Components/Asset/Assets/banner_kids.png'
 

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Shop/>}/>
         <Route path='/Mens' element={<ShopCategory banner={men_banner} category ="Mens"/>}/>
         <Route path='/Womens' element={<ShopCategory banner={women_banner} category ="Womens"/>}/>
         <Route path='/Kids' element={<ShopCategory banner={kids_banner} category ="Kids"/>}/>
         <Route path='product' element={<Product/>}/>
          <Route path=':productId' element={<Product/>}>
         </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

