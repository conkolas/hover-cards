import styled from 'styled-components'

const CircleIconStyle = styled.div`
  position: relative;
  border-radius: 50%;
  width: ${props => props.radius}px;
  height: ${props => props.radius}px;
  background: url(${props => props.image}) center no-repeat;
`;

export default CircleIconStyle;