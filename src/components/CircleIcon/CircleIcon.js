import React from 'react';
import PropTypes from 'prop-types';

import CircleIconStyle from './CircleIconStyle';

const CircleIcon = (props) => (
  <CircleIconStyle 
    radius={props.radius} 
    image={props.image}>
  </CircleIconStyle>
)

CircleIcon.propTypes = {
  radius: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
}

export default CircleIcon;