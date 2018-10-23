import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeProvider, withTheme } from '@callstack/react-theme-provider';

import { themes } from './themes';
import CardService from './utils/CardService'
import CardGrid from './containers/CardGrid/CardGrid';

const AppStyle = withTheme(styled.div` 
  font-family: "Roboto";
  background: ${props => props.theme.bodyBackground};
`);

class App extends Component {
  state = {
    cards: []
  }

  componentDidMount() {
    CardService.fetchCards().then(response => {
      this.setState({ cards: response })
    })
  }

  render() {
    const { cards } = this.state; 
    return (
      <ThemeProvider theme={themes.default}>
        <AppStyle>
          <CardGrid cards={cards}></CardGrid>
        </AppStyle>
      </ThemeProvider>
    );
  }
}

export default App;
