import './header.css'
import {ReactComponent as Logo} from '../../assets/svg/logo.svg';
import {ReactComponent as Light} from '../../assets/svg/light-mode.svg';
import {ReactComponent as Dark} from '../../assets/svg/dark-mode.svg';
import { useNavigate } from 'react-router-dom';

export default function Header({darkMode, change}) {
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
              <ul className="nav-menu">
                <li className="nav-item" onClick={() => {navigate("/about");}}> about me </li>
                <li className="nav-item" onClick={() => {navigate("/work");}}> work </li>
                <li className="nav-item" onClick={() => window.open('https://drive.google.com/drive/folders/1J-9ll3j0gVLS-EWoiO9rpHY6mkM7d5At?usp=sharing')}> resume </li>
                <li className="nav-item" onClick={() => window.open('mailto:josephodaniel19@gmail.com?subject=Let%27s Chat!')}> contact me </li>
                <li className="nav-item" onClick={change}> { darkMode? <Light className="mode"/> : <Dark className='mode' /> } </li>
              </ul>
          </nav>
        </div>

    </div>
  )
}


