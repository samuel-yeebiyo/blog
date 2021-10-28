import '../css/about.css'

import HeroImg from '../about-img.jpg'

const About = () => {
    return (
        <div className="About">
            <div className="about-me">
                <div className="me-content">
                    <div>
                    </div>
                    <p> My name is Samuel Yeebiyo, I am a CS student in my final year of my undergraduate program. For the most part I would consider myself a self-taught web developer but I still haven't shaken off my imposter syndrome just yet. Like most self-taught programmers these days, I am beholden to many content creators on YouTube and other platforms that have extensive libraries full of tutorials.</p>
                </div>
            </div>
            <div className="about-blogs">
                <h2>About My Blogs</h2>
                <p>This website is meant to be a collection of bits of information I have found over the course of my programming journey that I think might be useful to other fellow programmers. I wanted to be able to document and keep a record of things that I have learned from all over the internet. Although I do understand the concept of being a self-taught developer, I prefer to think of having quite a lot of teachers on the internet that I can't directly interact with haha. The ease of access that we have to information in today's world is unprecedented and there may be so much free content out there to learn from but the time and effort that content creators put in to deliver them shouldn't go unrecognized. I want to be able to do the same and use some of my time and energy to put my mark out there and hopefully help a few people understand something they couldn't understand before, learn something new, or even just consolidate what they already know.</p>
            </div>
            <div className="about-content">
                <h2>Things I Write About 🖋</h2>
                <div>
                    <p>Front End</p>
                    <p>Vanilla JavaScript</p>
                    <p>Node JS</p>
                </div>
                <div>
                    <p>Back End</p>
                    <p>JavaScript Frameworks</p>    
                </div>
                <div>
                    <p>Programming Patterns</p>
                    <p>React JS</p>
                    <p>Deployment</p>
                </div>
                <div>
                    <p>Netlify</p>
                    <p>Heroku</p> 
                </div>
                <div>
                    <p>And more...</p>
                </div>
            </div>
        </div>
    )
}

export default About
