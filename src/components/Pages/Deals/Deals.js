import React, { Component } from 'react';
import { Card, Container, CardDeck, Row } from 'react-bootstrap';


class Deals extends Component {
    render() {
        return (
            <div>
                <h1 className="pageTitle"> Deals Page</h1>
                <Container>
                    <Row>
                    <CardDeck>
                        <Card bg="secondary">
                            <Card.Img variant="top" src="./images/gamingPic.jpg" />
                            <Card.Body>
                                <Card.Title>Game Deals!</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card bg="primary">
                            <Card.Img variant="top" src="./images/electronicsPic.jpg" />
                            <Card.Body>
                                <Card.Title>Electronics Deals!</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card bg="success">
                            <Card.Img variant="top" src="./images/salePic.jpg" />
                            <Card.Body>
                                <Card.Title>Clearance!</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                    </Row>
                 
                </Container>
            </div>
        )
    }
}

export default Deals;