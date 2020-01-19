import React from 'react';
import content from './projectContent';
import './project.styles.scss';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: content
    };
  }
  render() {
    const { content } = this.state;
    return (
      <div className='projects-container'>
        <h3>More Projects</h3>
        <div className='project-grid'>
          {content.map((project, idx) => (
            <div className='more-projects' key={idx}>
              <div className='project-inner'>
                <header>
                  <div className='more-project-header'>
                    <div className='folder'>
                      <i className='far fa-folder-open fa-2x' />
                      <a
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ color: 'rgb(10,25,47)' }}
                      >
                        <i className='fab fa-github fa-2x ' />
                      </a>
                      <a
                        href={project.website}
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ color: 'rgb(10,25,47)' }}
                      >
                        <i className='fas fa-external-link-alt fa-2x' />
                      </a>
                    </div>
                  </div>
                  <h5 className='more-project-name'>{project.title}</h5>
                  <p>{project.description}</p>
                </header>
                <footer className='footer'>
                  <ul className='project-tech-list'>{project.tech}</ul>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
