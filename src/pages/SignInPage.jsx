import React, { useEffect, useState, useCallback } from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import HomePage from './HomePage';
import NbaAPI from '../nbaAPI';


export default function SignInPage() {


  const [userName, setUserName] = useState("default");
  const [password, setPassword] = useState("default");
  const [valid, setValid] = useState(false);
  const [message, setMessage] = useState("");

  const [finalUsername, setFinalUsername] = useState("");
  const [finalPassword, setFinalPassword] = useState("");


  let api = new NbaAPI();
  const validateSignIn = useCallback(() => {
    api.validateSignIn(finalUsername, finalPassword).then( // validate sign in credentials
      response => {
        console.log(response);
        if (response["is_valid"]){ // if flask says the user exists in the database
          console.log("Attempting to set active user to " +  finalUsername)
          setValid(true);
        }
        else{
          setMessage("Invalid Username/Password");
        }
      }
    ).catch(
      err => {
        console.log(err);
      }
    )
    }, [finalUsername])

  useEffect(() => {
    validateSignIn();
  }, [validateSignIn]);
  

  const setFinals = (event) => {
    event.preventDefault();
    console.log("Attempting to set final values");
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
                        <Form.Control type="username" placeholder="Enter username" onChange={e => {
                          setUserName(e.target.value);
                          console.log("updating username to " + e.target.value)
                        } }/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
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
    
