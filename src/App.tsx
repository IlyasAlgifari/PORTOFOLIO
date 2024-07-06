import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from './components/Navbar/myNavbar'
import Home from "./pages/Home/Home"
import Portofolio from "./pages/Portofolio/Portofolio";
import Contact from "./pages/Contact/Contact"
import MyFooter from "./components/Footer/MyFooter";
import './App.css'

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/portofolio" element={<Portofolio />}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <MyFooter />      
    </Router>    
  );
}

export default App;
