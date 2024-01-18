import { Link, Element } from 'react-scroll'
import './about.scss'
import './partials/fonts.scss'

function About() {
  return (
    <div>
      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      ></Link>

      <Element name="about" className="about_me-div">
        <h1 className="about_me-div-title">About</h1>
        <p className="about_me-div-paragraph">
          The rise of sustainable technology signifies a pivotal shift in the
          global landscape. From renewable energy solutions to eco-friendly
          innovations, the pursuit of a greener future is reshaping industries,
          fostering environmental stewardship, and inspiring a collective
          commitment to address pressing ecological challenges. The rise of
          sustainable technology signifies a pivotal shift in the global
          landscape. From renewable energy solutions to eco-friendly
          innovations, the pursuit of a greener future is reshaping industries,
          fostering environmental stewardship, and inspiring a collective
          commitment to address pressing ecological challenges.{' '}
        </p>
        <div className="about_me-div-button">
        
          <a className="about_me-div-cv" href="'./assets/Jessica_Lee 2.docx.pdf" download>
            {' '}
            Download my CV {' '}
          </a>
        </div>
      </Element>
    </div>
  )
}

export default About
