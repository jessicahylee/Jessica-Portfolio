
import './banner.scss';
import './partials/fonts.scss';
import linkedin from './assets/linkedin.svg';
import github from './assets/github.svg'
import jessica from './assets/picture.jpeg'

function Banner() {
  return (
    <div className="banner__container-div">
     
      <div className="banner__container-title-div">
        <h2>Front-End-Developer</h2>
        <p>Im Jessica, a passionate Front-end-Developer based in Canada</p>
      
      {/* <div className="banner__container-icons-div"> */}
        <img src={linkedin} width="30px"alt="LinkedIn" />
        <img src={github} width="30px" alt="GitHub"/>
      {/* </div> */}
      </div>
     
      <div className="banner__container-image-div">
       <img src={jessica} width="100px" alt="Jessica"/>
       </div>
     
    </div>
  );
}

export default Banner;
