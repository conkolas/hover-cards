import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from "@callstack/react-theme-provider";

import ButtonStyle from './ButtonStyle';

const Button = (props) => (
  <ButtonStyle theme={props.theme} href={props.href}>{props.children}</ButtonStyle>
)

Button.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string,
}

export default withTheme(Button);