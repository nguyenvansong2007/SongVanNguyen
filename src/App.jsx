import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects'
import './App.css';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Conatact'
import Footer from './sections/Footer/Footer';
function App  () {
  return (
    <div>
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App