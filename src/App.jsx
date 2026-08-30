import Navbar from './component/navbar.jsx';
import Hero from './sections/hero.jsx';
import About from './sections/about.jsx';
import Skills from './sections/skills.jsx';
import Projects from './sections/projects.jsx';
import Contact from './sections/contact.jsx';
import Footer from './sections/footer.jsx';
import SectionDots from './component/sectiondots.jsx';

function App() {
  return (
  <>
    <Navbar />
    <Hero  />
    <About />
    <Skills />
    <Projects/>
    <Contact/>
    <Footer/>
    <SectionDots sections={[
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
]} />
  </>
  );
}
export default App;
