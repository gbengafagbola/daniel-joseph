import Helmet from 'react-helmet';
import BrowseTemplate from '../../assets/images/Browser Template.jpg';
import NFTWaitlist from '../../assets/images/NFT WAITLIST.jpg';
import iXn from '../../assets/images/iXn.jpg';
import Teflow from '../../assets/images/Teflow.jpg';
import MoveBot from '../../assets/images/MoveBOT.jpg';
import WorkiNN from '../../assets/images/WORKiNN.jpg';
import DesignSystem from '../../assets/images/Design System.jpg';
import LogioFolio from '../../assets/images/Logofolio.jpg';
import FlyerFolio from '../../assets/images/Flyerfolio.jpg'
// import { useNavigate } from 'react-router-dom';
import 'animate.css'

import './playground.css';

function Playground({darkMode}) {
  
  // let navigate = useNavigate();

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
            <div className='playground-header animate__animated animate__fadeInUp'>Playground </div>
            <div className='playground-header-brief animate__animated animate__fadeInUp'>These are some of my exciting projects.</div>
            
            {/* Logofolio */}
            <div className='play-project animate__animated animate__fadeInUp'>
                <div className='play-project-image'> <img src={LogioFolio} width="100%" height="100%" alt=''/></div>
                <div className='play-project-title'>Logofolio</div>
                <div className='play-project-content'>Some of my recent logo profile.</div>
            </div>
            
            {/* Browser Template */}
            <div className='play-project animate__animated animate__fadeInUp'>
                <div className='play-project-image'> <img src={BrowseTemplate} width="100%" height="100%" alt=''/></div>
                <div className='play-project-title'>Browser Template</div>
                <div className='play-project-content'>A browser template mock up for web designs.</div>
            </div>

            {/* Browser Template */}
            <div className='play-project animate__animated animate__fadeInUp'>
                <div className='play-project-image'> <img src={NFTWaitlist} width="100%" height="100%" alt=''/></div>
                <div className='play-project-title'>NFT Waitlist</div>
                <div className='play-project-content'>An NFT Market Place, more than art. Case Study coming soon.</div>
            </div>

            {/* iXn*/}
            <div className='play-project animate__animated animate__fadeInUp'>
                <div className='play-project-image'> <img src={iXn} width="100%" height="100%" alt=''/></div>
                <div className='play-project-title'>iXn</div>
                <div className='play-project-content'>PWA file converter.</div>
            </div>

            {/* Teflow*/}
            <div className='play-project animate__animated animate__fadeInUp'>
                <div className='play-project-image'> <img src={Teflow} width="100%" height="100%" alt=''/></div>
                <div className='play-project-title'>Teflow</div>
                <div className='play-project-content'>A news agency platform giving newbies accomodating experience. Development in progress.</div>
            </div>

            {/*MoveBot*/}
            <div className='play-project animate__animated animate__fadeInUp'>
                <div className='play-project-image'> <img src={MoveBot} width="100%" height="100%" alt=''/></div>
                <div className='play-project-title'>MoveBot</div>
                <div className='play-project-content'>Product Delivery Package box for a delivery company.</div>
            </div>

            {/* WorkiNN */}
            <div className='play-project oover animate__animated animate__fadeInUp' onClick={() => window.open('https://www.behance.net/gallery/113530247/WORKiNN-Branding')}>
                <div className='play-project-image'> <img src={WorkiNN} width="100%" height="100%" alt=''/></div>
                <div className='play-project-title'>WorkiNN Branding</div>
                <div className='play-project-content'>Branding for a Tech Hub company that gives room for different tech activities such as; learning, talk show, digital services, event center, and game center.</div>
                <div className='read-more'>VIEW CASE STUDY</div>
            </div>

            {/* Design System */}
            <div className='play-project animate__animated animate__fadeInUp'>
                <div className='play-project-image'> <img src={DesignSystem} width="100%" height="100%" alt=''/></div>
                <div className='play-project-title'>Design System</div>
                <div className='play-project-content'>I always work with design system to make design consistent and hand-off 100% natural.</div>
            </div>

            {/* Flyer */}
            <div className='play-project'>
                <div className='play-project-image'> <img src={FlyerFolio} width="100%" height="100%" alt=''/></div>
                <div className='play-project-title'>Flyerfolio</div>
                <div className='play-project-content'>Promotional flyer for products.</div>
            </div>

            <div className="playground-view animate__animated animate__fadeInUp">VIEW MORE?</div>
            <div className='project-click oover animate__animated animate__fadeInUp' onClick={() => window.open('https://www.behance.net/josephdaniel1')}>Click Me</div>
        </div>
  
      </div>
    );
  }




export default Playground;