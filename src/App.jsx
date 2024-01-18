import Banner from '../components/banner'
import Header from '../components/header'
import About from '../components/about'
import Services from '../components/services'
import Contact from '../components/contact'
import Languages from '../components/languages'
import Footer from '../components/footer'

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Languages />
      <About />
      <Services />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
