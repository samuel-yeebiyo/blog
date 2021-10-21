import '../css/hero.css'
import Illustration from '../Introduction@2x.png'

const Hero = () => {
    return (
        <div className="Hero">
            <div className="hero-intro">
                <h3>Hi There!👋</h3>
                <br/>
                <p>As a passionate aspiring developer, I decided to start this blog to document my experience and little findings that could also help other life-long learners like me.
                    <br/><br/>
                I am in no way an experienced expert but I hope I can impart some of my knowledge to someone out there that is looking for answers.</p>
            </div>
            <div className="hero-illustration">
                <img className="person" src={Illustration}></img>
                <div className="circle"></div>
            </div>
        </div>
    )
}

export default Hero
