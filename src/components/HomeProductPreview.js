import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../index.css';

function HomeProductPreview(){
    return <div className="section">
        <h3>Popular Products</h3>
    <Container>
        <Row>
            <Col xs={12} md={6} lg={4}>
                <img
                    src="https://cdn.shopify.com/s/files/1/0556/1841/products/brogan_and_mary_sweats_23.2.22257.jpg?v=1645871690"
                    alt="Black NIKE SB Sweater"
                    height={300}
                    width={300}
                    style={{
                        objectFit: 'cover'
                    }}/>
                <div class ="row in-row-text">
                    <h5>Nike SB Sweatshirt</h5>
                </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
                <img
                    src="https://cdn.shopify.com/s/files/1/0556/1841/products/ele_mens_10.11.21108.jpg?v=1636707629"
                    alt="Gray Wheaton College Champion Sweater"
                    height={300}
                    width={300}
                    style={{
                        objectFit: 'cover'
                    }}/>
                <div class ="row in-row-text">
                    <h5>Champion Sweatshirt</h5>
                </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
                <img
                    src="https://cdn.shopify.com/s/files/1/0556/1841/products/Ele_Mens_North_Face_5.1.22135.jpg?v=1641461032"
                    alt="Dark Navy North Face Down Parka"
                    height={300}
                    width={300}
                    style={{
                        objectFit: 'cover'
                    }}/>
                <div class ="row in-row-text">
                    <h5>North Face Down Jacket</h5>
                </div>
            </Col>
        </Row>
    </Container>
</div>
}

export default HomeProductPreview;