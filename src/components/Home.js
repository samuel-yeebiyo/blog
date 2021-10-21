import Hero from '../components/Hero'

import '../css/home.css'

const Home = () => {
    return (
        <div>
            <Hero/>
            <div className="divider">
                <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        </div>
    )
}

export default Home
