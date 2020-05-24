import React from 'react';
import { Masthead } from './components';

import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body, html, #root {
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Masthead />
    </React.Fragment>
  );
}

export default App;
