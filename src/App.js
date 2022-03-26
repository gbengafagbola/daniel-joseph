import React from "react";
import { Routes ,Route, Navigate } from 'react-router-dom';

import Header from "./components/header/header";
import Home from './pages/home/home';


import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
