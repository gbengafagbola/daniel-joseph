import Helmet from 'react-helmet';
import { useNavigate } from 'react-router-dom';

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

            <div className='error-icon'>🙋🏽‍♂️</div>

            <div className='error-title'>Oops! You are in a wrong page.</div>

            <div className="abeg">Abeg</div>
            <div className='go-home' onClick={() => {navigate("/");}}>Go to Home Page</div>
        </div>



  
      </div>
    );
  }




export default ErrorPage;