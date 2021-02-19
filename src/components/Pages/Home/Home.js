import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import pancakes from '../../../images/pancakes.jpg';
import './Home.css';


class Home extends Component {
    render() {
        return (

            <div className="homeStyle">
                <Container className="pageContent">
                    <h1 className="pageTitle">SuperStore Homepage</h1>
                    <Row className="dailyDeal">
                        <Col xs={6} className="dealDescription">
                            <p>Insert awesome product desription for daily Deal!</p>
                        </Col>
                        <Col xs={6} className="imageHolder">
                            <Card>
                                <CardImg className="dealImage" top width="100%" src={pancakes} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">Card Title</CardTitle>
                                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>


        )
    }
}

export default Home;