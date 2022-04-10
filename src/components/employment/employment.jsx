import {ReactComponent as Arrow} from '../../assets/svg/Arrow.svg';
import {ReactComponent as SideArrow} from '../../assets/svg/side-arrow.svg';
import './employment.css'



export default function Employment() {
    return (
        <div className="employment-container">
            <div className='work-title'>Work <br /> Summary</div>

            <div className='experience'>   
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


            <div className='my-resume'> my resume <Arrow className='arrow'/></div>


            <div className='work-title'>Learning & <br /> Education</div>

            <div className='experience'>  
                <div className='job-title'>Product Designer - Udacity
                  <div className='time-spent'>2021</div>
                </div>
                <div className='job-title'>Chemistry Education, University of Port Harcourt
                  <div className='time-spent'>2015 - 2021</div>
                </div>
            </div>


            <div className='work-title'>beyond product <br /> design, I love <br /> teaching</div>
            <div className='space'></div>

            <div className='work-title'>I’ve got different playlist depending on my mood</div>
            <div className='request'>MAKE A REQUEST FOR MY PLAYLIST  <SideArrow className='side-arrow'/></div>

            <div className='work-title'>I also write</div>

            <div className='write-up'>
              <div className='write-container1'>
                <div className='write-title'>Tech  Beginner? It’s Cloudy</div>
                <div className='write-content'>It can be confusing at first where to start your career in tech. This is not a now issue, most people who are don in their field also have passed thro...</div>
                <div className='read-more'>READ MORE<SideArrow className='side-arrow'/></div>

              </div>

              <div className='write-container2'>
                <div className='write-title'>Pick it up. Live in the moment.</div>
                <div className='write-content'>Most persons have struggled with living in the moment just because they’ve carried the worlds burden on themselves. Carry this burden ... </div>
              <div className='read-more'>READ MORE<SideArrow className='side-arrow'/></div>
              </div>
            </div>

            <div className='shy'>DON’T BE SHY. <br /> HAVE YOU GOT AN AMAZING AND EXCITING PROJECTS?</div>

            <div className='my-resume'>Get in touch<Arrow className='arrow'/></div>

        </div>  
    )
  }
  