
import './banner.scss';
import './partials/fonts.scss';
import linkedin from './assets/linkedin.svg';
import github from './assets/github.svg'
import jessica from './assets/picture.jpeg'

function Banner() {
  return (
    <div className="banner__container-div">
     
      <div className="banner__container-title-div">
        <h2 className="banner__container-title">Front-End-Developer</h2>
        <p className="banner__container-about">Im Jessica, a passionate Front-end-Developer based in Canada</p>
      
      {/* <div className="banner__container-icons-div"> */}
        <img className="banner__container-img"src={linkedin} width="20px"alt="LinkedIn" />
        <img className="banner__container-img"src={github} width="20px" alt="GitHub"/>
      {/* </div> */}
      </div>
     
      <div className="banner__container-image-div">
       <img className="banner__container-picture"src={jessica} width="100px" alt="Jessica"/>
       </div>
     
    </div>
  );
}

export default Banner;
