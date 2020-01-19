import React from 'react';
import { bubble as HamburgerMenu } from 'react-burger-menu';
import Social from '../social/social';
import './menu.styles.scss';
import logo from '../images/B-alt.png';
//import Social from '../social/social';

class Menu extends React.Component {
  state = {
    selected: ''
  };

  showSettings(event) {
    event.preventDefault();
  }

  select = e => {};

  render() {
    const selected = this.state.selected;
    return (
      <>
        <HamburgerMenu
          right
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        >
          <a
            className='menu-item'
            href='#about'
            active={selected === 'about' ? true : false}
            onClick={this.select}
          >
            About
          </a>
          <a
            className='menu-item'
            href='#skills'
            active={selected === 'skills' ? true : false}
            onClick={this.select}
          >
            Skills
          </a>
          <a
            className='menu-item'
            href='#experience'
            active={selected === 'experience' ? true : false}
            onClick={this.select}
          >
            Projects
          </a>
          <a
            className='menu-item'
            href='#contact'
            active={selected === 'contact' ? true : false}
            onClick={this.select}
          >
            Contact
          </a>
          <a
            className='menu-item'
            href='/resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            Resume
          </a>
        </HamburgerMenu>
        <div className='nav-container'>
          <img src={logo} alt='letter B logo' className='logo' />
          <a
            className='menu-item'
            href='#about'
            active={selected === 'about' ? true : false}
            onClick={this.select}
          >
            About
          </a>
          <a
            className='menu-item'
            href='#skills'
            active={selected === 'skills' ? true : false}
            onClick={this.select}
          >
            Skills
          </a>
          <a
            className='menu-item'
            href='#experience'
            active={selected === 'experience' ? true : false}
            onClick={this.select}
          >
            Projects
          </a>
          <a
            className='menu-item'
            href='#contact'
            active={selected === 'contact' ? true : false}
            onClick={this.select}
          >
            Contact
          </a>
          <a
            className='menu-item'
            href='/resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            Resume
          </a>

          <Social />
        </div>
      </>
    );
  }
}

export default Menu;
