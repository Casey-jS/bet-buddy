import React, { useState, useCallback, useEffect } from 'react';
import NbaAPI from '../nbaAPI';
import {Form, Button, Row, Col, Container, Card} from 'react-bootstrap'
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';


export default function NewBet(props){
    const [image, setImage] = useState([]);
    const [message, setMessage] = useState("");
    const [stat, setStat] = useState("pts");
    const [amount, setAmount] = useState(0.0);
    const [opp, setOpp] = useState("LAL");
    let api = new NbaAPI();
    const getHeadshot = useCallback(() => {
        api.fetchHeadshot(props.id).then(
            imageBlob => {
                setImage(URL.createObjectURL(imageBlob)); // occupy image with img fetched
            }
        )
      }, [props.id])
    
      useEffect(() => {
        getHeadshot();
      }, [getHeadshot]);

      let setBet = () => {
        api.new_bet(props.name, props.id, props.user, amount, stat, opp).then(
            response => {
                console.log("new bet added")
            }
        )
      }

      return (
        
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">{"New Bet - " + props.name}</h2>
                  <div className="mb-3">
                    <Form onSubmit={setBet}>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-center">
                          Stat
                        </Form.Label>
                        <Form.Control
                            as="select"
                            value={stat}
                            onChange={e => {
                                console.log("e.target.value", e.target.value);
                                setStat(e.target.value);
                            }}
                        >
                            <option>pts</option>
                            <option>ast</option>
                            <option>reb</option>
                            <option>blk</option>
                            <option>3pt</option>
                            </Form.Control>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control placeholder="22.5" onChange={e => setAmount(e.target.value)}></Form.Control>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Opponent</Form.Label>
                        <Form.Control placeholder="LAL" onChange={e => setOpp(e.target.value)}/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit" onClick={() => setBet}>
                          Submit
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      {message}
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
      )
}