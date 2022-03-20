import './header.css'
import {ReactComponent as Logo} from '../../assets/svg/logo.svg';
import {ReactComponent as Mode} from '../../assets/svg/mode.svg';

export default function Header() {
  return (
    <div className="main">
      <div className="logo">
        <Logo />
      </div>

      {/* <div className="nav-icon">
        <NavIcon />
      </div> */}
      
      <nav>
          <ul className="nav-menu">
            <li className="nav-item"> <a href="#">about me</a> </li>
            <li className="nav-item"> <a href="#">work</a> </li>
            <li className="nav-item"> <a href="#">resume</a> </li>
            <li className="nav-item"> <a href="#">contact me</a> </li>
            <li className="nav-item"> <Mode className="mode" /> </li>
          </ul>
      </nav>


    </div>
  )
}
