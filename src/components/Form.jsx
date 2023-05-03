import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffe6f2;
`;

const fields = [
  { label: 'Email Address', type: 'text', placeholder: 'Input Email' },
  { label: 'Password', type: 'password', placeholder: 'Input Password' }
];

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

function BasicExample() {
  const [emailAddrs, setEmailAddrs] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Title>My Form</Title>
      <Form>
        {fields.map((field) => {
          return (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{field.label}</Form.Label>
              <Form.Control
                type={field.type}
                placeholder={field.placeholder}
                onChange={(e) =>
                  field.label === 'Email Address'
                    ? setEmailAddrs(e.target.value)
                    : setPassword(e.target.value)
                }
              />
            </Form.Group>
          );
        })}
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br />
        <h2>Hi {emailAddrs}</h2>
        <h2>Your password is {password}</h2>
      </Form>
    </Container>
  );
}

export default BasicExample;