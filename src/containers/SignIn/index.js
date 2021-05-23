import React, { useState } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  UncontrolledAlert,
} from "reactstrap";
import userData from './../../data/userData.json';
import { useHistory } from "react-router-dom";


export const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const onClick = () => {
    if(email && password){
      const user = userData.filter(user => user.email === email && user.password === password);
      if(user.length > 0){
        localStorage.setItem('user', user);
        history.push('/user-page')
      }else{
        setError('Sorry, we could not verify your credentials');
      }
    }else{
      setError('Please check your credentials')
    }
  }

  return (
    <Form>
      {error && <UncontrolledAlert color="danger" fade={true}>
        I am an alert and I can be dismissed without animating!
      </UncontrolledAlert>}
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>
          Email
        </Label>
        <Col sm={10}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>
          Password
        </Label>
        <Col sm={10}>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </Col>
      </FormGroup>

      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button onClick={onClick}>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};
