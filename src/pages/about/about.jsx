import './about.css';
import DjAbout from '../../assets/images/dj-about.jpg';
import {ReactComponent as PlanetSvg} from '../../assets/svg/planet.svg';
import Employment from '../../components/employment/employment';

function About({darkMode}) {
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className='about-container'>
          <div className='about-title'>About</div>

          <PlanetSvg className="planet"/>

          {/* <div className='about-me'>
              <div className='my-pic'><img src={DjAbout} width="100%" height="100%" alt=''/></div>
              <div className='my-story'>
                <div className='iam'> HI 👋🏽, MY NAME IS DANIEL JOSEPH</div> <br />
                I live in a space driven by curiosity. Design is a go-to to save the world. So, I've got superpowers. <br />
                I have a Bachelor's Degree in Chemistry Education and a Background in Branding & Data Analysis. I was previously at eSoft Response where I took the role of a Creative Lead while still functioning as the UI/UX Designer and I’m presently with Yokunbo Studios. Also, Co-Founding an eCommerce Store (WIP) and Tribal Play. <br />
                When I’m not learning or saving the world with my super powers, I enjoy playing video games and taking a walk to appreciate nature. <br />
                I would love to have a TV show of my own to give back to the community by empowering through resources, knowledge and entertainment.
              </div>
          </div> */}

          <div className='about-me'>
              <div className='my-pic'> <img src={DjAbout} width="100%" height="100%" alt=''/></div>
              <div className='my-story'>
                <div className='iam'> HI 👋🏽, MY NAME IS DANIEL JOSEPH</div> <br />
                I live in a space driven by curiosity. Design is a go-to to save the world. So, I've got superpowers. <br />
                I have a Bachelor's Degree in Chemistry Education and a Background in Branding & Data Analysis. I was previously at eSoft Response where I took the role of a Creative Lead while still functioning as the UI/UX Designer and I’m presently with Yokunbo Studios. Also, Co-Founding an eCommerce Store (WIP) and Tribal Play. <br />
                When I’m not learning or saving the world with my super powers, I enjoy playing video games and taking a walk to appreciate nature. <br />
                I would love to have a TV show of my own to give back to the community by empowering through resources, knowledge and entertainment.
              </div>
          </div>
        <Employment />
        </div>

    </div>
  );
}

export default About;
