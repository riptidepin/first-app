import React from 'react';
import styled from 'styled-components';
import myImage from '../Image/Barbie.png';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 80vh;
background-image: url('https://images.unsplash.com/photo-1523058467403-8d7b75e87336');
background-size: cover;
`;

const Title = styled.h1`
font-size: 3rem;
font-weight: bold;
margin-bottom: 2rem;
color: #fd71ae;
text-shadow: 2px 2px #ff99cc;
`;

const Content = styled.p`
font-size: 1.5rem;
text-align: center;
line-height: 2rem;
color: #fea9ca;
text-shadow: 2px 2px #ff99cc;
`;


const Homepage = () => {
return (
  <Container>
    <Title>Hello!</Title>
    <Container className="App">
      <img src={myImage} className="App-logo" alt='My Image' />
    </Container>
    <Content>
      Welcome to my page 
    </Content>
  </Container>
);
};

export default Homepage;