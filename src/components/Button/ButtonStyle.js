import styled from 'styled-components'
import { withTheme } from "@callstack/react-theme-provider";

const ButtonStyle = styled.a` 
  background: transparent;
  border-radius: 2px;
  border: 2px solid ${ props => props.theme.button.borderColor };
  font-weight: 100;
  padding: 12px 22px;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

  color: ${ props => props.theme.button.color };
  background: ${ props => props.theme.button.background };
  transition: color ${ props => props.theme.transition.time }, 
    background ${ props => props.theme.transition.time } 
    ${ props => props.theme.transition.ease };
  
  &:hover {
    color: ${ props => props.theme.button.hover.color };
    background: ${ props => props.theme.button.hover.background };
  }
`;

export default withTheme(ButtonStyle);