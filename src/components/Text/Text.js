import React from 'react';
import PropTypes from 'prop-types';

const Text = (props) => (
  <p className={props.className}>{props.children}</p>
)

Text.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Text;