import '../../css/card.css'

import { Link } from "react-router-dom"


const Card = ({ path, image, title, description, date}) => {
    return (
        <div className="Card">
            <Link to={`${path}`} className="link">
                <div className="card-image" style={{background:`url(http://192.168.10.159:5000/${image})`, objectFit:"contain", backgroundSize:"cover"}}>
                </div>
                <div className="card-description">
                    <p>{title}</p>
                    <p>{description}</p>
                    <p>{date}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card
