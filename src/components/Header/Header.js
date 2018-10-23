import React from 'react';
import PropTypes from 'prop-types';

import HeaderStyle from './HeaderStyle';

const Header = (props) => (
  <HeaderStyle className={props.className}>{props.children}</HeaderStyle>
)

Header.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Header;