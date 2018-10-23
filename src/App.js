import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeProvider, withTheme } from "@callstack/react-theme-provider";

import { themes } from "./themes";
import Button from './components/Button/Button';

const AppStyle = withTheme(styled.div` 
  font-family: "Roboto";
  background: ${props => props.theme.bodyBackground};
  position: absolute;
  width: 100%; height: 100%;
`);

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themes.default}>
        <AppStyle>
        </AppStyle>
      </ThemeProvider>
    );
  }
}

export default App;
