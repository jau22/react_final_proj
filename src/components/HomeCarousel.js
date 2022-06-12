import React from "react";
import Carousel from "react-bootstrap/Carousel";
import '../index.css';


function HomeCarousel(){
    return <div className="section">
        <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel"
                    src="https://img.freepik.com/free-vector/flat-summer-pattern_23-2148929814.jpg?w=2000"
                    alt="Second slide"
                    height={300}
                    style={{
                        objectFit: 'cover'
                    }}
                    />
                    <Carousel.Caption>
                    <h5>Summer Sale</h5>
                    <p>40% All Summer Clothing</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel"
                    src="https://img.freepik.com/free-vector/flat-summer-background-videocalls_23-2148960656.jpg?w=900&t=st=1654561812~exp=1654562412~hmac=8b520b032335ce32826398af01ad14abf486b1c93211afe0c5e0fd3f5a637523"
                    alt="Second slide"
                    height={300}
                    style={{
                        objectFit: 'cover',
                        objectPosition: '0px 0%' 
                    }}
                    />
                    <Carousel.Caption>
                    <h5>10% Off for First-time Subscribers</h5>
                    <p>Subscribe to receive news and promotions!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
  }

export default HomeCarousel;