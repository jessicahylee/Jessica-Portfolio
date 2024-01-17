import { Link, Element } from 'react-scroll'
import './services.scss'
import './partials/fonts.scss'

function Services() {
  return (
    <div className="services-div ">
      <Link
        to="services"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      ></Link>

      <Element name="services" className="services__container-div">
        <div className="services__container-div-title">
          <h2 className="services__container-div-title-serv">Services</h2>
        </div>

        <div className="services__container-div-first">
          <div className="services__container-div-sf">
            <h4 className="services__container-div-sf-title">
              Software Engineering
            </h4>
            <p className="services__container-div-sf-paragraph">
              This is just a really nice site. And, while Rob isnt presenting
              himself as a software engineer, he is showing a diverse range of
              skills beyond simply coding. His blog provides insights into his
              teaching, communications, and technical system design skills.
            </p>
          </div>

          <div className="services__container-div-seo">
            <h4 className="services__container-div-seo-title">SEO</h4>
            <p className="services__container-div-seo-paragraph">
              This is just a really nice site. And, while Rob isnt presenting
              himself as a software engineer, he is showing a diverse range of
              skills beyond simply coding. His blog provides insights into his
              teaching, communications, and technical system design skills.
            </p>
          </div>

          <div className="services__container-div-google">
            <h4 className="services__container-div-google-title">Google Ads</h4>
            <p className="services__container-div-google-paragraph">
              This is just a really nice site. And, while Rob isnt presenting
              himself as a software engineer, he is showing a diverse range of
              skills beyond simply coding. His blog provides insights into his
              teaching, communications, and technical system design skills.
            </p>
          </div>
        </div>
      </Element>
    </div>
  )
}

export default Services
