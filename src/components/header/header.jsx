import './header.css'
import {ReactComponent as Logo} from '../../assets/svg/logo.svg';
import {ReactComponent as Light} from '../../assets/svg/light-mode.svg';
import {ReactComponent as Dark} from '../../assets/svg/dark-mode.svg';

export default function Header({darkMode, change}) {
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>

      <div className="main">
          <div className="logo">
            <Logo />
          </div>

          {/* <div className="nav-icon">
            <NavIcon />
          </div> */}
          
          <nav>
              <ul className="nav-menu">
                <li className="nav-item"> about me </li>
                <li className="nav-item"> work </li>
                <li className="nav-item"> resume </li>
                <li className="nav-item"> contact me </li>
                <li className="nav-item" onClick={change}> { darkMode? <Light className="mode"/> : <Dark className='mode' /> } </li>
              </ul>
          </nav>
        </div>

    </div>
  )
}
