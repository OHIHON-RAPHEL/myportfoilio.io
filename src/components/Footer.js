
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'
import { FaLinkedin, FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 mt-28 pt-28 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo & Social */}
        <article className="flex flex-col items-start gap-4">
          <Link to="/" className="mb-2 w-24 sm:w-28">
            <img src={logo} alt="footer Logo" className="block w-full" />
          </Link>
          <p className="text-gray-400">the boy is good boy</p>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-gray-100 p-2 rounded-lg border border-transparent hover:border-gray-100 hover:bg-transparent transition"
            >
              <FaLinkedin className="text-gray-600 text-lg" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-gray-100 p-2 rounded-lg border border-transparent hover:border-gray-100 hover:bg-transparent transition"
            >
              <FaFacebookF className="text-gray-600 text-lg" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-gray-100 p-2 rounded-lg border border-transparent hover:border-gray-100 hover:bg-transparent transition"
            >
              <AiOutlineTwitter className="text-gray-600 text-lg" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-gray-100 p-2 rounded-lg border border-transparent hover:border-gray-100 hover:bg-transparent transition"
            >
              <AiFillInstagram className="text-gray-600 text-lg" />
            </a>
          </div>
        </article>

        {/* Permalinks */}
        <article className="flex flex-col items-start gap-2">
          <h4 className="text-white font-semibold mb-2">Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallary">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>

        {/* Insights */}
        <article className="flex flex-col items-start gap-2">
          <h4 className="text-white font-semibold mb-2">Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>

        {/* Contact */}
        <article className="flex flex-col items-start gap-2">
          <h4 className="text-white font-semibold mb-2">Get in Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-20 text-center py-6 text-gray-500 text-xs sm:text-sm">
        <small>2023 RAPH KING &copy; All Rights Reversed</small>
      </div>
      
    </footer>
  )
}

export default Footer
