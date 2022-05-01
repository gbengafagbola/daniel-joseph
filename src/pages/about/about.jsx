import './about.css';
import DjAbout from '../../assets/images/dj-about.jpg';

import Helmet from 'react-helmet';
import 'animate.css'

function About({darkMode}) {
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Helmet>
        <title>Get to Know Me - Daniel Joseph</title>
        <meta
          name="description"
          content="About me, Get to know me in-depth and know some of the amazing things I'm working on"
        />
      </Helmet>
        <div className='about-container'>
          <div className='about-title animate__animated animate__fadeInUp'>
              Passionate<br></br>
              Goal Driven<br></br>
              Creative Designer<br></br>
          </div>

          {/* <PlanetSvg className="planet"/> */}
          <div className='about-me animate__animated animate__fadeInUp'>
              <div className='my-pic'>
                  <div className='intro-dj'>GET TO KNOW WHO I AM</div>
              </div>
              <div className='my-story'>
              <div className='dan-img'> <img src={DjAbout} width="100%" height="100%" alt=''/></div>
              
                <div className='iam'> HI 👋🏽, MY NAME IS DANIEL JOSEPH</div> <br />
                I live in a space driven by curiosity. Design is a go-to to save the world. So, I've got superpowers. <br /> <br></br>
                I have a Bachelor's Degree in Chemistry Education and a Background in Branding & Data Analysis. I was previously at eSoft Response where I took the role of a Creative Lead while still functioning as the UI/UX Designer and I’m presently with Yokunbo Studios. Also, Co-Founding an eCommerce Store (WIP) and Tribal Play. <br /><br></br>
                Building Signature X (Fashion Outlet), Nibble Drop (NFT Market Place), Boitla (Image downloader) and Dropper X (Logistics), <br /><br></br>
                When I’m not learning or saving the world with my super powers, I enjoy playing games, listening to music and taking a walk to appreciate nature. <br /><br></br>
                I would love to have a TV show of my own to give back to the community by empowering through resources, knowledge and entertainment.
              </div>
          </div>
          <div className="employment-container">
            <div className='work-title animate__animated animate__fadeInUp'>Work <br /> Summary</div>

            <div className='experience animate__animated animate__fadeInUp'>   
                <div className='job-title'>Product Designer - Yokunbo Studios, US
                  <div className='time-spent'>2021 - Present</div>
                </div>
                <div className='job-title'>Freelancing - Designer (Brand and Product)
                  <div className='time-spent'>2017 - Present</div>
                </div>
                <div className='job-title'>UX/UI Designer - eSoft Response, UK
                  <div className='time-spent'>2020 - 2021</div>
                </div>    
                 <div className='job-title'>Visual Designer - Birthday Match Finder
                  <div className='time-spent'>2018 - 2019</div>
                </div>      
            </div>


            <div className='my-resume oover animate__animated animate__fadeInUp' onClick={() => {window.open('https://drive.google.com/drive/folders/1J-9ll3j0gVLS-EWoiO9rpHY6mkM7d5At?usp=sharing')}}>view my resume</div>

            <div className='work-title animate__animated animate__fadeInUp'>Learning & <br /> Education</div>

            <div className='experience animate__animated animate__fadeInUp'>  
                <div className='job-title'>Product Designer - Udacity
                  <div className='time-spent'>2019</div>
                </div>
                <div className='job-title'>Chemistry Education, University of Port Harcourt
                  <div className='time-spent'>2015 - 2021</div>
                </div>
            </div>


            <div className='work-title animate__animated animate__fadeInUp'>beyond product <br /> design, I love teaching</div>
            <div className='space'></div>

            <div className='music-title'>I love listening <br/> to music</div>
            <div className='music-content space animate__animated animate__fadeInUp'>I enjoy music and I enjoy discovering music more.
            I listen to a wide variety of music genres. Hip-Pop, Blues, Reggae, and Afro Pop are frequently heard.
            </div>

            <div className='work-title animate__animated animate__fadeInUp'>I also write</div>

            <div className='write-up animate__animated animate__fadeInUp'>
              <div className='write-container1 oover' onClick={() => window.open('https://dharnyz.hashnode.dev/an-hack-to-building-product-design')}>
                <div className='write-title'>An Hack to Building Product (Design)</div>
                <div className='write-content'>Building a Product is not an easy task. I have experienced this in different scenarios and I have been able to put down some things I ...</div>
                <div className='read-more'>
                      READ MORE
                    {/* <SideArrow className='side-arrow'/> */}
                </div>
              </div>
              
              <div className='write-container2 oover' onClick={() => window.open('https://dharnyz.hashnode.dev/launch-a-product')}>
                <div className='write-title'>Launch! A moving train.</div>
                <div className='write-content'>Let's launch? This is a big question that needs all variables checked. I will say that it's a big step in a product cycle.</div>
                    <div className='read-more'>
                        READ MORE
                        {/* <SideArrow className='side-arrow'/> */}
                    </div>
              </div>
            </div>

            <div className='shy animate__animated animate__fadeInUp'>DON’T BE SHY. <br /> HAVE YOU GOT AN AMAZING AND EXCITING PROJECTS?</div>

            <div className='get-in-touch oover animate__animated animate__fadeInUp' onClick={() => {window.open('mailto:josephodaniel19@gmail.com?subject=Let%27s talk Business')}}>Get in touch</div>

        </div> 
        </div>

    </div>
  );
}

export default About;
