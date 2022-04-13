import Helmet from 'react-helmet';
import BrowseTemplate from '../../assets/images/Browser Template.jpg';
import iXn from '../../assets/images/iXn.jpg';
import Teflow from '../../assets/images/Teflow.jpg';
import MoveBot from '../../assets/images/MoveBOT.jpg';
import WorkiNN from '../../assets/images/WORKiNN.jpg';
import DesignSystem from '../../assets/images/Design System.jpg';
import LogioFolio from '../../assets/images/Logofolio.jpg';
// import FlyerFolio from '../../assets/images/Tribal Play Hi-Fi.png';

import './playground.css';

function Playground({darkMode}) {
    return (
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Helmet>
          <title>Playground - Daniel Joseph</title>
          <meta
            name="description"
            content="Some project I have worked on"
          />
        </Helmet>
  
        <div className='playground-container'>
            <div className='playground-header'>Playground </div>
            <div className='playground-header-brief'>These are some of the exciting projects.</div>
            
            {/* Browser Template */}
            <div className='play-project'>
                <div className='play-project-image'> <img src={BrowseTemplate} width="100%" height="100%" alt=''/></div>
                <div className='play-project-title'>Browser Template</div>
                <div className='play-project-content'>A browser template mock up for web designs.</div>
            </div>

            {/* iXn*/}
            <div className='play-project'>
                <div className='play-project-image'> <img src={iXn} width="100%" height="100%" alt=''/></div>
                <div className='play-project-title'>iXn</div>
                <div className='play-project-content'>PWA file converter.</div>
            </div>

            {/* Teflow*/}
            <div className='play-project'>
                <div className='play-project-image'> <img src={Teflow} width="100%" height="100%" alt=''/></div>
                <div className='play-project-title'>Teflow</div>
                <div className='play-project-content'>A news agency platform giving newbies accomodating experience.</div>
            </div>

            {/*MoveBot*/}
            <div className='play-project'>
                <div className='play-project-image'> <img src={MoveBot} width="100%" height="100%" alt=''/></div>
                <div className='play-project-title'>MoveBot</div>
                <div className='play-project-content'>Product Delivery Package box for a delivery company.</div>
            </div>

            {/* WorkiNN */}
            <div className='play-project'>
                <div className='play-project-image'> <img src={WorkiNN} width="100%" height="100%" alt=''/></div>
                <div className='play-project-title'>WorkiNN Branding</div>
                <div className='play-project-content'>Branding for a Tech Hub company that gives room for different tech activities such as; learning, talk show, digital services, event center, and game center.</div>
            </div>

            {/* Design System */}
            <div className='play-project'>
                <div className='play-project-image'> <img src={DesignSystem} width="100%" height="100%" alt=''/></div>
                <div className='play-project-title'>Design System</div>
                <div className='play-project-content'>I always work with design system to make design consistent and hand-off 100% natural.</div>
            </div>

            {/* Logofolio */}
            <div className='play-project'>
                <div className='play-project-image'> <img src={LogioFolio} width="100%" height="100%" alt=''/></div>
                <div className='play-project-title'>Logofolio</div>
                <div className='play-project-content'>Some of my recent logo profile.</div>
            </div>

            {/* Flyer */}
            {/* <div className='play-project'>
                <div className='play-project-image'> <img src={FlyerFolio} width="100%" height="100%" alt=''/></div>
                <div className='play-project-title'>Flyerfolio</div>
                <div className='play-project-content'>Promotional flyer for products.</div>
            </div> */}

            <div className="playground-view ">VIEW MORE?</div>
            <div className='project-click'>Click Me</div>
        </div>
  
      </div>
    );
  }




export default Playground;