import SpecCover from '../../assets/images/Spec Nota Cover.jpg';

import './spec-nota.css';

function SpecNota({darkMode}) {
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      
      <div className='spec-nota-container'>
          <div className='spec-nota-header'>Spec Nota</div>
          
          <div className='spec-nota-header-brief'>Here is how I helped redesign a project management platform for a smooth, modern and friendly experience.</div>
          
          {/* Cover Image */}
          <div className='spec-cover'> <img src={SpecCover} width="100%" height="100%" alt=''/></div>
         
          {/* Impact and Role */}
          <div className='impact-role'>
              <div className='impact-col'>
                <div className='the-title'>Impact</div>
                <div className='the-content'>The platform was x4 faster than the previous build, which increased client interest in using the platform.</div>
              </div>

              <div className='role-col'>
                <div className='the-title'>Role</div>
                <div className='the-content'>Lead designer, user interview, user research, visual designer, interactive prototype, testing and design system</div>
              </div>
            </div>

      </div>

    </div>
  );
}

export default SpecNota;