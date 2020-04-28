import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';


class Home extends Component {
    render() {
        return (

            <div className="homeStyle">
                <h1 className="pageTitle">SuperStore Homepage</h1>

                <Container className="pageContent">
                    <Row className="dailyDeal">
                        <Col xs={6} className="dealDescription">
                            <p>Insert awesome product desription for daily Deal!</p>
                        </Col>
                        <Col xs={6} className="imageHolder">
                            <img
                            className="dealImage"
                            src="./images/pancakes.jpg"
                            alt="Pancakes"
                            />                        
                        </Col>
                    </Row>
                </Container>
            </div>


        )
    }
}

export default Home;