import {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../images/logo.jpg'
import {links} from '../data'
import {FaBars} from 'react-icons/fa'
import {MdClose} from 'react-icons/md'
import "./navbar.css"

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false)
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='logo'>
                <img src={logo} alt="Nav Logo" />
            </Link>
            <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
                {
                    isNavShowing ? <MdClose /> : <FaBars />
                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar
