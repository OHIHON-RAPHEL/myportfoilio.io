import {Link} from 'react-router-dom'
import logo from '../images/logo.jpg'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className="logo">
                    <img src={logo} alt="footer Logo" />
                </Link>
                <p>the boy is good boy</p>
                <div className="footer__socials">
                    <a href="https://linkedin.com" target="_blank" rel='noreferrer noopener'>
                        <FaLinkedin/>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel='noreferrer noopener'>
                        <FaFacebookF/>
                    </a>
                    <a href="https://twiiter.com" target="_blank" rel='noreferrer noopener'>
                        <AiOutlineTwitter/>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel='noreferrer noopener'>
                        <AiFillInstagram/>
                    </a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallary">Gallary</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FaAQs</Link>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/contact">Contact us</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2023 RAPH KING &copy; All Rights Reversed</small>
        </div>
    </footer>
  )
}

export default Footer
