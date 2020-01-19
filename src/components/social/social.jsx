import React from 'react';
import { socialMedia } from './socialContent';
import FormattedIcon from '../images/formattedIcon';
import './social.styles.scss';

const Social = () => {
  return (
    <div className='social-container'>
      <ul>
        {socialMedia &&
          socialMedia.map(({ url, name }, i) => (
            <span key={i}>
              <a
                href={url}
                target='_blank'
                rel='nofollow noopener noreferrer'
                aria-label={name}
              >
                <FormattedIcon name={name} />
              </a>
            </span>
          ))}
      </ul>
    </div>
  );
};
export default Social;
