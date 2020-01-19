import React from 'react';
import { ReactComponent as GitHub } from '../images/icons/github.svg';
import { ReactComponent as LinkedIn } from '../images/icons/linkedin.svg';
import { ReactComponent as Twitter } from '../images/icons/twitter.svg';
import { ReactComponent as Email } from '../images/icons/envelope.svg';

// const Icon = styled.div`
//   color: ${colors.bg};
//   :hover {
//     color: ${colors.accent};
//   }
//   padding: 9px 0;
// `;

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'Github':
      return (
        <div>
          <GitHub />
        </div>
      );
    case 'Linkedin':
      return (
        <div>
          <LinkedIn />
        </div>
      );
    case 'Email':
      return (
        <div>
          <Email />
        </div>
      );
    case 'Twitter':
      return (
        <div>
          <Twitter />
        </div>
      );
    default:
      return (
        <div>
          <GitHub />
        </div>
      );
  }
};

export default FormattedIcon;
