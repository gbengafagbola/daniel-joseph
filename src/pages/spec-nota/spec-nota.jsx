import SpecCover from '../../assets/images/Spec Nota Cover.jpg';
import Task from '../../assets/images/Task.jpg';
import Collaboration from '../../assets/images/Collabo.png';
import Documentation from '../../assets/images/Document.png';
import Annotation from '../../assets/images/Annotation.png';
import TaskOverview from '../../assets/images/Task Overview.png';
import Sketch from '../../assets/images/Spec Nota sketch.jpg';
import LowFi from '../../assets/images/Spec Nota low-fi.png';
import HighFi from '../../assets/images/Spec Nota - Hi Fi.jpg';
// import HiTask from '../../assets/images/Hifi - task.jpg';
// import HiDocument from '../../assets/images/Hifi - document.jpg';
// import HiCollaboration from '../../assets/images/Hifi - collaboration.jpg';
// import HiAnnotation from '../../assets/images/Hifi - annotation.png';
// import HiTaskOverview from '../../assets/images/Hifi - task overview.jpg';
import ReactPlayer from 'react-player';
import Helmet from 'react-helmet';

import './spec-nota.css';

function SpecNota({darkMode}) {
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Helmet>
        <title>Spec Nota - Daniel Joseph</title>
        <meta
          name="description"
          content="Modern and seemless project management tool"
        />
      </Helmet>
      
      <div className='spec-nota-container'>
          <div className='spec-nota-header'>Spec Nota</div>
          
          <div className='spec-nota-header-brief'>Modern and seemless project management tool.</div>
          
          {/* Cover Image */}
          <div className='spec-cover'> <img src={SpecCover} width="100%" height="100%" alt=''/></div>
         
          {/* Impact and Role */}
          <div className='impact-role'>
              <div className='impact-col'>
                <div className='the-title'>Impact</div>
                <div className='the-content'>The platform was x4 faster than the previous build, which increased client interest in using the platform. The UI design was modern and interactive.</div>
              </div>

              <div className='role-col'>
                <div className='the-title'>Role</div>
                <div className='the-content'>Lead designer, user interview, user research, visual designer, interactive prototype, testing and design system</div>
              </div>
          </div>
          
          {/* The challenge */}
          <div className='the-title'>The Challenge</div>
          <div className='the-content'>Spec Nota provides a workspace to organize a task, handle documentation, annotation, and time tracker. As at when I worked on the project, through user research and testing, the attributes listed above were the challenge we were hoping to solve.</div>

          {/* The solution */}
          <div className='the-title'>The Solution</div>
          <div className='the-content'>After working with the developer to identify a stack that is fast, I provided insights, best practices, and modern design for underlying problems.</div>

          {/* Expectations */}
          <div className='the-title'>Overview</div>
          <div className='the-content'>Project management tools have helped tremendiously and helped alot of individual to track progress, assigning tasks, documenting and drawing flows especially when the case of COVID-19 was high. Spec Nota is a project management tool for annotation, diagram/flow, task and project documentation.</div>

          {/* Current State */}
          <div className='the-title'>Current State</div>
          <div className='the-content-low'>We interviewed people who worked in the US, UK, and Nigeria from different positions with various company sizes and responsibilities. We found;</div>
          {/* Current State Grid */}
          <div className='current-state'>
              <div className='col1'>
                <div className='state-title'>80%</div>
                <div className='state-content'>of users find it very difficult to add others to a task, share project, assign users, and add file to a task.</div>
              </div>

              <div className='col2'>
                <div className='state-title'>100%</div>
                <div className='state-content'>complained that the platform takes too much time to display or load content. There is a need to refresh some pages before they display any content.</div>
              </div>

              <div className='col3'>
                <div className='state-title'>60%</div>
                <div className='state-content'>would love to add comment on the documentation screen.</div>
              </div>
          </div>

          {/* Expectations */}
          <div className='the-title'>Expectations</div>
          <div className='the-content'>The following were the issues we tackled;</div>
          
          {/* A. Task */}
          <div className='sub-title'>A. TASK:</div>
          <div className='sub-content'>The task is supposed to be seamless and cover all required fields for a task.</div>
          <ul className='sub-content'>
            <li>Assigning more than one user to the task.</li>
            <li>They want to be able to edit the task title.</li>
            <li>User adding a description to the task.</li>
            <li>They should be able to break down the task to sub-task(child issues).</li>
            <li>They should be able to prioritize the task.</li>
            <li>They should be able to add tags to a task.</li>
            <li>They should be able to add files.</li>
            <li>They should be able to add comments.</li>
          </ul>
          <div className='sub-img'> <img src={Task} width="100%" height="100%" alt=''/></div>

          {/* B. COLLABORATION */}
          <div className='sub-title'>B. COLLABORATION:</div>
          <div className='sub-content'>The collaboration should be a simple flow  and should have fewer clicks. Share and collaborate easily.</div>
          <ul className='sub-content'>
            <li>Users should be able to see their colleagues.</li>
            <li>Users can add colleagues to a project with just a single button/click.</li>
            <li>The user should invite others outside the organization to work on a project.</li>
          </ul>
          <div className='sub-img'> <img src={Collaboration} width="100%" height="100%" alt=''/></div>

          {/* C. DOCUMENTATION */}
          <div className='sub-title'>C. DOCUMENTATION:</div>
          <div className='sub-content'>It will be nice to have a documentation section to collate resources and provide documentation to help aid onboarding.</div>
          <ul className='sub-content'>
            <li>The user should be able to create document.</li>
            <li>The user should be able to add comments.</li>
            <li>Users can share a document (Individuals with access can view the document shared).</li>
          </ul>
          <div className='sub-img'> <img src={Documentation} width="100%" height="100%" alt=''/></div>

          {/* D. ANNOTATION */}
          <div className='sub-title'>D. ANNOTATION:</div>
          <div className='sub-content'>A modern annotation screen would make the user more relaxed.</div>
          <ul className='sub-content'>
            <li>The user should be able to image files.</li>
            <li>The user should be able to add comments.</li>
            <li>Users can share a document.</li>
            <li>Users should be able to annotate.</li>
          </ul>
          <div className='sub-img'> <img src={Annotation} width="100%" height="100%" alt=''/></div>

          {/* E. PROJECT/TASK OVERVIEW: */}
          <div className='sub-title'>E. PROJECT/TASK OVERVIEW:</div>
          <div className='sub-content'>A modern annotation screen would make the user more relaxed.</div>
          <ul className='sub-content'>
            <li>It will be nice for user to have an overview of their ongoing tasks.</li>
            <li>User should be able to see the list of task that is overdue and will be due soon.</li>
            <li>Users should be able to delete, check or assign a task to someone on the project.</li>
          </ul>
          <div className='sub-img'> <img src={TaskOverview} width="100%" height="100%" alt=''/></div>


          {/* Interviews */}
          <div className='the-title'>Interviews</div>
          <div className='the-content'>Before digging into solutions, I advocated conducting user interviews to understand how Spec Nota users currently utilize the platform. I also encouraged other stakeholders to take part in the process to empathize with our users and learn how they interact with Spec Nota step by step.</div>

        {/* Visuals */}
        <div className='the-title'>Visuals</div>
        <div className='the-content-low'>With our research findings and personas in mind, I invited Hafis, Abdul, and other stakeholders to brainstorm solutions together on an online remote session. I moderated these sessions, and before the session, I sent the necessary resources/notes/tasks they should go through to provide solutions to our users' underlying problems.</div>
        <div className='sub-title'>Sketch</div>
        <div className='img-sketch'> <img src={Sketch} width="100%" height="100%" alt=''/></div>
        <div className='sub-title'>Low - Fi</div>
        <div className='img-low-fi'> <img src={LowFi} width="100%" height="100%" alt=''/></div>
        <div className='sub-title'>High - Fi</div>
        <div> <img src={HighFi} width="100%" height="100%" alt=''/></div>

        {/* Visuals */}
        <div className='the-title-top'>Interactive prototype</div>
        <div className='the-content-low'>A well-drafted questionnaire was prepared for the users to fill while testing the solutions to answer and measure to what extent the solutions provided solved their problems.</div>
        {/* <div className='sub-img'> <img src={PrototypeImage} width="100%" height="100%" alt=''/></div> */}
        <div className='video'>
            <ReactPlayer width='100%' height='500px'
            controls loop url='https://www.youtube.com/watch?v=iSAbrtWA0JY' />
        </div>
        

        {/* Hand-off */}
        <div className='the-title-top2'>Hand-off</div>
        <div className='the-content'>This was 100% natural. I prepared a detailed design system that carefully points out all required information on the Figma file.</div>

        {/* Hand-off */}
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
            Hafis Raji - Stake holder <br /> <br />
            Kazeem Oguntade - Product Manager <br /> <br />
            Abdullahi Abodunrin - UX Designer <br /> <br />
            Theo Okafor - Development Lead <br /> <br />
            Ekwugha Andrew - Software Engineer <br /> <br />
            Anthony Nwobodo - Backend Engineer
        </div>
        <div className="next-project">NEXT PROJECT</div>
        <div className='next-project-title'>Ile Wa</div>


      </div>

    </div>
  );
}

export default SpecNota;