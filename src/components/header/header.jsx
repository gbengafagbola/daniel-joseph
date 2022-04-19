import './header.css'
import {ReactComponent as Logo} from '../../assets/svg/logo.svg';
import {ReactComponent as Light} from '../../assets/svg/light-mode.svg';
import {ReactComponent as Dark} from '../../assets/svg/dark-mode.svg';
import { useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react'

import {ReactComponent as NavIcon} from '../../assets/svg/menu.svg';


export default function Header({darkMode, change}) {
  const [toggleMenu, setToggleMenu] = useState(false)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

  }, [])

  let navigate = useNavigate();
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>

      <div className="main">
          <div className="logo" onClick={() => {navigate("/");}}>
            <Logo />
          </div>

          {/* <div className="nav-icon">
            <NavIcon />
          </div> */}

        
          <nav>
          {(toggleMenu || screenWidth > 780) && (
              <ul className="nav-menu">
                <li className="nav-item" onClick={() => {navigate("/about"); setToggleMenu(!toggleMenu)}}> about me </li>
                <li className="nav-item" onClick={() => {navigate("/work"); setToggleMenu(!toggleMenu)}}> work </li>
                <li className="nav-item" onClick={() => {window.open('https://drive.google.com/drive/folders/1J-9ll3j0gVLS-EWoiO9rpHY6mkM7d5At?usp=sharing'); setToggleMenu(!toggleMenu)}}> resume </li>
                <li className="nav-item" onClick={() => {window.open('mailto:josephodaniel19@gmail.com?subject=Let%27s Chat!'); setToggleMenu(!toggleMenu)}}> contact me </li>
                <li className="nav-item" onClick={change}> { darkMode? <Light className="mode"/> : <Dark className='mode' /> } </li>
              </ul>
          )}
              <div onClick={toggleNav} className='btn'><NavIcon /></div>
          
          </nav>
        </div>

    </div>
  )
}
