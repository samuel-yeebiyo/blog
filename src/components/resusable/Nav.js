import '../../css/nav.css'
import Logo from '../../Asset 1@2x.png'

import { Link } from 'react-router-dom'

const Nav = ()=> {
    return (
        <div className="nav-bar">
            <div className="logo">
                <Link to='/'>
                    <img className="main-logo" src={Logo} alt="logo image" />
                </Link>
            </div>
            <div className="nav-menu">
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>

                    <Link to='/articles'>
                        <li>Articles</li>
                    </Link>
                    
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Nav
