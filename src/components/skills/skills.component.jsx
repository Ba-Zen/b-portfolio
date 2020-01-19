import React from 'react';
import './skills.styles.scss';
//import GraphQl from './GraphQL.png';

const Skills = () => {
  return (
    <>
      <div className='skills-container'>
        <a name='skills' href='#skills' style={{ opacity: 0 }}>
          .
        </a>
        <h3>Skills</h3>
        <div className='skills'>
          <div>
            <i className='fab fa-html5' />
            <p>HTML</p>
          </div>
          <div>
            <i className='fab fa-css3-alt' />
            <p>CSS</p>
          </div>
          <div>
            <i className='fab fa-react' />
            <p>React</p>
          </div>
          <div>
            <i className='fab fa-react' />
            <p>Redux</p>
          </div>
          <div>
            <i className='fab fa-node' />
            <p>Node.js</p>
          </div>
          <div>
            <i className='fab fa-node' />
            <p>Express.js</p>
          </div>
          <div>
            <i className='fab fa-node' />
            <p>Knex.js</p>
          </div>
          <div>
            <i className='fas fa-database' />
            <p>RDMS</p>
          </div>
          <div>
            <i className='fas fa-database' />
            <p>PostgreSQL</p>
          </div>
          <div>
            <i className='fab fa-python' />
            <p>Python</p>
          </div>
          <div>
            <i className='fab fa-sass' />
            <p>SASS</p>
          </div>
          <div>
            <i className='fab fa-less' />
            <p>LESS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
