
import Header from './Components/Header/Header.jsx'
import Nav from './Components/Nav/Nav.jsx'
import About from './Components/About/About.jsx'
import Experience from './Components/Experience/Experience.jsx'
import Services from './Components/Services/Services.jsx'
import Portfolio from './Components/Portfolio/Portfolio.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
