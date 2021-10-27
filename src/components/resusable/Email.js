import React from 'react'
import '../../css/email.css'

import Image from '../../Dog call@2x.png'

const Email = () => {
    return (
        <div className="Email">
            <p className="email-soon">Coming Soon!</p>
            <div className="email-main">
                <div className="email-illustration">
                    <img className="dog-call" src={Image}/>
                </div>
                <div className="email-info">
                    <p>If you'd like to subscribe to my email newsletter, please leave your email below to receive updates on what I will be writing about and useful tips and tricks.</p>
                    <div className="email-form">
                        <input className="email-input" form="text" placeholder="Email address"/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Email
