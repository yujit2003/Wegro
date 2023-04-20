import Home from "./component/Home"
import Header from "./component/Header.js"
import Footer from './component/Footer.js'
import WebFont from 'webfontloader'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Loader from './component/Loader.js';
import ProductsDetail from './component/ProductDetails.js';
import Govtpol from './component/GovtPol.jsx';
import Bidding from './component/Bidding.jsx';
import ProductDetail from './component/ProductDetail.js'
import Startup from './component/Startup.jsx';

function App() {
 
  WebFont.load({
    google: {
      families: ["Roboto", "Droid Sans", "Chilanka"],
    },
  });
  return (
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/api/products' element={<ProductsDetail />} />
        <Route path='/govtpol' element={<Govtpol />} />
        <Route path='/bidding' element={<Bidding />} />
        <Route path='/startup' element={<Startup />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
