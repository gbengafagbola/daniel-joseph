import './image.css'
import DjImage from '../../assets/images/dj.jpg';
import 'animate.css'


export default function Image() {
    return (
        <div className="image-container">
            <div className="image animate__animated animate__fadeInUp">
                <img src={DjImage} width="100%" height="100%" alt="" />
            </div>
        </div>  
    )
  }
  