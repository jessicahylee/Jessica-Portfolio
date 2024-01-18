import './languages.scss'
import './partials/fonts.scss'
import react from './assets/React-icon.svg.png'
import JS from './assets/JavaScript-logo.png'
import HTML from './assets/HTML5_logo_and_wordmark.svg.png'
import CSS from './assets/CSS3_logo_and_wordmark.svg.png'
import sass from './assets/sass.png'
import stelve from './assets/stelvelogo.png'
import angular from './assets/Angular_full_color_logo.svg.png'
import bootscrap from  './assets/Bootstrap_logo.svg.png'
import nodejs from './assets/Node.js_logo.svg.png'

function Languages() {
  return (
    <div className="languages__div">
    <div className="languages__div-react">
      <img className="" src={react} alt="React" width="30px;" />
    </div>
    <div className="languages__div-JS">
      <img className="" src={JS} alt="JavaScript" width="30px;" />
    </div>
     <div className="languages__div-HTML">
      <img className="" src={HTML} alt="HTML5" width="33px;" />
    </div>
     <div className="languages__div-CSS">
      <img className="" src={CSS} alt="CSS5" width="24px;" />
    </div>
    <div className="languages__div-sass">
      <img className="" src={sass} alt="saSS" width="36px;" />
    </div>
    <div className="languages__div-stelve">
      <img className="" src={stelve} alt="Stelve" width="28px;" />
    </div>
      <div className="languages__div-angular">
      <img className="" src={angular} alt="CSS5" width="38px;" />
    </div>
      <div className="languages__div-bootscrap">
      <img className="" src={bootscrap} alt="Bootscrap" width="38px;" />
    </div>
     <div>
      <img className="" src={nodejs} alt="nodeJs" width="50px;" />
    </div>
    </div>
  )
}

export default Languages
