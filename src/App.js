
import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Map from "./components/Map";
import Home from "./components/Home";
import RSVP from "./components/RSVP";
import FAQs from "./components/FAQ";
import AaronGlenMap from './components/AaronGlenMap';

function App() {

  // const [message, setMessage] = useState('');
 
  // useEffect(() => {
  //   fetch('http://localhost:9000')
  //   .then(res => res.json())
  //   .then(data => setMessage(data.message));
  // })

  return (
    
    
    <>
    <NavBar /> 
      <Routes>
        
          <Route path="/" element={<Home/>} />
          <Route path="/AGMap" element={<AaronGlenMap />} />
          <Route path="/map" element={<Map/>} />
          <Route path ="/RSVP" element={<RSVP/>} />
          <Route path ="/FAQs" element={<FAQs/>} />

        
    </Routes>

   
    </>
    

  );
}

export default App;
