import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage.tsx";
import Homepage from "./components/Homepage.tsx";

import "./App.css";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/new-page" element={<Homepage />} />
      </Routes>
    </Router>
  );
  
}


export default App;
