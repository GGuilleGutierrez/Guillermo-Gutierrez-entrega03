import './App.css';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import BtnsProjects from './components/Projects/BtnsProjects';
import ExperienceMob from './components/Experience/ExperienceMob/ExperienceMob';
import ExperienceDesk from './components/Experience/ExperienceDesk/ExperienceDesk';
import Certificates from './components/Certificates/Certificates';

function App() {

  return (
    <div className='body'>
       <div className="header&experience">
          <Header />
          <ExperienceDesk />
       </div>
       <div className="skills-projects">
          <Skills />
          <BtnsProjects />
       </div>
      <ExperienceMob />
      <Certificates />
    </div>
  )
}

export default App
