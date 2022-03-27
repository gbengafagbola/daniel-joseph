import './work.css';
import SpecNota from '../../assets/images/Spec Nota-work.jpg';
import IleWa from '../../assets/images/Ile Wa-work.jpg';
import ShangeIt from '../../assets/images/Shange It-work.jpg';
import DroneApp from '../../assets/images/Drone App-work.jpg';
import TribalPlay from '../../assets/images/Tribal Play-work.jpg';


function Work({darkMode}) {
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className='work-container'>
          <div className='work-title'>Work</div>

          {/* Spec Nota and Ile Wa */}
          <div className='project-grid'>
              <div className='container1'>
                <div className='spec-img'> <img src={SpecNota} width="100%" height="100%" alt=''/></div>
                <div className='project-title'>Spec Nota</div>
                <div className='project-content'>Here is how I helped redesign a project management platform for a smooth, modern and friendly experience.</div>
              </div>

              <div className='container2'>
                <div className='ile-img'> <img src={IleWa} width="100%" height="100%" alt=''/></div>
                <div className='project-title'>Ile Wa</div>
                <div className='project-content'>I provided a solution to a platform who needed to increase profit by reaching potential audience through identity and website UI design.</div>
              </div>
          </div>

          {/*  Shange It */}
          <div className='shange-container'>
              <div className='shange-img'> <img src={ShangeIt} width="100%" height="100%" alt=''/></div>
              <div className='project-title'>Shange It</div>
              <div className='project-content'>Here is how I helped a startup create an easy to use p2p currency exchange platform.</div>
          </div>

          {/* Drone App */}
          <div className='drone-container'>
              <div className='drone-img'> <img src={DroneApp} width="100%" height="100%" alt=''/></div>
              <div className='project-title'>Drone App</div>
              <div className='project-content'>Here is how I helped in aiding farmers in precision farming via data gathering and analysis, a project submitted to the University of Port Harcourt.</div>
          </div>

          {/* Tribal Play */}
          <div className='tribal-container'>
              <div className='tribal-img'> <img src={TribalPlay} width="100%" height="100%" alt=''/></div>
              <div className='project-title'>Tribal Play</div>
              <div className='project-content'>Giving billions of people a lasting movie experience feel.</div>
          </div>

          <div className='other-project'>check other cool projects</div>

      </div>
    </div>
  );
}

export default Work;