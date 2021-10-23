import Hero from '../components/Hero'
import Latest from './Latest'

import '../css/home.css'

const Home = ({meta}) => {
    return (
        <div className="Home">
            <Hero/>
            <div className="divider">
                <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
            <Latest meta={meta}/>
        </div>
    )
}

export default Home
