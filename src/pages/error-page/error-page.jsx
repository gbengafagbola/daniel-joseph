import Helmet from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import 'animate.css'

import './error-page.css';

function ErrorPage({darkMode}) {
  let navigate = useNavigate();
    return (
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Helmet>
          <title>Oops! - Daniel Joseph</title>
          <meta
            name="description"
            content="Oops, this page can't be found"
          />
        </Helmet>
      
        <div className='error-container'>

            <div className='error-icon animate__animated animate__fadeInUp'>🙋🏽‍♂️</div>

            <div className='error-title animate__animated animate__fadeInUp'>Oops! You are in a wrong page.</div>

            <div className="abeg animate__animated animate__fadeInUp">Abeg</div>
            <div className='go-home animate__animated animate__fadeInUp' onClick={() => {navigate("/");}}>Go to Home Page</div>
        </div>



  
      </div>
    );
  }




export default ErrorPage;