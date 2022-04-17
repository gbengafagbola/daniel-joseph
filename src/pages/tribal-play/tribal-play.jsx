import TribalCover from '../../assets/images/Tribal Play cover.png';
import TribalHiFi from '../../assets/images/Tribal Play Hi-Fi.png';
import ReactPlayer from 'react-player';
import Helmet from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import './tribal-play.css';

function TribalPlay({darkMode}) {
  let navigate = useNavigate();
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Helmet>
        <title>Tribal Play - Daniel Joseph</title>
        <meta
          name="description"
          content="Giving billions of people assess to movie with the best movie experience"
        />
      </Helmet>

      <div className='tribal-container'>
        <div className='tribal-header'>Tribal Play</div>
          
          <div className='tribal-header-brief'>Giving billions of people a lasting movie experience feel.</div>
          
          {/* Cover Image */}
        <div className='tribal-cover'> <img src={TribalCover} width="100%" height="100%" alt=''/></div>

        {/* Impact and Role */}
        <div className='overview-role'>
              <div className='overview-col'>
                <div className='the-title'>Overview</div>
                <div className='the-content'>Users stream & keep-up with their favourite movie and tv-show. alongside exciting movie thrills.
                  Helping to bring the best of Tribal Play experience to movie lovers.</div>
              </div>

              <div className='role2-col'>
                <div className='the-title'>Role</div>
                <div className='the-content'>Product Design, Interactive prototype</div>
              </div>
        </div>

        {/* Hi-Fi */}
        <div className='tribal-high-fi'> <img src={TribalHiFi} width="100%" height="100%" alt=''/></div>

        {/* Prototype */}
        {/* <div className='tribal-prototype'> <img src={TribalPrototype} width="100%" height="100%" alt=''/></div>  */}
        <div className='video oover'>
            <ReactPlayer width='100%' height='500px'
            controls loop autostart url='https://www.youtube.com/watch?v=RV6TOgP0Eas' />
        </div>

        {/* Hand-off */}
        <div className='the-title'>My take aways from the project</div>
        <div className='the-content'>
            <ul className='sub-content'>
              <li>Experience matters a lot as the interctive prototype took me alot of time to achieve.</li>
              <li>Responsiveness should be considered when putting up design.</li>
            </ul>
        </div>

        {/* Team */}
        <div className='team'>Team</div>
        <div className='team-mate'>
            Oluwagbenga Fagbola - Co Founder and Lead Software Engineer<br /> <br />
            Idowu Elijah - Software Engineer
        </div>

        <div className="next-project">GET TO KNOW ME</div>
        <div className='next-project-title oover' onClick={() => {navigate("/about");}}>About Me</div>

      </div>

    </div>
  );
}

export default TribalPlay;