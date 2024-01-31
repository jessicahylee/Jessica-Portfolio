import './header.scss'
import './partials/fonts.scss'
import { Link } from 'react-scroll'

function Header() {
  return (
    <div className="header__container-div">
      <div className="header__container-div-logo">
        <Link to="/" spy={true} smooth={true} offset={-50} duration={500}>
          <h3 className="header__container-div-logo-image"> Jessica Lee </h3>
        </Link>
      </div>
      <div className="header__container-paragraphs">
        <div className="header__container-paragraph">Projects</div>
        <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>
          <div className="header__container-paragraph">About</div>
        </Link>

        <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
          <div className="header__container-paragraph">Contact</div>
        </Link>
        <Link to="Services" spy={true} smooth={true} offset={-50} duration={500}>
         <div className="header__container-paragraph">Services</div>
        </Link>
        
      </div>
    </div>
  )
}

export default Header
