import Banner from '../components/banner';
import Header from '../components/header';
import About from '../components/about';
import Contact from '../components/contact';
import Languages from '../components/languages';
import Footer from '../components/footer';
import Services from '../components/services';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Languages />
      <About />
      <Contact />
      <Services/>
      <Footer />
    </div>
  );
}

export default App;




// import Banner from '../components/banner'
// import Header from '../components/header'
// import About from '../components/about'
// import Contact from '../components/contact'
// import Languages from '../components/languages'
// import Footer from '../components/footer'
// import Services from '../components/services'
// import { BrowserRouter as Routes, Route }  from 'react-router-dom'

// function App() {
//   return (
//     <div>
//       <Header />
//       <Banner />
//       <Languages />
//       <About />
//       <Contact />
//        <Routes>
//       <Route path="/Services" element={<Services/>} />
//     </Routes>
//       <Footer/>
//     </div>
//   )
// }

// export default App
