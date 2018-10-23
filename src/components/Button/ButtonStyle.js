import styled from 'styled-components'

const ButtonStyle = styled.a` 
  background: transparent;
  border-radius: 2px;
  border: 2px solid ${ props => props.theme.button.borderColor };
  font-weight: 100;
  padding: 12px 22px;
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

  color: ${ props => props.theme.button.color };
  background: ${ props => props.theme.button.background };
  transition: color 0.375s, background 0.375s cubic-bezier(0.4, 0.0, 0.2, 1);
  
  &:hover {
    color: ${ props => props.theme.button.hover.color };
    background: ${ props => props.theme.button.hover.background };
  }
`;

export default ButtonStyle;