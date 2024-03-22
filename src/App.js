import './styles/App.css';
import Navbar from './Components/Navbar';
import AboutSection from './Components/aboutSection'; 
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AboutSection /> 
      <Footer/>
    </div>
  );
}

export default App;
