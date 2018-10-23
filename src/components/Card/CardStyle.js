import styled from 'styled-components'

const CardStyle = styled.div`
  height: 450px;
  padding: 30px;
  overflow: hidden;
  position: relative;
  background: ${props => props.theme.card.background};
  box-shadow: 0 0 0px rgba(0, 0, 0, 0);
  transition: box-shadow ${ props => props.theme.transition.time },
  background ${ props => props.theme.transition.time } ${ props => props.theme.transition.ease };

  .content {
    font-weight: 100;
    line-height: 1.6em;
    opacity: 1;
    color: ${props => props.theme.card.textColor};
    transition: opacity ${ props => props.theme.transition.timeFast } ${ props => props.theme.transition.ease };
  }

  .icon {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 200px;
    bottom: 0px;
    transition: bottom ${ props => props.theme.transition.time } ${ props => props.theme.transition.ease };
  }

  .btn {
    position: absolute;
    text-align: center;
    bottom: -100%;
    padding: 30px 0 43px;
    opacity: 0;
    transition: bottom ${ props => props.theme.transition.time },
    opacity ${ props => props.theme.transition.time } ${ props => props.theme.transition.ease };
  }

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background: ${props => props.theme.card.hoverColor};

    .header a {
      color: ${props => props.theme.card.background};
    }
    .icon {
      bottom: 160px;
    }
    .content {
      opacity: 0;
    }
    .btn {
      opacity: 1;
      bottom: 0;
      transition: bottom ${ props => props.theme.transition.time } 0.1s,
      opacity ${ props => props.theme.transition.time } ${ props => props.theme.transition.ease };
    }
  }

  @media (min-width: 960px) and (max-width: 1170px){
    .icon {
      height: 160px;
    }
  }

  }
`;

export default CardStyle;