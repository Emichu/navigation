import React, { useState } from 'react';
import * as Styled from './Masthead.styles';

import Navigation from '../Navigation'
import Icon from '../Icon';

function Masthead() {
  const [mobileNavActive, setMobileNavActive] = useState(false)

  return (
    <Styled.Container>
      <Styled.Topbar>
        <p>Logo</p>
        <Styled.Button onClick={() => setMobileNavActive(true)}><Icon name="bars" color="white" /></Styled.Button>
      </Styled.Topbar>

      {mobileNavActive && <Navigation onDeactivate={() => setMobileNavActive(false)} />}
    </Styled.Container>
  )
}

export default Masthead;