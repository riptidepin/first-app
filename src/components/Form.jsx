
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';

function BasicExample() {
const fields = [
  {label: "Email Address", type:"text", placeholder:"Input Email"},
  {label: "Password", type:"password", placeholder:"Input Password"}
];
  const [emailAddrs, setEmailAddrs] = useState("");
  const[password, setPassword] = useState("");
return (
      <Form>
        {fields.map((field) => {
            return(
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control type={field.type} placeholder={field.placeholder}
                    onChange={(e) => setEmailAddrs(e.target.value)}/>
                </Form.Group>
            )
        })}
        
        <Button variant="primary" type="type">Submit</Button>
        <br />
        <h2>Hi {emailAddrs}</h2>
        <h2>Your password is {password}</h2>
      </Form>
  );
};


export default BasicExample;