import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className="container mt-3">
      <h3>Checkout</h3>
      <Row className="mt-3">
        {/* Left: Shipping & Payment */}
        <Col md={7}>
        <Row>
            <Col> 1 Shipping Address
            </Col>
             <Col>
             <p>Jacob James</p>
              <p>2937</p>
               <p>Winchester Rd</p>
                <p>Santa An,6858</p>
            </Col>
             <Col>
            <Button variant="link">Change</Button>
            </Col>

        </Row>
         <hr />

          
          
            <h5>2 Choose Payment Method</h5>
            <Form>
              <Form.Check
                type="radio"
                name="paymentMethod"
                label="Credit / Debit Card"
                id="card"
                className="mb-2"
              />
              <Form.Check
                type="radio"
                name="paymentMethod"
                label="Cash on Delivery"
                id="cod"
                className="mb-2"
              />
              <Form.Check
                type="radio"
                name="paymentMethod"
                label="PayPal"
                id="paypal"
                className="mb-2"
              />
            </Form>
         
        </Col>

        {/* Right: Order Summary */}
        <Col md={5}>
          <Card className="">
            <p className="text-justify">Choose a payment method to continue check out.You still have chance to review.</p>
            <hr />
            <h5 className=" ms-2">Order Summary</h5>
            <hr />
            <p className="d-flex justify-content-between ms-2">
              <span>Items (3)</span>
              <span>Rs 2097</span>
            </p>
           
            <hr />
            <p className="d-flex justify-content-between fw-bold ms-2">
              <span>Total</span>
              <span>Rs 2117</span>
            </p>
            <Link to="/sucess"><Button variant="warning" className="w-100 mt-2">
              Place Order
            </Button></Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Checkout;
