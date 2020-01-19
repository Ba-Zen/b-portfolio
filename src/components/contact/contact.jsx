import React from 'react';
import './contact.styles.scss';

const contact = () => {
  const email = 'bazen.atlas@gmail.com';
  return (
    <div className='contact-container'>
      <a name='contact' href='#contact' style={{ opacity: 0 }}>
        .
      </a>

      <h3>Get In Touch</h3>

      <div className='contact-content'>
        <p>
          My inbox is always open. Whether for a potential project or just to
          say hi, I'll do my best to answer as quickly as possible!
        </p>

        <a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer'>
          <button>Say Hello</button>
        </a>
      </div>
    </div>
  );
};

export default contact;
