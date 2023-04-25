// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar} from "./components/navbar";

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Routes> 
              {/* put all routes we want
              single slash == main webpage fo the web. */}
              <Route path = "/"/>
              <Route path = "/portfolio"></Route>
              <Route path = "/register"></Route>


              
            </Routes>

        </Router>



    </div>
    
  );
}

export default App;
