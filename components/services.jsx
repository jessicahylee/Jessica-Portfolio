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
            <h4 className="services__container-div-sf-title">Software Dev.</h4>
            <p className="services__container-div-sf-paragraph">
              I create software tailored to unique business needs web, mobile,
              desktop solutions. Expert in efficient database design, ensuring
              optimal data handling. Simplifying complexities for seamless user
              experiences
            </p>
          </div>

          <div className="services__container-div-seo">
            <h4 className="services__container-div-seo-title">SEO</h4>
            <p className="services__container-div-seo-paragraph">
              SEO boosts visibility, drives organic traffic, and optimizes
              rankings. For small businesses, its a potent tool, enhancing
              online presence, establishing credibility, and fostering growth.
            </p>
          </div>

          <div className="services__container-div-google">
            <h4 className="services__container-div-google-title"> Ads</h4>
            <p className="services__container-div-google-paragraph">
              Ads amplify your message, showcasing exceptional products.
              Strategically targeting ensures reaching potential customers who
              may not discover offerings organically. The synergy of remarkable
              products, engaging content, and strategic advertising drives
              traffic, boosts brand visibility, fostering business success in
              the digital landscape
            </p>
          </div>
        </div>
      </Element>
    </div>
  )
}

export default Services
