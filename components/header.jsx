import './header.scss'

function Header() {
  return (
    <div className="header__container-div">
      <div className="header__container-logo">
     <h3 className="header__container-image" > Jessica Lee </h3>
      </div>
      <div className="header__container-paragraphs">
      <div className="header__container-paragraph">
          Login{' '}
      </div>
      <div className="header__container-paragraph">
          Profile
      </div>
      <div className="header__container-paragraph">
       Form 
      </div>
      </div>
    </div>
  )
}

export default Header