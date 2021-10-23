import '../../css/nav.css'

import { Link } from 'react-router-dom'

const Nav = ()=> {
    return (
        <div className="nav-bar">
            <div className="logo">
                <p>Blogs.AM</p>
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
