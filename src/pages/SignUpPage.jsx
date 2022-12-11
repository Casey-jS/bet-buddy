import React, {useState, useEffect, useCallback} from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import NbaAPI from '../nbaAPI';
import HomePage from './HomePage';


export default function SignUpPage(){

  let api = new NbaAPI();
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");
  const [finalPassword, setFinalPassword] = useState("");
  const [finalUsername, setFinalUsername] = useState("");
  const [valid, setValid] = useState(false);
  const [message, setMessage] = useState("");

  const validateSignUp = useCallback(() => {
    api.validateSignUp(finalUsername, finalPassword).then(
      response => {
        if (response['valid'] == true){
          setValid(true);
          setMessage("Your account has been created.")
        }
        else{
          setMessage(response['message']);
        }
      }
    )
  }, [finalUsername])

  useEffect(() => {
    validateSignUp();
  }, [validateSignUp])

  const setFinals = (event) => {
    event.preventDefault();
    setFinalPassword(password);
    setFinalUsername(userName);
  }
  if (valid){
    return <HomePage />
  }

    return (
        <div className="signInContainer">
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Bet Buddy</h2>
                  <div className="mb-3">
                    <Form onSubmit={setFinals}>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-center">
                          Username
                        </Form.Label>
                        <Form.Control type="username" placeholder="Enter a username" onChange={e => {
                          e.preventDefault();
                          setUsername(e.target.value);
                        }}/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => {
                          e.preventDefault();
                          setPassword(e.target.value);
                        }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Sign Up
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">{message}</div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    )
}