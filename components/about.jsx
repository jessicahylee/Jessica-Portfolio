import './about.scss'
import './partials/fonts.scss'

function About() {
  return (
    <div className="about_me-div">
      <h1 className="about_me-div-title">About:</h1>
      <p className="about_me-div-paragraph">
        {' '}
     Heres a brief 400-character description about the importance
        of continuous learning in the field of technology: In the rapidly
        evolving landscape of technology, embracing continuous learning is not
        merely a choice but a necessity. With innovations emerging incessantly,
        staying current ensures professionals remain adept at the forefront of
        their fields. Its an ongoing journey, fostering adaptability,
        resilience, and a mindset primed for innovation—essential ingredients
        for success in todays dynamic tech-driven world.
      </p>
      <div className="about_me-div-button">
      <button className="about_me-div-cv"> Download my CV </button>
      </div>
    </div>
  )
}

export default About
