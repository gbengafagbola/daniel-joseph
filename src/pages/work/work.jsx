import './work.css';
import SpecNota from '../../assets/images/Spec Nota-work.jpg';
import IleWa from '../../assets/images/Ile Wa-work.jpg';
import ShangeIt from '../../assets/images/Shange It-work.jpg';
import DroneApp from '../../assets/images/Drone App-work.jpg';
import TribalPlay from '../../assets/images/Tribal Play-work.jpg';
import Helmet from 'react-helmet';


function Work({darkMode}) {
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Helmet>
        <title>Selected Work - Daniel Joseph</title>
        <meta
          name="description"
          content="Check out some of my featured projects"
        />
      </Helmet>

      <div className='work-container'>
          <div className='work-header'>Work</div>

          {/* Spec Nota and Ile Wa */}
          <div className='project-grid'>
              <div className='container1'>
                <div className='spec-img'> <img src={SpecNota} width="100%" height="100%" alt=''/></div>
                <div className='work-project-title'>Spec Nota</div>
                <div className='work-project-content'>Modern and seemless project management tool.</div>
              </div>

              <div className='container2'>
                <div className='ile-img'> <img src={IleWa} width="100%" height="100%" alt=''/></div>
                <div className='work-project-title'>Ile Wa</div>
                <div className='work-project-content'>A unique identity and a PWA website design.</div>
              </div>
          </div>

          {/*  Shange It */}
          <div className='work-shange-container'>
              <div className='shange-img'> <img src={ShangeIt} width="100%" height="100%" alt=''/></div>
              <div className='work-project-title'>Shange It</div>
              <div className='work-project-content'>Creating an easy to use p2p currency exchange platform for a Startup.</div>
          </div>

          {/* Drone App */}
          <div className='work-drone-container'>
              <div className='drone-img'> <img src={DroneApp} width="100%" height="100%" alt=''/></div>
              <div className='work-project-title'>Drone App</div>
              <div className='work-project-content'>Aiding farmers in precision farming via data gathering and analysis.</div>
          </div>

          {/* Tribal Play */}
          <div className='work-tribal-container'>
              <div className='tribal-img'> <img src={TribalPlay} width="100%" height="100%" alt=''/></div>
              <div className='work-project-title'>Tribal Play</div>
              <div className='work-project-content'>Giving billions of people a lasting movie experience feel.</div>
          </div>

          <div className='other-project'>check out other cool projects</div>

      </div>
    </div>
  );
}

export default Work;