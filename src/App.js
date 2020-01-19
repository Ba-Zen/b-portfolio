import React from 'react';
import './App.scss';
import Menu from './components/menu/menu.component';
import Landing from './components/landing/landing.component';
import AboutMe from './components/about-me/about-me.component';
import Skills from './components/skills/skills.component';
import Experience from './components/experience/experience.component';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Menu />
        <Landing />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
