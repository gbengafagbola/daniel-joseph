// import {ReactComponent as Arrow} from '../../assets/svg/Arrow.svg';
// import {ReactComponent as SideArrow} from '../../assets/svg/side-arrow.svg';
import { useNavigate } from 'react-router-dom';

import './employment.css'



export default function Employment() {

  let navigate = useNavigate();

    return (
        <div className="employment-container">
            <div className='work-title animate__animated animate__fadeInUp'>Work <br /> Summary</div>

            <div className='experience animate__animated animate__fadeInUp'>   
                <div className='job-title'>Product Designer - Yokunbo Studios, US
                  <div className='time-spent'>2021 - Present</div>
                </div>
                <div className='job-title'>Freelancing - Designer (Brand and Product)
                  <div className='time-spent'>2016 - Present</div>
                </div>
                <div className='job-title'>UX/UI Designer - eSoft Response, UK
                  <div className='time-spent'>2020 - 2021</div>
                </div>    
                 <div className='job-title'>Visual Designer - Birthday Match Finder
                  <div className='time-spent'>2018 - 2019</div>
                </div>      
            </div>


            <div className='my-resume oover animate__animated animate__fadeInUp'>view my resume</div>


            <div className='work-title animate__animated animate__fadeInUp'>Learning & <br /> Education</div>

            <div className='experience animate__animated animate__fadeInUp'>  
                <div className='job-title'>Product Designer - Udacity
                  <div className='time-spent'>2021</div>
                </div>
                <div className='job-title'>Chemistry Education, University of Port Harcourt
                  <div className='time-spent'>2015 - 2021</div>
                </div>
            </div>


            <div className='work-title animate__animated animate__fadeInUp'>beyond product <br /> design, I love teaching</div>
            <div className='space'></div>

            <div className='work-title animate__animated animate__fadeInUp'>I’ve got different playlist depending on my mood</div>
            <div className='request oover animate__animated animate__fadeInUp'>
                  MAKE A REQUEST FOR MY PLAYLIST 
                  {/* <SideArrow className='side-arrow'/> */}
            </div>

            <div className='work-title animate__animated animate__fadeInUp'>I also write</div>

            <div className='write-up animate__animated animate__fadeInUp'>
              <div className='write-container1 oover' onClick={() => window.open('https://dharnyz.hashnode.dev/an-hack-to-building-product-design')}>
                <div className='write-title'>An Hack to Building Product (Design)</div>
                <div className='write-content'>Building a Product is not an easy task. I have experienced this in different scenarios and I have been able to put down some things I ...</div>
                <div className='read-more'>
                      READ MORE
                    {/* <SideArrow className='side-arrow'/> */}
                </div>
              </div>

              <div className='write-container2 oover'>
                <div className='write-title'>Pick it up now. Live in the moment.</div>
                <div className='write-content'>Most persons have struggled with living in the moment just because they’ve carried the worlds burden on themselves. Carry this burden ... </div>
                    <div className='read-more'>
                        READ MORE
                        {/* <SideArrow className='side-arrow'/> */}
                    </div>
              </div>
            </div>

            <div className='shy animate__animated animate__fadeInUp'>DON’T BE SHY. <br /> HAVE YOU GOT AN AMAZING AND EXCITING PROJECTS?</div>

            <div className='get-in-touch oover animate__animated animate__fadeInUp'>Get in touch</div>

        </div>  
    )
  }
  