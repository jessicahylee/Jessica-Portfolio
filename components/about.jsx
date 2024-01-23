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
          Hello, Im Jessica, a recent graduate from Brainstation with a diploma
          in software engineering. My passion lies in designing minimal and
          practical tools that offer an easy and intuitive user experience.
          Drawing parallels between coding and learning languages, Ive developed
          a natural connection to code, enabling me to communicate effectively
          across multiple programming languages. Over the past five years, I
          have immersed myself in the technology world, gaining valuable
          experience in SEO and Ads. In addition to successfully managing these
          aspects for my own small business, Ive also contributed to the growth
          and success of other businesses.
        </p>
        <div className="about_me-div-button">
          <a
            className="about_me-div-cv"
            href="./assets/JessicaLee 2.docx.pdf"
            download
          >
            {' '}
            Download my CV{' '}
          </a>
        </div>
      </Element>
    </div>
  )
}

export default About
