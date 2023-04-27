import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #fce4ec; /* Pink background color */
`;

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem;
background-color: #fff;
border-radius: 0.5rem;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
font-size: 2rem;
margin-bottom: 2rem;
`;

const Label = styled.label`
font-size: 1.2rem;
margin-bottom: 1rem;
`;

const Input = styled.input`
font-size: 1.2rem;
padding: 0.5rem;
margin-bottom: 2rem;
border: none;
border-bottom: 2px solid #555;
outline: none;
&:focus {
border-color: #e91e63; /* Pink border color on focus */
}
`;

const Button = styled.button`
font-size: 1.2rem;
padding: 0.5rem 2rem;
background-color: #e91e63; /* Pink button color */
color: #fff;
border: none;
border-radius: 0.5rem;
cursor: pointer;
&:hover {
background-color: #ff69b4; /* Lighter pink button color on hover */
}
`;

const Newpage = () => {
return (
    <Container>
      <Form>
        <Title>Login</Title>
        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" name="username" required/>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" name="password" required/>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Newpage;