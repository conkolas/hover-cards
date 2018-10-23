import React from 'react';
import PropTypes, { object } from 'prop-types';
import Grid from '@material-ui/core/Grid';

import CardGridStyle from './CardGridStyle';
import Card from './../../components/Card/Card';

const CardGrid = (props) => (
  <CardGridStyle className={props.className}>
    <Grid container 
    spacing={16}
    direction="row"
    justify="space-around"
    alignItems="center">
      {props.cards.map(card => 
        <Grid item xs={12} sm={6} md={3} key={card.title}>
          <Card
            title={card.title}
            link={card.link}
            text={card.text}
            image={card.image}
            buttonText={card.buttonText}
          ></Card>
        </Grid>
      )}
    </Grid>
  </CardGridStyle>
)

CardGrid.propTypes = {
  cards: PropTypes.arrayOf(object),
}

export default CardGrid;