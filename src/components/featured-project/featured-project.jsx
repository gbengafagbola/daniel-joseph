import './featured-project.css'
import {ReactComponent as PlanetSvg} from '../../assets/svg/planet.svg';

import SpecNota from '../../assets/images/Spec Nota.jpg';
import IleWa from '../../assets/images/Ile Wa.jpg';
import ShangIt from '../../assets/images/Shange It.jpg';
import DroneApp from '../../assets/images/Drone App.jpg';
import TribalPlay from '../../assets/images/Tribal Play.jpg';
import { useNavigate } from 'react-router-dom';


export default function FeaturedProject() {
   let navigate = useNavigate();
    return (
    <div className="featured-container">

        <div className="featured-title">FEATURED PROJECTS</div>

        {/* <PlanetSvg className="planet"/> */}

        <div className='projects'>

            <div className='project-title' onClick={() => {navigate("/spec-nota");}}>Spec Nota
            <div className='project-content'>Modern and seemless project management tool.</div>
               <div className='spec-nota'><img src={SpecNota} className='spec' width="100%" height="100%" alt="" /> </div>
            </div>

            <div className='project-title' onClick={() => {navigate("/ile-wa");}}>Ile Wa
            <div className='project-content'>A unique identity and a PWA website design.</div>
               <div className='ile-wa'> <img src={IleWa} className='ile' width="100%" height="100%" alt="" /></div>
            </div>

            <div className='project-title' onClick={() => {navigate("/shange-it");}}>Shange It
            <div className='project-content'>Creating an easy to use p2p currency exchange platform for a Startup.</div>
               <div className='shang-it'> <img src={ShangIt} className='shang' width="100%" height="100%" alt="" /> </div>
            </div>

            <div className='project-title' onClick={() => {navigate("/drone-app");}}>Drone App
            <div className='project-content'>Aiding farmers in precision farming via data gathering and analysis.</div>

               <div className='drone-app'><img src={DroneApp} className='drone' width="100%" height="100%" alt="" />  </div>
            </div>

            <div className='project-title' onClick={() => {navigate("/tribal-play");}}>Tribal Play
            <div className='project-content'>Giving billions of people a lasting movie experience feel.</div>
               <div className='tribal-play'><img src={TribalPlay} className='tribal' width="100%" height="100%" alt="" /></div>
            </div>
        </div>



    </div>
    )
}