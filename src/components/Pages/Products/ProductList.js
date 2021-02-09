import React, { Component } from 'react';
import { Container, Col } from 'react-bootstrap';
import productService from "../../services/productService";
import SingleProduct from "./SingleProduct";



class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            mappedProducts: [],
        };
    }
    componentDidMount() {
        console.log("Component did mount")
        this.productList();
    }

    productList = () => {
        productService
            .getProductList()
            .then(this.onProductListSuccess)
            .catch(this.onProductListError)
    }

    onProductListSuccess = (response) => {
        console.log("Product list Rendered Successfully!" + this.state);
        let mappedProducts = response.data.map(this.mapProducts);
        this.setState({ products: response.data, mappedProducts })
    }

    onProductListError = (response) => {
        console.log("List Unsuccessful" + response);
    };

    onProductClick = (product) => {
        console.log(product);
        this.props.history.push("/")
    }

    mapProducts = (product) => {
        return (
            <SingleProduct
                key={product.id}
                products={product}
            />
        )
    }

    render() {
        return (
            <div>
                <Container>
                    <div>
                        <h1 className="pageTitle">ProductList</h1>
                    </div>
                    <Col xl="12" style={{ display: "flex", flexDirection: "row" }}>
                        {this.state.mappedProducts}
                    </Col>
                </Container>
            </div>
        )
    }
}

export default ProductList;