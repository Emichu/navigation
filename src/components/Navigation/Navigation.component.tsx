import React from 'react';
import * as Styled from './Navigation.styles';

import Icon from "../Icon"

interface NavigationProps {
  onDeactivate: any;
}

function Navigation(props: NavigationProps) {
  const { onDeactivate } = props;

  return (
    <Styled.Container>
      <Styled.Topbar>
        <p>Logo</p>
        <Styled.Button onClick={() => onDeactivate()}><Icon name="cross" color="white" /></Styled.Button>
      </Styled.Topbar>
      <Styled.HomeWrapper>
        <Styled.Content>
          Home
        </Styled.Content>
        <Styled.Content>
          Logout
        </Styled.Content>
      </Styled.HomeWrapper>
      <Styled.ContentWrapper>
        <Styled.Content>
          Products
        </Styled.Content>
        <Styled.Content>
          Transcription
        </Styled.Content>
        <Styled.Content>
          Library
        </Styled.Content>
        <Styled.Content>
          Stories
        </Styled.Content>
      </Styled.ContentWrapper>
      <Styled.ContentWrapper>
        <Styled.Content>
          Company
        </Styled.Content>
        <Styled.Content>
          About
        </Styled.Content>
        <Styled.Content>
          Products
        </Styled.Content>
        <Styled.Content>
          Contact Us
        </Styled.Content>
      </Styled.ContentWrapper>
      <Styled.ContentWrapper>
        <Styled.Content>
          Further Information
        </Styled.Content>
        <Styled.Content>
          Terms and Conditions of use
        </Styled.Content>
        <Styled.Content>
          Privacy Policy
        </Styled.Content>
      </Styled.ContentWrapper>
    </Styled.Container>
  )
}

export default Navigation;