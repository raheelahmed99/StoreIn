import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './Compoonents/Common/Header/Header';
import SignIn from './Compoonents/Features/SignIn/SignIn';
import Sell from './Compoonents/Features/SellPage/Sell';
import Footer from "./Compoonents/Common/Footer/Footer";
import ProductCategoury from "./Compoonents/Features/ProductCategoury/ProductCategoury";
import ShowNavbarFooter from "./Compoonents/ShowNavbar&Footer/ShowNavbarFooter";

function App() {
 

  return (
    <>
    <BrowserRouter>
    <ShowNavbarFooter>
      <Header />
    </ShowNavbarFooter>
    
    <Routes>
      <Route path="/" element={ <ProductCategoury />} />
          
      <Route path="SignIn" element={ <SignIn /> } />
      <Route path="Sell" element={ <Sell /> } />
    </Routes>
   

    <ShowNavbarFooter>
    <Footer/>
    </ShowNavbarFooter>

    </BrowserRouter>
    </>
  );
}

export default App;
