import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../index.css';
import AddProduct from "./AddProduct";

function ProductList(props){
    return <div className="page">
        <Container>
            <Row>
            {props.products.map((product, index)=>
            (<Col xs="12" md={6} lg={4}>
                <img
                    src={product.image}
                    alt={product.description}
                    height={300}
                    width={300}
                    style={{
                        objectFit: 'cover'
                    }}/>
                <div class ="row in-row-text">
                    <h5>{product.name}</h5>
                    <p>{product.price}</p>
                </div>
                <AddProduct index={index} product={product}/>
            </Col>))}
        </Row>
        </Container>
    </div>
}

export default ProductList;