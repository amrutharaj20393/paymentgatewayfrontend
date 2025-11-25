import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Card, Button, Carousel } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import { deleteItemApi, getCartApi, updateQuantityApi } from "../services/allApi";
import { toast, ToastContainer } from 'react-toastify'
import { cartcountContext, deleteContext } from "../context/ContextShare";
function Cart() {
  const [cartItem, setcartItem] = useState([])
  const [email, setEmail] = useState("")
  const [quantities, setQuantities] = useState({}); // { _id: qty }
  //const [deleteStatus, setDeleteStatus] = useState([])
  const { setCartCount } = useContext(cartcountContext)
  const { deleteStatus, setDeleteStatus } = useContext(deleteContext)
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
  //  console.log(result)
    if (result.status == 200) {
      toast.success("Deleted successfully")
      setDeleteStatus(result.data)
      setcartItem(cartItem.filter(item => item._id !== id));
      setCartCount(cartItem.filter(item => item._id !== id))
    }
  }
  const updateQuantity = async () => {
    console.log(quantities)
    const result = await updateQuantityApi({ quantities, email })
  //  console.log(result)
    if (result.status == 200) {
      navigate('/checkout')
      //toast.success("Deleted successfully")
      //setDeleteStatus(result.data)
      // setcartItem(cartItem.filter(item => item._id !== id));
    }
  }
  //console.log(deleteStatus)
  const getCartDet = async () => {
    //console.log(email)
    const result = await getCartApi(email)
    console.log(result)
    if (result.status == 200) {

      setcartItem(result.data.cartItems)
      //if user donot change the quantity field
      // const initialQty = {};
      // result.data.cartItems.forEach(item => {
      //   initialQty[item._id] = 1;
     // });
     // setQuantities(initialQty);

      //setCartMedDt(result.data)
    }
    else if (result.status == 401) {
      console.log("no cart data")
      //setAMedicine([])

    }
  }
 // console.log(cartItem)
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
  } ,[email ]);
  useEffect(()=>{
    if (email) {
      getCartDet();
    }
  },[deleteStatus])

  return (
    <div className="container-fluid  bg-secondary-subtle">
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
                      <p className="text-black mb-1 ">Quantity: {item.quantity}</p>

                      {/* <div className='mb-3 me-2 '>
                        <input
                          type="number"
                          min="1"
                          placeholder="Enter Quantity"

                          value={quantities[item._id] || 1}            // only this item’s qty
                          onChange={(e) => handleChange(e, item._id)}   // update only this item
                          className="p-2 border rounded w-35"
                        />
                      </div> */}

                      <Button variant="outline-danger" size="sm" onClick={() => deleteItem(item?._id)}>
                        Remove
                      </Button>
                    </Card.Body>
                  </Col>

                  {/* Price */}
                  <Col md={3}>
                    <p className="fw-bold">Rs:{item.price*item.quantity}</p>
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
                const qty = item.quantity
                return sum + item.price * qty;
              }, 0)}</span></span>

            </p>


           <Link to='/checkout'><Button variant="warning" className="w-100" >Proceed to Buy</Button></Link> 

          </Card>
        </Col>
      </Row>


      <div id="productCarousel" className="carousel slide bg-white " data-bs-ride="false">
        <h5 className='fw-bold '>Inspired by Your browsing history</h5>
        <div className="carousel-inner p-1">

          <div className="carousel-item active">
            <div className="d-flex justify-content-center gap-2">
              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0 ">
                  <img src="https://m.media-amazon.com/images/G/31/IMG20/Home/2024/HFRevamp/Layers._SS400_QL85_.jpg" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center p-0 m-0">
                    <h6 className="card-title text-primary p-2">Lukzer 2 Seater Green Leaves Universal Sofa Cover | 360° Fully Covered Anti-Slip Washable........</h6>
                    <div className="card-body p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0">
                  <img src="https://m.media-amazon.com/images/I/51ZiROH9i6L._SR480,440_AC_.jpg" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center p-0 m-0">
                    <h6 className="card-title text-primary p-2">Xtrim Puzzle Exercise Mat High-Density EVA Foam Mat, Interlocking Tiles, Shock Proof, ..........</h6>
                    <div className="card-body p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0" >
                  <img src="https://m.media-amazon.com/images/I/21o88VcjQ7L._SR480,440_AC_.jpg" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center p-0 m-0">
                    <h6 className="card-title text-primary p-2">Boldfit Yoga Mat for Women & Men - TPE Eco Friendly 6mm thickness Non Slip Classic Pro Exercise Mat for .....</h6>
                    <div className="card-body p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0">
                  <img src="https://m.media-amazon.com/images/I/41UIxg3-XPL._SR480,440_AC_.jpg" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center p-0 m-0">
                    <h6 className="card-title text-primary p-2">Nermosa Women Printed Anarkali Kurta and Pant Set with Dupatta</h6>
                    <div className="card-body p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0">
                  <img src="https://m.media-amazon.com/images/I/319WYcef6JL._SR480,440_AC_.jpg" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center p-0 m-0">
                    <h6 className="card-title text-primary p-2">Boldfit Blaze Football Practise Foot Ball Training Football Size 5 Original for All Ages Group Rubber ......</h6>
                    <div className="card-body  p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0" >
                  <img src="https://m.media-amazon.com/images/I/31AopMCvXPL._SR480,440_AC_.jpg" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center p-0 m-0">
                    <h6 className="card-title text-primary p-2">Kore PVC 10KG Combo 3 Home Gym Set with One 3 Ft Curl and One Pair Dumbbell Rods with Gym Bag and Gym....</h6>
                    <div className="card-body p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className="carousel-item ">
            <div className="d-flex justify-content-center gap-2">

              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0" >
                  <img src="https://via.placeholder.com/150" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center p-0 m-0">
                    <h6 className="card-title text-primary">Product One</h6>
                    <div className="card-bodyp-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0" >
                  <img src="https://via.placeholder.com/150" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center">
                    <h6 className="card-title text-primary p-0 m-0">Product One</h6>
                    <div className="card-body p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0">
                  <img src="https://via.placeholder.com/150" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center p-0 m-0">
                    <h6 className="card-title text-primary">Product One</h6>
                    <div className="card-body p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0" >
                  <img src="https://via.placeholder.com/150" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center p-0 m-0">
                    <h6 className="card-title text-primary">Product One</h6>
                    <div className="card-body p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0" >
                  <img src="https://via.placeholder.com/150" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center">
                    <h6 className="card-title text-primary p-0 m-0">Product One</h6>
                    <div className="card-body p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0">
                  <img src="https://via.placeholder.com/150" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center">
                    <h6 className="card-title text-primary p-0 m-0">Product One</h6>
                    <div className="card-body p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        <button className="carousel-control-prev  " type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon "></span>
        </button>

        <button className="carousel-control-next " type="button" data-bs-target="#productCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>


      <ToastContainer theme='colored' position='top-center' autoClose={2000} />

    </div>

  );
}

export default Cart;
