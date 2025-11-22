import React, { useState } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product() {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="container mt-3 mb-2">
              <div className="d-flex justify-content-between flex-wrap-0 align-items-center">
                    <h4 className="fw-bold me-4">Amazon Fashion</h4>
                    <h5 className="me-4 fw-normal">Men's Fashion</h5>
                    <h5 className="me-4 fw-normal">Women's Fashion</h5>
                    <h5 className="me-4 fw-normal">Kids</h5>
                    <h5 className="me-4 fw-normal">Footwear</h5>
                    <h5 className="me-4 fw-normal">Watches</h5>
                </div>
            <Row className="mt-3">

                <Col md={4} className="mt-6">
                    <Card className="border-0">
                        <Card.Img
                            src="https://m.media-amazon.com/images/I/618MdeNFBmL._AC_UL480_FMwebp_QL65_.jpg"
                            className="img-fluid rounded"
                            style={{ objectFit: "contain", width: "100%", height: "400px" }}
                        />
                    </Card>
                </Col>


                <Col md={5}>
                <h5>Brand:</h5>
                    <h3>Product Title Goes Here</h3>

                    <div className="d-flex align-items-center mb-2">
                        <img
                            src="https://thumbs.dreamstime.com/b/glossy-yellow-d-four-star-rating-render-image-stars-golden-shape-quality-service-measurement-ranking-system-review-symbol-253258195.jpg"
                            alt="ratings"
                            style={{ height: "20px", width: "80px", objectFit: "contain" }}
                        />
                        <span className="ms-2">4.5 out of 5 stars | 234 reviews</span>
                    </div>
                    <hr />
                    <h4 className="text-danger mb-1">Rs 499</h4>
                    <p className="mb-1">
                        <span className="">Original Price: Rs 999</span>{" "}
                        <span className="text-danger fw-bold">(50% off)</span>
                    </p>
                    <p className="small  mb-2">Save extra with No Cost EMI</p>
                    <p>Enter code MEEM20 at checkout.Discount by amazon</p>

                    <p className="mb-2">
                        Free Delivery by <span className="fw-bold">Sat, 21 Nov, 7:00am-9:00pm</span>
                    </p>
                    <hr />

                    <h5>Product Details</h5>
                    <p className="fw-bold small">Size: L</p>
                    <p className="fw-bold small">Size: Black</p>
                    <ul>
                        <li>High-quality material for long-lasting use</li>
                        <li>Available in multiple colors and sizes</li>
                        <li>Perfect for daily use and gifting</li>
                        <li>Easy to clean and maintain</li>
                    </ul>

                </Col>
                <Col md={3}>
                    <div className="border ">
                        <p className="mb-2 ms-2">
                            SAR6 delivery <span className="fw-bold">6-9 october</span>
                        </p>
                        <p className="text-danger ms-2">Usually ship within 4-5 days</p>
                        <Form.Group className="mb-3 w-25 ms-2" controlId="quantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                min={1}
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                            />
                        </Form.Group>

                       <Link to="/Cart"><Button variant="warning" className="w-100 mb-2 p-1 ">Add to Cart</Button></Link> 
                        <Button variant="success" className="w-100 mb-2 p-1">Buy Now</Button>

                        <h5 className="mt-5">Customer Top Reviews</h5>
                       
                        <div className="mb-2">
                            <p className="mb-1"><strong>John Doe</strong></p>
                            <div className="d-flex align-items-center mb-1">
                                <img
                                    src="https://thumbs.dreamstime.com/b/glossy-yellow-d-four-star-rating-render-image-stars-golden-shape-quality-service-measurement-ranking-system-review-symbol-253258195.jpg"
                                    alt="5 stars"
                                    style={{ height: "20px", width: "80px", objectFit: "contain" }}
                                />
                               
                            </div>
                            <p className="small text-muted mb-2">"Excellent product! Highly recommend."</p>
                        </div>

                        <div className="mb-2">
                            <p className="mb-1"><strong>Jane Smith</strong></p>
                            <div className="d-flex align-items-center mb-1">
                                <img
                                    src="https://thumbs.dreamstime.com/b/glossy-yellow-d-four-star-rating-render-image-stars-golden-shape-quality-service-measurement-ranking-system-review-symbol-253258195.jpg"
                                    alt="4 stars"
                                    style={{ height: "20px", width: "80px", objectFit: "contain" }}
                                />
                              
                            </div>
                            <p className="small text-muted mb-2">"Good quality, fast delivery."</p>
                        </div>

                    </div>

                </Col>
            </Row>
        </div>
    );
}

export default Product;
