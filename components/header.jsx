import './header.scss'
import './partials/fonts.scss'

function Header() {
  return (
    <div className="header__container-div">
      <div className="header__container-logo">
        <h3 className="header__container-image"> Jessica Lee </h3>
      </div>
      <div className="header__container-paragraphs">
        <div className="header__container-paragraph">Home</div>
        <div className="header__container-paragraph">About</div>
        <div className="header__container-paragraph">Projects</div>
          <div className="header__container-paragraph">Contact</div>
      </div>
    </div>
  )
}

export default Header
