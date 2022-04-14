import Helmet from 'react-helmet';

import './error-page.css';

function ErrorPage({darkMode}) {
    return (
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Helmet>
          <title>Oops! - Daniel Joseph</title>
          <meta
            name="description"
            content="Some project I have worked on"
          />
        </Helmet>
      
        



  
      </div>
    );
  }




export default ErrorPage;