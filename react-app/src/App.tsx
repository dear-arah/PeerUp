import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage.tsx";
import Homepage from "./components/Homepage.tsx";
import Mentorship from "./components/Mentorship.tsx";
import Community from './components/Community.tsx';


import "./App.css";
import "./Homepage.css";
import './TopNavBar.css';


function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/community" element={<Community />} />
        
      </Routes>
    </Router>
  );
  
}


export default App;
