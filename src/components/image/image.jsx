import './image.css'
import DjImage from '../../assets/images/dj.jpg';


export default function Image() {
    return (
        <div className="image-container">
            <div className="image">
                <img src={DjImage} width="100%" height="100%" alt="" />
            </div>
        </div>  
    )
  }
  