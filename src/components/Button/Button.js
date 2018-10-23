import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyle from './ButtonStyle';

const Button = (props) => (
  <ButtonStyle href={props.href}>{props.children}</ButtonStyle>
)

Button.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string,
}

export default Button;