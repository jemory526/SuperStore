import React from "react";
import { Container, CardHeader, CardText, Col, Card, CardBody } from "reactstrap";


const SingleProduct = (props) => {
    return (
        <Container>
            <Col md="12" style={{ padding: "10px" }}>
                <React.Fragment>
                    <Card style={{ flex: 1 }}>
                        {" "}
                        <CardHeader style={{ fontWeight: "bold" }}>
                            {props.products.productName}
                        </CardHeader>
                        <CardBody>
                            <CardText>{props.products.productDescription}</CardText>
                        </CardBody>
                    </Card>
                </React.Fragment>
            </Col>
        </Container>
    );
};

export default SingleProduct;