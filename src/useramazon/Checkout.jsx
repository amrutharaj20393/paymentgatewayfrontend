import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getCartApi, uodateOrderCartApi } from "../services/allApi";
import { toast, ToastContainer } from 'react-toastify'
import { orderStatusContext } from "../context/ContextShare";
function Checkout() {
  const [cartItem, setcartItem] = useState([])
  const [deleteStatus, setDeleteStatus] = useState({})
  const [email, setEmail] = useState("")
  const { setOrderStatus } = useContext(orderStatusContext)
  const navigate = useNavigate();
  const getCartDet = async () => {
    console.log(email)
    const result = await getCartApi(email)
    console.log(result)
    if (result.status == 200) {

      setcartItem(result.data.cartItems)
      //if user donot change the quantity field


      //setCartMedDt(result.data)
    }
    else if (result.status == 401) {
      console.log("no cart data")
      //setAMedicine([])

    }
  }
  const handleOrder = async () => {
    const result = await uodateOrderCartApi({ email })
   // console.log(result)
    if (result.status == 200) {
      toast.success("Order Placed successfully")
      setDeleteStatus(result.data)
        setOrderStatus(result.data)
      // toast.success("Order Placed successfully");
      setTimeout(() => navigate("/sucess"), 1500);
    
      //setcartItem(cartItem.filter(item => item._id !== id));
    }

  }
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("existingUser"));

    if (user && user.email) {
      setEmail(user.email);
    } else {
      navigate('/Loginpage');
    }
  }, []);

  // run getCartDet only when email is set
  useEffect(() => {
    if (email) {
      getCartDet();
    }
  }, [email, deleteStatus]);
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
          <hr />
          <h5 className="p-2">3 offers</h5>

          <hr />
          <h5 className="p-2">4 Items and shopping</h5>
        </Col>

        {/* Right: Order Summary */}
        <Col md={5}>
          <Card className="">
            <p className="text-justify">Choose a payment method to continue check out.You still have chance to review.</p>
            <hr />
            <h5 className=" ms-2">Order Summary</h5>
            {/* <p>Items <span>SAR 203.14</span></p> */}
            <hr />
            {/* <p className="d-flex justify-content-between ms-2">

              <span>Items Count  :{cartItem?.length}</span>
              {cartItem.length > 0 ? (
                cartItem.map((item, index) => (
                  <div>

                    <span>Total</span>
                    <span>Rs { } </span>
                  </div>

                ))) : (
                <p className="fw-bold text-danger">No items in cart</p>
              )}

            </p>

            <hr /> */}
            <p className="d-flex justify-content-between fw-bold ms-2">
              <span>Total</span>
              <span>Rs {cartItem.reduce((sum, item) => {
                const qty = Number(item.quantity || 1);
                return sum + item.price * qty;
              }, 0)}</span>
            </p>
            <Button onClick={handleOrder} className="w-100 mt-2">
              Place Order
            </Button>
          </Card>
        </Col>
      </Row>
      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
    </div>
  );
}

export default Checkout;
