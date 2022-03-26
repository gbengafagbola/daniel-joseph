import './introduction.css';
import {ReactComponent as MoonSvg} from '../../assets/svg/moon.svg';
import {ReactComponent as RocketSvg} from '../../assets/svg/rocket.svg';

export default function Introduction() {
    return (
        <div>
            <div className="main-intro">
                <div className="greetings"> HI 👋🏽, MY NAME IS <span> DANIEL JOSEPH</span> </div>
                <div className="description">
                    Product Design Lead at Yokunbo Studios(US), I was previously at eSoft Response(UK). Through curiosity, innovation and product strategy, I create enjoyable and intuitive user-centered design interfaces with an emphasis on visuals, interaction, design systems, and creative direction to aid accomplish business and user goals.
                </div>

                <MoonSvg  className="moon"/>
                <RocketSvg className="rocket"/>
                
                <div className="icon-scroll"></div>  
            </div>
        </div>
    )
}