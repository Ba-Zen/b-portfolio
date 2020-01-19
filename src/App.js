import React from 'react';
import Menu from './components/menu/menu.component';
import Landing from './components/landing/landing.component';
import AboutMe from './components/about-me/about-me.component';

function App() {
  return (
    <div className='App'>
      <Menu />
      <Landing />
      <AboutMe />
    </div>
  );
}

export default App;
