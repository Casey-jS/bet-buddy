import React, { useEffect, useState } from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import HomePage from './HomePage';
import NbaAPI from './nbaAPI';


export default function SignIn() {

  const [valid, setValid] = useState(false);
  const [message, setMessage] = useState("");
  let api = new NbaAPI();
  let validateSignIn = () => {
    api.validateSignIn().then(
      response => {
        if (response["is_valid"]){
          setValid(true);
        }
        else{
          setMessage("Invalid Username/Password");
        }
      }
    )
  }

  useEffect(validateSignIn, []);


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
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-center">
                          Username
                        </Form.Label>
                        <Form.Control type="username" placeholder="Enter username" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      {message}
                    </div>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a href="/signup/" className="text-primary fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
    
