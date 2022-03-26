import React, { useState } from "react";
import { Routes ,Route } from 'react-router-dom';

import Header from "./components/header/header";
import Home from './pages/home/home';
import About from "./pages/about/about";
import Footer from "./components/footer/footer";
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Header darkMode={darkMode} change={() => setDarkMode(!darkMode)}/>

      <Routes>
      <Route exact path="/" element={<Home darkMode={darkMode}/>}></Route>
        <Route exact path="/about" element={<About darkMode={darkMode}/>}></Route>
      </Routes>

      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;
 