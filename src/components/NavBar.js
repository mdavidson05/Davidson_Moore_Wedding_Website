
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Navbar.css"
import {useState} from 'react'

const NavBar = () => {
  const navigate = useNavigate();

  const [highlightHomeText, setHightlightHomeText] = useState(false);
  const [highlightAGText, setHightlightAGText] = useState(false);
  const [highlightMapText, setHightlightMapText] = useState(false);
  const [highlightRSVPText, setHightlightRSVPText] = useState(false);
  const [highlightFAQText, setHightlightFAQText] = useState(false);

  // const goBack = () => {
  //   navigate.goBack();
  // }

  return (
    <>
    <input type="checkbox" id = "ham-menu"/>
    <label for="ham-menu">
  <div class="hide-des">
    <span class="menu-line"></span>
    <span class="menu-line"></span>
    <span class="menu-line"></span>
    <span class="menu-line"></span>
    <span class="menu-line"></span>
    <span class="menu-line"></span>
  </div>

</label>
<div class="full-page-green"></div>
<div class="ham-menu">
  <ul class="centre-text bold-text">
    <li><Link to="/" class={highlightHomeText ? 'highlight-text' : "centre-text bold-text"}
     onMouseEnter={() => setHightlightHomeText(true)}
     onMouseLeave={() => setHightlightHomeText(false)}>Home</Link></li>
    <li><Link to="/AGMap" class={highlightAGText ? 'highlight-text' : "centre-text bold-text"}
     onMouseEnter={() => setHightlightAGText(true)}
     onMouseLeave={() => setHightlightAGText(false)}>Aaron Glen</Link></li>
    <li><Link to="/Map" class={highlightMapText ? 'highlight-text' : "centre-text bold-text"}
     onMouseEnter={() => setHightlightMapText(true)}
     onMouseLeave={() => setHightlightMapText(false)}>Map</Link></li>
    <li><Link to="/RSVP" class={highlightRSVPText ? 'highlight-text' : "centre-text bold-text"}
     onMouseEnter={() => setHightlightRSVPText(true)}
     onMouseLeave={() => setHightlightRSVPText(false)}>RSVP</Link></li>
    <li><Link to="/FAQs" class={highlightFAQText ? 'highlight-text' : "centre-text bold-text"}
     onMouseEnter={() => setHightlightFAQText(true)}
     onMouseLeave={() => setHightlightFAQText(false)}>FAQs</Link></li>

  </ul>
</div>
    </>
  );
}

export default NavBar;