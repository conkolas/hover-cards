import styled from 'styled-components'
import { withTheme } from "@callstack/react-theme-provider";

const HeaderStyle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  width: 100%;
  position: relative;
  text-transform: uppercase;
  margin-bottom: 45px;
  
  a {
    text-decoration: none;
    color: #000000;
    transition: color ${ props => props.theme.transition.time } ${ props => props.theme.transition.ease };
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -23px;
    height: 3px;
    width: 34%;
    background: ${props => props.theme.card.hoverColor };
  }
`;

export default withTheme(HeaderStyle);