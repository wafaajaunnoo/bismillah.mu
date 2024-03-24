import './styles/App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home'
import HalaalEats from './Components/HalaalEats';
import Musalla from './Components/Musalla';
import Contact from './Components/Contact'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/home' element= {<Home />} />
          <Route path='/halaaleats' element= {<HalaalEats />} />
          <Route path='/musalla' element= {<Musalla />} />
          <Route path='/contact' element= {<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
