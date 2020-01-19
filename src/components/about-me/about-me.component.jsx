import React from 'react';
import mug from '../images/mug.jpg';

import './about-me.styles.scss';

const AboutMe = () => {
  return (
    <div className='about-container'>
      <a name='about' href='#about' style={{ opacity: 0 }}>
        .
      </a>
      <h3>About Me</h3>
      <div className='flex-container'>
        <div className='about-content-container'>
          <p>
            {' '}
            Before I became a software engineer, I was an entrepreneur that
            dabbled in digital marketing consulting before I ran two
            dropshipping businesses. I decided I wanted a hard skill that I
            could compound that also made sense for the future of society and
            technology at large. Software engineering stood out to me because I
            could combine my creativity with my passion for building and problem
            solving.{' '}
          </p>
          <p>
            I decided to attend{' '}
            <a
              href='https://lambdaschool.com/courses/full-stack-web-development'
              target='_blank'
              rel='noopener noreferrer'
            >
              Lambda School
            </a>
            , a 32 week Full Stack Web Development program. The curriculum
            ranges from learning popular languages and frameworks like
            Javscript, Node, React and SQL to working on user stories, technical
            design documents, to collaborating with UX/UI designers and more.
          </p>
        </div>
        <div className='pic-container'>
          <img src={mug} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
