import ShangeCover from '../../assets/images/Shange It Cover.png';
import ShangeHiFi from '../../assets/images/Shange It - Hi Fi.png';
import ShangeSketch from '../../assets/images/Shange It - Sketch.png';
import ShangeLoFi from '../../assets/images/Shange It - LoFi.png';
import ShangeItIdentity1 from '../../assets/images/Shange It Identity 1.png';
import ShangeItIdentity2 from '../../assets/images/Shange It Identity 2.png';
import ShangeItImage1 from '../../assets/images/Shange It Image 1.png';
import ShangeItImage2 from '../../assets/images/Shange It Image 2.png';
import ShangeItLogo from '../../assets/images/Shange It Logo.png';
import ReactPlayer from 'react-player';
import Helmet from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import 'animate.css'
import './shange-it.css';

function ShangeIt({darkMode}) {
  let navigate = useNavigate();
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Helmet>
        <title>Shange It - Daniel Joseph</title>
        <meta
          name="description"
          content="An easy to use p2p currency exchange app"
        />
      </Helmet>

      <div className='shange-container'>
          <div className='shange-header animate__animated animate__fadeInUp'>Shange It</div>
          <div className='shange-header-brief animate__animated animate__fadeInUp'>Creating an easy to use p2p currency exchange platform for a Startup.</div>
          
          {/* Cover Image */}
          <div className='shange-cover animate__animated animate__fadeInUp'> <img src={ShangeCover} width="100%" height="100%" alt=''/></div>

          {/* Impact and Role */}
          <div className='impact-role animate__animated animate__fadeInUp'>
              <div className='impact-col'>
              <div className='the-title'>Impact</div>
                <div className='the-content'>Proposed impact of the design is to increase customer loyalty by making the experience awesome.</div>
              </div>

              <div className='role-col'>
                  <div className='the-title'>Role</div>
                  <div className='the-content'>Sole designer working on visuals, interactive prototype, testing and branding.</div>
              </div>
          </div>
          
            {/* The challenge */}
            <div className='the-title animate__animated animate__fadeInUp'>The Challenge</div>
            <div className='the-content animate__animated animate__fadeInUp'>Unforgottable experience using the platform to exchange currency with low/zero charge. My goal was to create an easy to use mobile app currency exchange platform leveraging on p2p.</div>

            {/* The solution */}
            <div className='the-title animate__animated animate__fadeInUp'>The Solution</div>
            <div className='the-content animate__animated animate__fadeInUp'>I provided a few click solution to exchanging currency using p2p approach.</div>

            {/* Identity */}
            <div className='the-title animate__animated animate__fadeInUp'>Identity</div>
            <div className='the-content-low animate__animated animate__fadeInUp'>This was made to be very simple, clean, modern and unique that appealed to the value it’s bringing.</div>
            <div className='spec-img space animate__animated animate__fadeInUp'> <img src={ShangeItIdentity1} width="100%" height="100%" alt=''/></div>
            <div className='spec-img space animate__animated animate__fadeInUp'> <img src={ShangeItIdentity2} width="100%" height="100%" alt=''/></div>

            {/* Impact and Role */}
            <div className='impact-role'>
                <div className='impact-col animate__animated animate__fadeInUp'>
                {/* Team */}
                    <div className='team'>Team</div>
                    <div className='team-mate space'>
                    SF Pro Text<br /> <br />
                    Autour One<br />
                    </div>

                    <div className='team'>Logo</div>
                    <div className='spec-img space shange-it-logo'> <img src={ShangeItLogo} width="100%" height="100%" alt=''/></div>

                </div>

              <div className='role-col animate__animated animate__fadeInUp'>
                  <div className='team'>Color</div>
                  <div className='top-color'>
                      <div className='color1'>
                          <div className='height-width clr1'></div>
                          <div className='color-title clr-space'>#021F6F</div>
                      </div>
                      <div className='color2'>
                          <div className='height-width clr2'></div>
                          <div className='color-title clr-space'>#DB1F48</div>
                      </div>
                      <div className='color3'>
                          <div className='height-width clr3'></div>
                          <div className='color-title clr-space'>#F6735A</div>
                      </div>
                      <div className='color4'>
                          <div className='height-width clr4'></div>
                          <div className='color-title clr-space'>#FFB552</div>
                      </div>
                  </div>
              </div>

          </div>

            {/* Normal Images */}
            <div className='project-grid animate__animated animate__fadeInUp'>
                <div className='container1'>
                  <div className='ile-img'> <img src={ShangeItImage1} width="100%" height="100%" alt=''/></div>
                </div>

                <div className='container2'>
                  <div className='ile-img'> <img src={ShangeItImage2} width="100%" height="100%" alt=''/></div>
               </div>
            </div>

            {/* Identity */}
            <div className='the-title animate__animated animate__fadeInUp'>The mobile app</div>
            <div className='the-content animate__animated animate__fadeInUp'>One of the changes with financial institution is that it’s now mobile unlike before where all financial transactions have to be physical at the bank. With introduction of fintech companies, most banks have now shift their dominant/rigid ideaology to a very flexible system where transaction is now done on the go. <br />
                Shange It is a startup who aim is to make the currency exchange seemless for users.</div>

            {/* Design Process */}
            <div className='design-title animate__animated animate__fadeInUp'>The design process</div>
            <div className='design-content animate__animated animate__fadeInUp'>This is how I generate a conceptual solution for a problem. I approached this in a dynamic approach (it’s not really a linear process, depends on the project and my role).</div>
            <div className='design-sub-content animate__animated animate__fadeInUp'>
                <ul>
                  <li>Empathize</li>
                  <li>Define</li>
                  <li>Ideate</li>
                  <li>Prototype</li>
                  <li>Test</li>
                </ul>
            </div>

            {/* Business Goals */}
            <div className='the-title animate__animated animate__fadeInUp'>Business Goals and Opportunity for impact</div>
            <div className='the-content-low2 animate__animated animate__fadeInUp'>I pitched the following idea with the team to fasten our awareness of the Shange It app.</div>
              <ul className='sub-content space animate__animated animate__fadeInUp'>
                <li>Enable the user to connect with buyers or sellers.</li>
                <li>In-app message system.</li>
                <li>Fast and effective customer support system.</li>
                <li>The application must be implementable in iOS and Android.</li>
                <li>Create a trustworthy and reliable interface where users feel safe to buy and sell.</li>
                <li>Enable user to add more than one recipient in a single transaction.</li>
              </ul>

            {/* Findings */}
            <div className='the-title animate__animated animate__fadeInUp'>Findings</div>
            <div className='the-content-low animate__animated animate__fadeInUp'>We interviewed ten (10) people who worked in the US, UK, and Nigeria from different positions with various company sizes and responsibilities. We found;
            </div>
            {/* Analysis */}
            <div className='current-state animate__animated animate__fadeInUp'>
                <div className='col1'>
                  <div className='state-title'>100%</div>
                  <div className='state-content'>want a simple currency exchange. With few clicks, users should see through a transaction.</div>
                </div>

                <div className='col2'>
                    <div className='state-title'>80%</div>
                    <div className='state-content'>would like to have a multi-transfer in a single transaction.</div>
                </div>

                <div className='col3'>
                    <div className='state-title'>60%</div>
                    <div className='state-content'>would love to have a well secured platform that they can trust.</div>
                </div>
            </div>

            {/* Simple Currency Exchange */}
            <div className='sub-title1 remove animate__animated animate__fadeInUp'>SIMPLE CURRENCY EXCHANGE</div>
            <div className='sub-content1 animate__animated animate__fadeInUp'>We want our users to have an amamzing and seemless experience while using the app. This helps in improving our customer satifaction score as well as reducing the error rate of our users.</div>

            {/* INCREASE CUSTOMER LOYALTY */}
            <div className='sub-title1 animate__animated animate__fadeInUp'>INCREASE CUSTOMER LOYALTY</div>
            <div className='sub-content1 animate__animated animate__fadeInUp'>Our user experience should e the one that establish a long lasting relationship with our user so as to increase usage.</div>

            {/* PRODUCT AWARENESS */}
            <div className='sub-title1 animate__animated animate__fadeInUp'>PRODUCT AWARENESS</div>
            <div className='sub-content1 animate__animated animate__fadeInUp'>Download of the Shange It app doesn't assure us of active and users who transact on the platform. Having everyone use and not just have Shange It is what we are striving for and should be met. We’ll use different marketing channel to publicize the platform. Instagram and Youtube is my first got to for ads as most people spend alot of time on does platforms.</div>

            {/* MULTIPLE BENEFICIARIES IN A SINGLE TRANSACTION*/}
            <div className='sub-title1 animate__animated animate__fadeInUp'>MULTIPLE BENEFICIARIES IN A SINGLE TRANSACTION</div>
            <div className='sub-content1 extra animate__animated animate__fadeInUp'>We want our users to be able to send money to more than one beneficiary in a single transaction.</div>

            {/* Visuals */}
            <div className='the-title animate__animated animate__fadeInUp'>Ideating & Visuals</div>
            <div className='the-content-low animate__animated animate__fadeInUp'>I ensured that we have our sessions every 4 days to brainstorm solutions to underlying problem together on an online remote session with people in different locations (the US, UK and Nigeria). I moderated the sessions.</div>
            <div className='sub-title animate__animated animate__fadeInUp'>Sketch</div>
            <div className='img-sketch animate__animated animate__fadeInUp'> <img src={ShangeSketch} width="100%" height="100%" alt=''/></div>
            <div className='sub-title animate__animated animate__fadeInUp'>Low - Fi</div>
            <div className='img-low-fi animate__animated animate__fadeInUp'> <img src={ShangeLoFi} width="100%" height="100%" alt=''/></div>
            <div className='sub-title animate__animated animate__fadeInUp'>High - Fi</div>
            <div className='img-low-fi animate__animated animate__fadeInUp'> <img src={ShangeHiFi} width="100%" height="100%" alt=''/></div>

            {/* User flow and Interaction */}
            <div className='the-title animate__animated animate__fadeInUp'>User flow and Interaction</div>
            <div className='the-content animate__animated animate__fadeInUp'>The user flow was designed for multiple features and functionality of the Shange It app. The flows are quite large and exclusive to the team and I’ve decided not to include them in this case study. The user flow helped in the interaction of the visuals. I was able to get the behaviour (interaction) of the visuals available for prototype which allow users test the Shange It app.</div>

            {/* Interactive Prototype */}
            <div className='the-title animate__animated animate__fadeInUp'>Interactive prototype</div>
            <div className='the-content-low animate__animated animate__fadeInUp'>A well-drafted questionnaire was prepared for the users to fill while testing the solutions to answer and measure to what extent the solutions provided solved their problems.</div>
            {/* <div className='img-low-fi'> <img src={ShangePrototype} width="100%" height="100%" alt=''/></div> */}
            <div className='video animate__animated animate__fadeInUp'>
                <ReactPlayer width='100%' height='500px'
                controls loop url='https://www.youtube.com/watch?v=0jCPcJRnqqE' />
            </div>

            {/* Aftermath and Retrospective */}
            <div className='the-title animate__animated animate__fadeInUp'>Retaining Users</div>
            <div className='the-content-low2 animate__animated animate__fadeInUp'>I pitched the following idea with the team to fasten our awareness of the Shange It app.</div>
              <ul className='sub-content sub-space animate__animated animate__fadeInUp'>
                <li>Referral reward.</li>
                <li>Discount on their first 10 transactions on the platform.</li>
                <li>Bonus for total transaction greater than $5,000 within a month.</li>
                <li>Trust tag.</li>
                <li>Juicy discount on transactions greater than $3,000.</li>
                <li>Incentives for people who join the waitlist before product launch.</li>
              </ul>

            {/* Hand-off */}
            <div className='the-title-top2 animate__animated animate__fadeInUp'>Hand-off</div>
            <div className='the-content animate__animated animate__fadeInUp'>I prepared a detailed design system to the team on Figma file to help developer while developing.</div>

            {/* Aftermath and Retrospective */}
            <div className='the-title animate__animated animate__fadeInUp'>Aftermath and Retrospective</div>
            <div className='the-content-low2 animate__animated animate__fadeInUp'>Learning is constant. Below is what I learnt while working on the project:</div>
              <ul className='sub-content sub-space animate__animated animate__fadeInUp'>
                <li>Keep an open mind and always listen.</li>
                <li>Easy prototyping helps users navigate well when using a platform.</li>
                <li>I learnt the importance of research and proper understanding of product.</li>
                <li>Empathy stage shouldn’t be joked with, I get to see it’s effect in full force.</li>
              </ul>

            {/* Project Status*/}
            <div className='the-title-top2 animate__animated animate__fadeInUp'>Project Status</div>
            <div className='the-content animate__animated animate__fadeInUp'>As of when this case study was published, the project isn’t live yet reason best known to the client.</div>

            {/* Team */}
            <div className='team animate__animated animate__fadeInUp'>Team</div>
            <div className='team-mate animate__animated animate__fadeInUp'>
                Sam - Software Engineer<br /> <br />
                Mr. Dami- Co Founder <br /> <br />
                Mr. Seyi- Co Founder
            </div>

            <div className="next-project animate__animated animate__fadeInUp">NEXT PROJECT</div>
            <div className='next-project-title animate__animated animate__fadeInUp' onClick={() => {navigate("/drone-app");}}>Drone App</div>

      </div>

    </div>
  );
}

export default ShangeIt;