import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { deleteItemApi, getCartApi, updateQuantityApi } from "../services/allApi";
import { toast, ToastContainer } from 'react-toastify'
function Cart() {
  const [cartItem, setcartItem] = useState([])
  const [email, setEmail] = useState("")
  const [quantities, setQuantities] = useState({}); // { _id: qty }
  const [deleteStatus, setDeleteStatus] = useState({})
  // const { setQuantityStatus } = useContext(quantityContext)
  // handle change for a specific item
  const navigate = useNavigate()

  const handleChange = (e, id) => {
    setQuantities({
      ...quantities,
      [id]: Number(e.target.value)
    });
  };

  const deleteItem = async (id) => {
    const result = await deleteItemApi(id)
    console.log(result)
    if (result.status == 200) {
      toast.success("Deleted successfully")
      setDeleteStatus(result.data)
      setcartItem(cartItem.filter(item => item._id !== id));
    }
  }
  const updateQuantity = async () => {
    console.log(quantities)
    const result = await updateQuantityApi({ quantities,email })
    console.log(result)
    if (result.status == 200) {
      navigate('/checkout')
      //toast.success("Deleted successfully")
      //setDeleteStatus(result.data)
      // setcartItem(cartItem.filter(item => item._id !== id));
    }
  }
  //console.log(deleteStatus)
  const getCartDet = async () => {
    console.log(email)
    const result = await getCartApi(email)
    console.log(result)
    if (result.status == 200) {

      setcartItem(result.data.cartItems)
      //if user donot change the quantity field
      const initialQty = {};
      result.data.cartItems.forEach(item => {
        initialQty[item._id] = 1;
      });
      setQuantities(initialQty);

      //setCartMedDt(result.data)
    }
    else if (result.status == 401) {
      console.log("no cart data")
      //setAMedicine([])

    }
  }
  console.log(cartItem)
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
    <div className="container mt-3 bg-secondary-subtle">
      <Row>
        {/* Cart Items */}
        <Col md={8}>
          <h3>Shopping Cart</h3>

          {cartItem.length > 0 ? (
            cartItem.map((item, index) => (
              <Card className="mb-3" key={index}>
                <Row className="g-0 align-items-center">

                  {/* Product Image */}
                  <Col md={3}>
                    <Card.Img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid p-2"
                      style={{ height: "120px", objectFit: "contain" }}
                    />
                  </Col>

                  {/* Product Info */}
                  <Col md={6}>
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <p className="text-danger mb-1">Usually ships within 4 days</p>
                      <p className="text-primary mb-1">Brand: {item.brand}</p>
                      <p className="text-primary mb-1">Rating: {item.rating}</p>

                      <div className='mb-3 me-2 '>
                        <input
                          type="number"
                          min="1"
                          placeholder="Enter Quantity"

                          value={quantities[item._id] || 1}            // only this item’s qty
                          onChange={(e) => handleChange(e, item._id)}   // update only this item
                          className="p-2 border rounded w-35"
                        />
                      </div>

                      <Button variant="outline-danger" size="sm" onClick={() => deleteItem(item?._id)}>
                        Remove
                      </Button>
                    </Card.Body>
                  </Col>

                  {/* Price */}
                  <Col md={3}>
                    <p className="fw-bold">{item.price}</p>
                  </Col>

                </Row>
              </Card>
            ))
          ) : (
            <p className="fw-bold text-danger">No items in cart</p>
          )}
        </Col>

        {/* Order Summary */}
        <Col md={4}>
          <Card className="p-3 mt-5">
            <h5>Order Summary</h5>
            <h6 className='mt-4'>Total Number of products :<span className='text-red-500'>{cartItem?.length}</span></h6>
            <hr />
            <p className="d-flex justify-content-between">
              <span className="fw-bold">Subtotal <span>{cartItem.reduce((sum, item) => {
                const qty = Number(quantities[item._id] || 1);
                return sum + item.price * qty;
              }, 0)}</span></span>

            </p>


            <Button variant="warning" className="w-100" onClick={updateQuantity}>Proceed to Buy</Button>

          </Card>
        </Col>
      </Row>
      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
    </div>
  );
}

export default Cart;
