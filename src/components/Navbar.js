
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/logo.jpg'
import { links } from '../data'
import { FaBars } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)

  return (
    <nav className="w-full p-5">
      <div className="container mx-auto h-full flex justify-between items-center relative px-4">
        <Link to="/" className="mr-auto w-28">
          <img src={logo} alt="Nav Logo" className="block w-[50px]" />
        </Link>

        {/* Desktop Navigation Links */}
        <ul
          className={`hidden md:flex gap-14 items-center transition-all duration-300 ease-in-out`}
        >
          {links.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? ' font-medium'
                    : 'transition duration-300 hover:text-[#ffb116]'
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Links */}
        <ul
          className={`absolute top-20 right-0 w-[170px] bg-white p-5 z-10 flex flex-col gap-4 items-center transition-all duration-300 ease-in-out transform ${isNavShowing ? 'flex' : 'hidden'}`}
        >
          {links.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? ' font-medium'
                    : 'transition duration-300 hover:text-[#ffb116]'
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-2xl absolute right-4"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <MdClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar

