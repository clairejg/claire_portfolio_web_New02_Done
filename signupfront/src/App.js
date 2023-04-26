// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar} from "./components/navbar";
import { Home } from "./pages/home";
import { Shop }  from "./pages/shop/shop";
import { Cart }  from "./pages/cart/cart";
import { Register } from "./pages/register";


// imported Regiseter component.
// syntax: import { 'componentName or ModuelName' } from "./pages/register";


function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Routes> 
              {/* put all routes we want
              single slash == main webpage fo the web. */}
              <Route path = "/" element = {<Home/>}></Route>
              {/* <Route path = "/portfolio"></Route> */}
              <Route path = "/rent" element = {<Shop/>} ></Route>
              <Route path = "/reservation" element = {<Cart/>} ></Route>
              <Route path = "/register"element = {<Register/>}></Route>



              
            </Routes>

        </Router>



    </div>
    
  );
}

export default App;
