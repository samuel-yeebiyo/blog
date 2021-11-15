import '../../css/card.css'

import { Link } from "react-router-dom"


const Card = ({ path, image, title, description, date}) => {

    console.log(new Date(date).toDateString())

    return (
        <div className="Card">
            <Link to={`${path}`} className="link">
                <div className="card-image" style={{background:`url(${image})`, objectFit:"contain", backgroundSize:"cover"}}>
                </div>
                <div className="card-description">
                    <div className="desc">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div><div className="card-date">
                        <p>{new Date(date).toDateString()}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card
