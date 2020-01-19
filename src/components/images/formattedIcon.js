import React from 'react';
import { colors } from '../../style/utils';
import styled from 'styled-components';
import { ReactComponent as GitHub } from '../images/icons/github.svg';
import { ReactComponent as LinkedIn } from '../images/icons/linkedin.svg';
import { ReactComponent as Twitter } from '../images/icons/twitter.svg';
import { ReactComponent as Email } from '../images/icons/envelope.svg';

const Icon = styled.div`
  color: ${colors.bg};
  :hover {
    color: ${colors.accent};
  }
  padding: 9px 0;
`;

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'Github':
      return (
        <Icon>
          <GitHub />
        </Icon>
      );
    case 'Linkedin':
      return (
        <Icon>
          <LinkedIn />
        </Icon>
      );
    case 'Email':
      return (
        <Icon>
          <Email />
        </Icon>
      );
    case 'Twitter':
      return (
        <Icon>
          <Twitter />
        </Icon>
      );
    default:
      return (
        <Icon>
          <GitHub />
        </Icon>
      );
  }
};

export default FormattedIcon;
