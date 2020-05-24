import styled from 'styled-components';

export const Container = styled.main`
background-color: #04192C;
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
position: fixed;
top: 0;
left: 0;
`

export const Topbar = styled.nav`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: 50px;
width: 100%;
background-color: #062C4F;
padding: 10px;
`

export const Button = styled.button`
height: 35px;
width: 35px;
padding: 5px;
margin: 5px;
border: none;
background-color: #062C4F;
`

export const HomeWrapper = styled.div`
  margin: 80px;
`
export const ContentWrapper = styled.body`
margin-bottom: 20px;
margin-left: 80px;
`

export const Content = styled.body`
display: flex;
flex-direction: column;
color: white;
font-family: Arial;
margin: 10px;
`