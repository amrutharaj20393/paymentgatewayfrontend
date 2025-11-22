import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCartApi } from "../services/allApi";

function Cart() {
   const [cartItem, setcartItem] = useState([])
   const [email, setEmail] = useState("")
    const getCartDet = async () => {
    console.log(email)
    const result = await getCartApi(email)
    console.log(result)
    if (result.status == 200) {

      setAMedicine(result.data.cartItems)

      //setCartMedDt(result.data)
    }
    else if (result.status == 401) {
      console.log("no cart data")
      setAMedicine([])

    }
  }
  useEffect(()=>{
    const user = JSON.parse(sessionStorage.getItem("existingUser"))
        if (user && user.email) {
          getCartDet()
            setEmail(user.email);
        } else {
            navigate('/Loginpage'); 
        }

  },[])


  return (
    <div className="container mt-3 bg-secondary-subtle">
      <Row>
        {/* Cart Items */}
        <Col md={8}>
          <h3>Shopping Cart</h3>

          {/* Product 1 */}
          <Card className="mb-3">
            <Row className="g-0 align-items-center">
              <Col md={3}>
                <Card.Img
                  src=""
                  alt="Product 1"
                  className="img-fluid p-2"
                  style={{ height: "120px", objectFit: "contain" }}
                />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title>Product 1</Card.Title>
                  <p className="text-danger mb-1">Usually Ship within 4 days</p>
                   <p className="text-primary mb-1">Sold by:Montalk Lc</p>
                    <p className="text-primary mb-1">Size:L</p>
                  <Form.Group className="w-25 mb-2">
                    <Form.Label className="small mb-1">Quantity</Form.Label>
                    <Form.Control type="number" min={1} defaultValue={1} />
                  </Form.Group>
                  <Button variant="outline-danger" size="sm">
                    Remove
                  </Button>
                </Card.Body>
              </Col>
              <Col md={3} className="">
                <p className="fw-bold">SAR 499</p>
              </Col>
            </Row>
          </Card>

          {/* Product 2 */}
          <Card className="mb-3">
            <Row className="g-0 align-items-center">
              <Col md={3}>
                <Card.Img
                  src=""
                  alt="Product 2"
                  className="img-fluid p-2"
                  style={{ height: "120px", objectFit: "contain" }}
                />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title>Product 2</Card.Title>
                  <p className="text-danger mb-1">Rs 799</p>
                  <Form.Group className="w-25 mb-2">
                    <Form.Label className="small mb-1">Quantity</Form.Label>
                    <Form.Control type="number" min={1} defaultValue={2} />
                  </Form.Group>
                  <Button variant="outline-danger" size="sm">
                    Remove
                  </Button>
                </Card.Body>
              </Col>
              <Col md={3} className="text-center">
                <p className="fw-bold">Rs 1598</p>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Order Summary */}
        <Col md={4}>
          <Card className="p-3 mt-5">
            <h5>Order Summary</h5>
            <hr />
            <p className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>Rs 2097</span>
            </p>
            
           
            <Link to="/checkout">
            <Button variant="warning" className="w-100">
              Proceed to Buy
            </Button>
            </Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Cart;
