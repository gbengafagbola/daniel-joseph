import IleWaCover from '../../assets/images/Ile Wa Cover.png';
import IleIdentity1 from '../../assets/images/Ile Identity 1.png';
import IleIdentity2 from '../../assets/images/Ile Identity 2.png';
import IleItLogo from '../../assets/images/Ile Logo.png';
import IleHiFi from '../../assets/images/Ile Wa - Hi Fi.png';
import IleSketch from '../../assets/images/Ile Wa - Wireframe.png';
import IleLoFi from '../../assets/images/Ile Wa - Wireframe.png';
import IleMobile from '../../assets/images/Mobile - Ile Wa.png';
import IleImage1 from '../../assets/images/Ile Image 1.png';
import IleImage2 from '../../assets/images/Ile Image 2.png';
import IleImage3 from '../../assets/images/Ile Image 3.png';
import IleImage4 from '../../assets/images/Ile Image 4.png';
import ReactPlayer from 'react-player';



import './ile-wa.css';


function IleWa({darkMode}) {
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>

      <div className='ile-container'>
          <div className='ile-header'>Ile Wa</div>
          <div className='ile-header-brief'>A unique identity and a PWA website design.</div>
          
          {/* Cover Image */}
          <div className='ile-cover'> <img src={IleWaCover} width="100%" height="100%" alt=''/></div>

          {/* Impact and Role */}
          <div className='impact-role'>
              <div className='impact-col'>
              <div className='the-title'>Impact</div>
                <div className='the-content'>A unique identity, faster rate to reach more audience, showcase their works and book for their services.</div>
              </div>

              <div className='role-col'>
                  <div className='the-title'>Role</div>
                  <div className='the-content'>Sole designer, brand strategist, secondary user researcher, visual designer, interactive prototype, testing and design system</div>
              </div>
          </div>
          
          {/* The challenge */}
          <div className='the-title'>The Challenge</div>
          <div className='the-content'>Ile Wa was in dire need of some branding refocus, customers visibility, visual consistency, and a website. They don’t have a website, so they can’t reach a large audience. <br />
              My goal was to create an identity and overall look and feel of the brand. Also, showcase some of their work on a visually appealing website that is responsive, bringing creativity, visual consistency, and identity to the brand.</div>

          {/* The solution */}
          <div className='the-title'>The Solution</div>
          <div className='the-content'>After extensive research and data analysis, I pushed a unique identity for Ile Wa, allowing their market team to feel more relaxed and creative in the process. I have introduced a clean and minimalist design approach to make the identity unique, classy, and at the same time playful.</div>
      
          {/* Identity */}
          <div className='the-title'>Identity</div>
          <div className='the-content-low'>This was made to be very simple, clean, modern and unique that appealed to the value it’s bringing.</div>
          <div className='spec-img space'> <img src={IleIdentity1} width="100%" height="100%" alt=''/></div>
          <div className='spec-img space'> <img src={IleIdentity2} width="100%" height="100%" alt=''/></div>

          <div className='video'>
                <ReactPlayer width='100%' height='500px'
                controls playing loop url='https://www.youtube.com/watch?v=PNKhGYKnCjI' />
          </div>

            {/* Impact and Role */}
            <div className='impact-role'>

                <div className='impact-col'>
                {/* Team */}
                    <div className='team'>Team</div>
                    <div className='team-mate space'>
                    New York<br /> <br />
                    Aliquam<br />
                    </div>

                    <div className='team'>Logo</div>
                    <div className='spec-img space ile-logo'> <img src={IleItLogo} width="100%" height="100%" alt=''/></div>

                </div>

                <div className='role-col'>
                    <div className='team'>Color</div>
                    <div className='top-color'>
                        <div className='color1'>
                            <div className='height-width ile-clr1'></div>
                            <div className='color-title clr-space'>#003A46</div>
                        </div>
                        <div className='color2'>
                            <div className='height-width ile-clr2'></div>
                            <div className='color-title clr-space'>#F99137</div>
                        </div>
                        <div className='color3'>
                            <div className='height-width ile-clr3'></div>
                            <div className='color-title clr-space'>#7BEAAC</div>
                        </div>
                    </div>
                    <div className='top-color'>
                        <div className='color1'>
                            <div className='height-width ile-clr4'></div>
                            <div className='color-title clr-space'>#7F2C00</div>
                        </div>
                        <div className='color2'>
                            <div className='height-width ile-clr5'></div>
                            <div className='color-title clr-space'>#FFE9CF</div>
                        </div>
                        <div className='color3'>
                            <div className='height-width ile-clr6'></div>
                            <div className='color-title clr-space'>#C1FAFF</div>
                        </div>
                    </div>
                </div>

            </div>

          {/* Interior Images */}
          <div className='img-ile'>
              <div className='img-low-fi'> <img src={IleImage1} width="100%" height="100%" alt=''/></div>

              <div className='project-grid'>
                  <div className='container1'>
                    <div className='spec-img'> <img src={IleImage2} width="100%" height="100%" alt=''/></div>
                  </div>

                  <div className='container2'>
                    <div className='ile-img'> <img src={IleImage3} width="100%" height="100%" alt=''/></div>
                  </div>
              </div>

              <div className='img-low-fi'> <img src={IleImage4} width="100%" height="100%" alt=''/></div>

          </div>

            {/* The solution */}
            <div className='the-title'>The website overview</div>
            <div className='the-content'>The website was expected to be modern, clean, playful, professional, unique to reach a lot of audience while still carrying its value. And I make Ile Wa eat their cake and still have it.</div>

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

            {/* Secondary Research */}
            <div className='the-title'>Secondary User Research</div>
            <div className='the-content'>Before getting some screens up, I needed to know Ile Wa in more detail. So, I got started by getting to know the market, the company, the services offered, and its assumed clients. So, I digged dip on existing platform that are out there offering the same service. <br />
                Understanding Ile Wa's position and not having a website makes it difficult for people to vet its authenticity from its competitors.</div>

            {/* Expectations */}
            <div className='the-title'>Expectation</div>
            <div className='the-content'>In clear form, Ile Wa identify its goal which are Organized Interface, Engaging design, Mobile accessibility, Structured Content, Playful Experience.</div>

            {/* Visuals */}
            <div className='the-title'>Ideating & Visuals</div>
              <div className='the-content-low'>With my research findings and personas in mind, I invited the stakeholders and the engineer on a step-by-step design showcase on an online remote session. I moderated these sessions, and before the session, I sent details of the new updates so that they can go through it and give their feedbacks during the sessions.</div>
              <div className='sub-title'>Sketch</div>
              <div className='img-sketch'> <img src={IleSketch} width="100%" height="100%" alt=''/></div>
              <div className='sub-title'>Low - Fi</div>
              <div className='img-low-fi'> <img src={IleLoFi} width="100%" height="100%" alt=''/></div>
              <div className='sub-title'>High - Fi</div>
              <div className='img-low-fi'> <img src={IleHiFi} width="100%" height="100%" alt=''/></div>
              <div className='img-low-fi'> <img src={IleMobile} width="100%" height="100%" alt=''/></div>
              {/* <div className='img-low-fi'> <img src={IlePrototype} width="100%" height="100%" alt=''/></div> */}
              <div className='video'>
                <ReactPlayer width='100%' height='500px'
                controls loop url='https://www.youtube.com/watch?v=ir71ni-OJG4' />
              </div>

            {/* User Testing*/}
            <div className='the-title'>User Testing</div>
            <div className='the-content-low'>We interviewed ten (10) people to know the extent to which the identity and website served its goal. We found;</div>
            {/* Analysis */}
            <div className='current-state'>
                <div className='col1'>
                  <div className='state-title'>100%</div>
                  <div className='state-content'>are sure that Ile Wa will deliver what they expect after seeing some of their projects.</div>
                </div>

                <div className='col2'>
                    <div className='state-title'>100%</div>
                    <div className='state-content'>are comfortable to book for Ile Wa services.</div>
                </div>

                <div className='col3'>
                    <div className='state-title'>70%</div>
                    <div className='state-content'>love the blog section because it’s  clear, organized and the aim to enlighten them is amazing.</div>
                </div>
          </div>

          {/* Take Away */}
          <div className='the-title'>My take aways from the project</div>
              <div className='the-content'>
                <ul className='sub-content'>
                  <li>My identify is my identity, it shouldn’t be tampererd with. It should be unique and stick to users memory. Crafting an identity for Ile Wa makes it stand out from its competitors.</li>
                  <li>Through this project, I was able to immerse myself in the entire process of creating an identity for a brand and a website PWA.</li>
                </ul>
              </div>

            {/* Team */}
            <div className='team'>Team</div>
            <div className='team-mate'>
                Idowu Elijah - Frontend Developer
            </div>


            {/* Project Pagination */}
            <div className="next-project">NEXT PROJECT</div>
            <div className='next-project-title'>Shange It</div>

        </div>
    </div>
  );
}

export default IleWa;