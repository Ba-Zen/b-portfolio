import React from 'react';
import content from '../content/content';

import './experience.styles.scss';

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: content
    };
  }
  render() {
    const { content } = this.state;
    return (
      <div>
        <div className='featured-container'>
          <a name='experience' href='#experience' style={{ opacity: 0 }}>
            .
          </a>
          <h3>Projects I've Built</h3>
          {content.map((project, idx) => (
            <div className='project' key={idx}>
              <div className='content-container'>
                <h4>Featured Project</h4>
                <h5>{project.title}</h5>
                <div className='project-description'>{project.description}</div>
                <ul className='tech-list'>{project.tech}</ul>
                <div className='links'>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-github  fa-2x' />
                  </a>
                  <a
                    href={project.website}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fas fa-external-link-alt fa-2x' />
                  </a>
                </div>
              </div>
              <div className='image-container'>
                <img src={project.img} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Experience;
