import './featured-project.css'
import {ReactComponent as PlanetSvg} from '../../assets/svg/planet.svg';
import {ReactComponent as SpecNotaSvg} from '../../assets/svg/Spec Nota.svg';

import DjImage from '../../assets/images/dj.jpg';

export default function FeaturedProject() {
    return (
    <div className="featured-container">

        <div className="featured-title">FEATURED PROJECTS</div>

        <PlanetSvg className="planet"/>

        <div className='projects'>
            <div className='project-title'>Spec Nota
               <div className='spec-nota'> <SpecNotaSvg  className='spec'/> </div>
            </div>
        </div>

        <div className='project-preview'> 
            {/* <div className='spec-nota'> <SpecNotaSvg  className='spec'/> </div> */}
        </div>
    </div>
    )
}