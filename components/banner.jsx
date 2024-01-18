import './banner.scss'
import './partials/fonts.scss'
import linkedin from './assets/linkedin.svg'
import github from './assets/github.svg'
import jessica from './assets/jessy.png'

function Banner() {
  return (
    <div className="banner__container-div">
      <div className="banner__container-title-div">
        <h2 className="banner__container-title">Front End Developer</h2>
        <p className="banner__container-title1">
          Junior Frontend Developer passionate about minimal designs and coffee.
        </p>

        <div className="banner__container-icons-div">
          <ul className="banner__container-icons-div-link">
            <a className="banner_link"href=" https://www.linkedin.com/in/jessicahylee/">
              <img
                className="banner__container-img"
                src={linkedin}
                width="20px"
                alt="LinkedIn"
              />
            </a>
            <a href="https://github.com/jessicahylee ">
              <img
                className="banner__container-img"
                src={github}
                width="20px"
                alt="GitHub"
              />
            </a>
          </ul>
        </div>
      </div>

      <div className="banner__container-image-div">
        <img
          className="banner__container-picture"
          src={jessica}
          // width="auto"
          alt="Jessica"
        />
      </div>
    </div>
  )
}

export default Banner
