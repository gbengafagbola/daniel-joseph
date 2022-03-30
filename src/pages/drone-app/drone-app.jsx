import DroneCover from '../../assets/images/Drone App cover.png';
import DroneSketch from '../../assets/images/Drone App - Sketch.png';
import DroneLowFi from '../../assets/images/Drone App - Wireframe.png';
import DroneHighFi from '../../assets/images/Drone App - HiFi.png';
import DronePrototype from '../../assets/images/Drone App - Prototype.png';

import './drone-app.css';

function DroneApp({darkMode}) {
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>

        <div className='drone-container'>

            <div className='drone-header'>Tribal Play</div>
          
            <div className='drone-header-brief'>Here is how I helped in aiding farmers in precision farming via data gathering and analysis, a project submitted to the University of Port Harcourt.</div>
          
            {/* Cover Image */}
            <div className='drone-cover'> <img src={DroneCover} width="100%" height="100%" alt=''/></div>

            {/* Impact and Role */}
            <div className='impact-role'>
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
            <div className='the-title'>The Challenge</div>
            <div className='the-content'>Easy and seamless precision farming experiecnce, and eliminate the culture of farming uncertainty with the aid of drone.</div>

            {/* The solution */}
            <div className='the-title'>The Solution</div>
            <div className='the-content'>Using modern design to make precision farming experience seemless for farmers.</div>

            {/* Expectations */}
            <div className='the-title'>A friendly welcome</div>
            <div className='the-content'>With invention of different technological equipments/tools, all industry have changed the way they work. 
                Drone for example can be used in different industry and in this case study, drone was used in aiding precision farming to improve data gathering and analysis. 
                This project was submitted to the Department of Elect./Elect. (Computer Option) in the University of Port Harcourt, Choba, Nigeria.</div>

            {/* Design Process */}
            <div className='design-title'>The design process</div>
            <div className='design-content'>This is how I generate a conceptual solution for a problem. I approached this in a dynamic approach (it’s not really a linear process, depends on the project and my role).</div>
            <div className='design-sub-content'>
                <ul>
                  <li>Empathize</li>
                  <li>Define</li>
                  <li>Ideate</li>
                  <li>Prototype</li>
                  <li>Test</li>
                </ul>
            </div>

            {/* Success Metrics */}
            <div className='the-title'>Defining Success Metrics</div>
            <div className='the-content-low'>Based on assumptions, I formulated questions for a remote online survey that was answered by 28 people (all were farmers) within 5 days. 
                The survey helped us understand what some of the people problem was and how we can meet people at their human needs. 
                Here are some of the response;
            </div>
            {/* Analysis */}
            <div className='current-state'>
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
            <div className='the-title'>Ideating & Visuals</div>
            <div className='the-content-low'>With our research findings and personas in mind, I invited Gbenga, Obuso and Nonso to brainstorm solutions together on an online remote and physical session. I moderated these sessions, and before the session, I sent the necessary resources/notes/tasks they should go through to provide solutions.</div>
            <div className='sub-title'>Sketch</div>
            <div className='img-sketch'> <img src={DroneSketch} width="100%" height="100%" alt=''/></div>
            <div className='sub-title'>Low - Fi</div>
            <div className='img-low-fi'> <img src={DroneLowFi} width="100%" height="100%" alt=''/></div>
            <div className='sub-title'>High - Fi</div>
            <div className='img-low-fi'> <img src={DroneHighFi} width="100%" height="100%" alt=''/></div>

            {/* Interview */}
            <div className='the-title-top2'>Interview</div>
            <div className='the-content'>We already had our assumptions and provided some screens based on the feedbacks we had, I advocated conducting user interviews to understand to what extent the solution was effective. I also encouraged Gbenga, Obuso and Nonso to take part in the process to empathize with our users and learn how they interact with the app step by step. We interviewed ten (10) people in Nigeria (20% physically and 80% in an online remote session) from different locations with various farm crop type and products.</div>

            {/* Interactive Prototype */}
            <div className='the-title-top2'>Interactive prototype</div>
            <div className='the-content-low'>A well-drafted questionnaire was prepared for the users to fill while testing the solutions to answer and measure to what extent the solutions provided solved their problems.</div>
            <div className='img-low-fi'> <img src={DronePrototype} width="100%" height="100%" alt=''/></div>

            {/* Hand-off */}
            <div className='the-title-top2'>Hand-off</div>
            <div className='the-content'>This was 100% natural. I prepared a detailed design system that carefully points out all required information on the Figma file.</div>

            {/* Take Away */}
            <div className='the-title'>My take aways from the project</div>
            <div className='the-content'>
              <ul className='sub-content'>
                <li>Testing ideas is crucial, and this helped us validate assumptions and decisions.</li>
                <li>I was challenged to step up my interaction skill and I was amazed how well it turned.</li>
              </ul>
            </div>

            {/* Team */}
            <div className='team'>Team</div>
            <div className='team-mate'>
                Oluwagbenga Fagbola - Co Founder <br /> <br />
                Umesi Obusor - Co Founder <br /> <br />
                Nonso - Co Founder
            </div>


        </div>

    </div>
  );
}

export default DroneApp;