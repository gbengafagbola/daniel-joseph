import DroneCover from '../../assets/images/Drone App cover.png';
import DroneSketch from '../../assets/images/Drone App - Sketch.png';
import DroneLowFi from '../../assets/images/Drone App - Wireframe.png';
import DroneHighFi from '../../assets/images/Drone App - HiFi.png';
import ReactPlayer from 'react-player';
import Helmet from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import 'animate.css'


import './drone-app.css';

function DroneApp({darkMode}) {
  let navigate = useNavigate();
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Helmet>
        <title>Drone App - Daniel Joseph</title>
        <meta
          name="description"
          content="Aiding farmers in precision farming via data gathering and analysis"
        />
      </Helmet>

        <div className='drone-container'>

            <div className='drone-header animate__animated animate__fadeInUp'>Drone App</div>
          
            <div className='drone-header-brief animate__animated animate__fadeInUp'>Aiding farmers in precision farming via data gathering and analysis.</div>
          
            {/* Cover Image */}
            <div className='drone-cover animate__animated animate__fadeInUp'> <img src={DroneCover} width="100%" height="100%" alt=''/></div>

            {/* Impact and Role */}
            <div className='impact-role animate__animated animate__fadeInUp'>
                <div className='impact-col'>
                  <div className='the-title'>Impact</div>
                  <div className='the-content'>Improving data gathering and analysis for farmers.</div>
                </div>

                <div className='role-col'>
                   <div className='the-title'>Role</div>
                   <div className='the-content'>Lead designer, user interview, user research, visual direction, interactive prototype, testing.</div>
                </div>
            </div>
          
            {/* The challenge */}
            <div className='the-title animate__animated animate__fadeInUp'>The Challenge</div>
            <div className='the-content animate__animated animate__fadeInUp'>Easy and seamless precision farming experiecnce, and eliminate the culture of farming uncertainty with the aid of drone.</div>

            {/* The solution */}
            <div className='the-title animate__animated animate__fadeInUp'>The Solution</div>
            <div className='the-content animate__animated animate__fadeInUp'>Using modern design to make precision farming experience seemless for farmers.</div>

            {/* Expectations */}
            <div className='the-title animate__animated animate__fadeInUp'>A friendly welcome</div>
            <div className='the-content animate__animated animate__fadeInUp'>With invention of different technological equipments/tools, all industry have changed the way they work. 
                Drone for example can be used in different industry and in this case study, drone was used in aiding precision farming to improve data gathering and analysis. 
                This project was submitted to the Department of Elect./Elect. (Computer Option) in the University of Port Harcourt, Choba, Nigeria.</div>

            {/* Design Process */}
            <div className='design-title animate__animated animate__fadeInUp'>The design process</div>
            <div className='design-content animate__animated animate__fadeInUp'>This is how I generate a conceptual solution for a problem. I approached this in a dynamic approach (it???s not really a linear process, depends on the project and my role).</div>
            <div className='design-sub-content animate__animated animate__fadeInUp'>
                <ul>
                  <li>Empathize</li>
                  <li>Define</li>
                  <li>Ideate</li>
                  <li>Prototype</li>
                  <li>Test</li>
                </ul>
            </div>

            {/* Success Metrics */}
            <div className='the-title animate__animated animate__fadeInUp'>Defining Success Metrics</div>
            <div className='the-content-low animate__animated animate__fadeInUp'>Based on assumptions, I formulated questions for a remote online survey that was answered by 28 people (all were farmers) within 5 days. 
                The survey helped us understand what some of the people problem was and how we can meet people at their human needs. 
                Here are some of the response;
            </div>
            {/* Analysis */}
            <div className='current-state animate__animated animate__fadeInUp'>
                <div className='col1'>
                  <div className='state-title'>80%</div>
                  <div className='state-content'>of farmers find it difficult to cover their farm land withing short time.</div>
                </div>

                <div className='col2'>
                    <div className='state-title'>100%</div>
                    <div className='state-content'>are bittered that most of their crops get spoilt due to manual overseeing of the crops.</div>
                </div>

                <div className='col3'>
                    <div className='state-title'>70%</div>
                    <div className='state-content'>would love the government to intervene in the mass production of this product.</div>
                </div>
            </div>

            {/* Visuals */}
            <div className='the-title animate__animated animate__fadeInUp'>Ideating & Visuals</div>
            <div className='the-content-low animate__animated animate__fadeInUp'>With our research findings and personas in mind, I invited Gbenga, Obuso and Nonso to brainstorm solutions together on an online remote and physical session. I moderated these sessions, and before the session, I sent the necessary resources/notes/tasks they should go through to provide solutions.</div>
            <div className='sub-title animate__animated animate__fadeInUp'>Sketch</div>
            <div className='img-sketch animate__animated animate__fadeInUp'> <img src={DroneSketch} width="100%" height="100%" alt=''/></div>
            <div className='sub-title animate__animated animate__fadeInUp'>Low - Fi</div>
            <div className='img-low-fi animate__animated animate__fadeInUp'> <img src={DroneLowFi} width="100%" height="100%" alt=''/></div>
            <div className='sub-title animate__animated animate__fadeInUp'>High - Fi</div>
            <div className='img-low-fi animate__animated animate__fadeInUp'> <img src={DroneHighFi} width="100%" height="100%" alt=''/></div>

            {/* Interview */}
            <div className='the-title-top2 animate__animated animate__fadeInUp'>Interview</div>
            <div className='the-content animate__animated animate__fadeInUp'>We already had our assumptions and provided some screens based on the feedbacks we had, I advocated conducting user interviews to understand to what extent the solution was effective. I also encouraged Gbenga, Obuso and Nonso to take part in the process to empathize with our users and learn how they interact with the app step by step. We interviewed ten (10) people in Nigeria (20% physically and 80% in an online remote session) from different locations with various farm crop type and products.</div>

            {/* Interactive Prototype */}
            <div className='the-title animate__animated animate__fadeInUp'>Interactive prototype</div>
            <div className='the-content-low animate__animated animate__fadeInUp'>A well-drafted questionnaire was prepared for the users to fill while testing the solutions to answer and measure to what extent the solutions provided solved their problems.</div>
            {/* <div className='img-low-fi'> <img src={DronePrototype} width="100%" height="100%" alt=''/></div> */}
            <div className='video oover animate__animated animate__fadeInUp'>
                <ReactPlayer width='100%' height='500px'
                controls loop url='https://www.youtube.com/watch?v=g_HyyQgpHiQ' />
              </div>

            {/* Hand-off */}
            <div className='the-title-top2 animate__animated animate__fadeInUp'>Hand-off</div>
            <div className='the-content animate__animated animate__fadeInUp'>This was 100% natural. I prepared a detailed design system that carefully points out all required information on the Figma file.</div>

            {/* Take Away */}
            <div className='the-title animate__animated animate__fadeInUp'>My take aways from the project</div>
            <div className='the-content animate__animated animate__fadeInUp'>
              <ul className='sub-content'>
                <li>Assumptions help give a foundation to what is unknown. Testing ideas is crucial, and this helped us validate assumptions and decisions.</li>
                <li>It was my first project relating to AgroTech, I had to do some personal research and 1 : 1 interview with some of the lecturers in UniPort from the faculty of Agricultural Science.</li>
                <li>I was open to learning new concept</li>
              </ul>
            </div>

            {/* Team */}
            <div className='team animate__animated animate__fadeInUp'>Team</div>
            <div className='team-mate animate__animated animate__fadeInUp'>
                Oluwagbenga Fagbola - Co Founder <br /> <br />
                Umesi Obusor - Co Founder <br /> <br />
                Nonso - Co Founder
            </div>

            <div className="next-project animate__animated animate__fadeInUp">NEXT PROJECT</div>
            <div className='next-project-title oover animate__animated animate__fadeInUp' onClick={() => {navigate("/tribal-play");}}>Tribal Play</div>

        </div>

    </div>
  );
}

export default DroneApp;