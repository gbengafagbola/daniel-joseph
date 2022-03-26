import './featured-project.css'
import {ReactComponent as PlanetSvg} from '../../assets/svg/planet.svg';

import SpecNota from '../../assets/images/Spec Nota.jpg';
import IleWa from '../../assets/images/Ile Wa.jpg';
import ShangIt from '../../assets/images/Shange It.jpg';
import DroneApp from '../../assets/images/Drone App.jpg';
import TribalPlay from '../../assets/images/Tribal Play.jpg';


export default function FeaturedProject() {
    return (
    <div className="featured-container">

        <div className="featured-title">FEATURED PROJECTS</div>

        <PlanetSvg className="planet"/>

        <div className='projects'>

            <div className='project-title'>Spec Nota
            <div className='project-content'> Here is how I helped redesign a project management platform for a smooth, modern and friendly experience.</div>
               <div className='spec-nota'><img src={SpecNota} className='spec' width="100%" height="100%" alt="" /> </div>
            </div>

            <div className='project-title'>Ile Wa
            <div className='project-content'> I provided a solution to a platform who needed to increase profit by reaching potential audience through identity and website UI design.</div>

               <div className='ile-wa'> <img src={IleWa} className='ile' width="100%" height="100%" alt="" /></div>
            </div>

            <div className='project-title'>Shange It
            <div className='project-content'>Here is how I helped a startup create an easy to use p2p currency exchange platform.</div>

               <div className='shang-it'> <img src={ShangIt} className='shang' width="100%" height="100%" alt="" /> </div>
            </div>

            <div className='project-title'>Drone App
            <div className='project-content'>Here is how I helped in aiding farmers in precision farming via data gathering and analysis.</div>

               <div className='drone-app'><img src={DroneApp} className='drone' width="100%" height="100%" alt="" />  </div>
            </div>

            <div className='project-title'>Tribal Play
            <div className='project-content'> Giving billions of people a lasting movie experience feel.</div>

               <div className='tribal-play'><img src={TribalPlay} className='tribal' width="100%" height="100%" alt="" /></div>
            </div>
        </div>



    </div>
    )
}