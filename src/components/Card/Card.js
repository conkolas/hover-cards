import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from "@callstack/react-theme-provider";
import Grid from '@material-ui/core/Grid';

import CardStyle from './CardStyle';
import Text from './../Text/Text';
import Header from './../Header/Header';
import Button from './../Button/Button';
import CircleIcon from '../CircleIcon/CircleIcon';

const Card = (props) => (
  <CardStyle theme={props.theme}>
    <Grid container direction="column" alignItems="center">
      <Header className="header"><a href={props.link}>{props.title}</a></Header>
      
      <Text className="content">{props.text}</Text>
      <a href={props.link} className="icon">
        <CircleIcon image={props.image} radius={144}></CircleIcon>
      </a>
      
      <div className="btn"><Button href={props.link}>{props.buttonText}</Button></div>
    </Grid>
  </CardStyle>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  text: PropTypes.string,
}

export default withTheme(Card);