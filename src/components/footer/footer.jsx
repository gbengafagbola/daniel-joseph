import './footer.css'


export default function Footer({darkMode}) {
  const year = new Date().getFullYear();
    return (
      <div  className={darkMode ? "dark-mode" : "light-mode"}>

      
      <div className="footer-container">

          <div className='contribute'>WANT TO WORK ON A PROJECT?</div>



          <div className='email oover' onClick={() => window.open('mailto:josephodaniel19@gmail.com?subject=Let%27s Chat!')}>josephodaniel19@gmail.com</div>


          <div className='line'></div>

          <div className="bottom-footer">
               
            <div className="copyright">
            Made with ❤️ by Daniel Joseph. {year}
            </div>


                <ul className="social-icons">
                  <li className="socials oover" onClick={() => window.open('https://linkedin.com/in/holuwadharnyz')}><div> LINKEDIN</div></li>
                  <li className="socials oover" onClick={() => window.open('https://www.behance.net/josephdaniel1')}><div>BEHANCE</div></li>
                  <li className="socials oover" onClick={() => window.open('https://twitter.com/_oladesignmayor')}><div>TWITTER</div></li>
                </ul>       

          </div>

      </div>
    </div>
    )
}