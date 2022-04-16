import React, { useState } from "react";
import { Routes ,Route } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor";

import Header from "./components/header/header";
import Home from './pages/home/home';
import About from "./pages/about/about";
import Work from "./pages/work/work";
import SpecNota from "./pages/spec-nota/spec-nota";
import IleWa from "./pages/ile-wa/ile-wa";
import ShangeIt from "./pages/shange-it/shange-it";
import DroneApp from "./pages/drone-app/drone-app";
import TribalPlay from "./pages/tribal-play/tribal-play";
import Playground from "./pages/playground/playground";
import ErrorPage from "./pages/error-page/error-page";

import Footer from "./components/footer/footer";

import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className="App">
          <AnimatedCursor
              innerSize={12}
              outerSize={30}
              color='221, 85, 255'
              outerAlpha={0.2}
              innerScale={0.7}
              outerScale={2}
              clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link',
                '.nav-item',
                '.onClick',
                '.main'
            ]}
          />
      </div>
      <Header darkMode={darkMode} change={() => setDarkMode(!darkMode)}/>

      <Routes>
        <Route exact path="/" element={<Home darkMode={darkMode}/>}></Route>
        <Route exact path="/about" element={<About darkMode={darkMode}/>}></Route>
        <Route exact path="/work" element={<Work darkMode={darkMode}/>}></Route>

        <Route exact path="/spec-nota" element={<SpecNota darkMode={darkMode}/>}></Route>
        <Route exact path="/ile-wa" element={<IleWa darkMode={darkMode}/>}></Route>
        <Route exact path="/tribal-play" element={<TribalPlay darkMode={darkMode}/>}></Route>
        <Route exact path="/shange-it" element={<ShangeIt darkMode={darkMode}/>}></Route>
        <Route exact path="/drone-app" element={<DroneApp darkMode={darkMode}/>}></Route>
        <Route exact path="/playground" element={<Playground darkMode={darkMode}/>}></Route>
        <Route exact path="*" element={<ErrorPage darkmode={darkMode}/>}></Route>

      </Routes>

      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;
 