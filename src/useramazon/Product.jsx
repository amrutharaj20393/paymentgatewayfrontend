import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GetAProductApi, updateProductQuantityApi, updateQuantityApi } from "../services/allApi";
import { cartcountContext } from "../context/ContextShare";
 

import { toast, ToastContainer } from 'react-toastify'
function Product() {
    const [quantities, setQuantities] = useState({})
    const [aproduct, setAproduct] = useState({})
    const [email, setEmail] = useState("")
    const { setCartCount } = useContext(cartcountContext)
    const { id } = useParams()
    const navigate=useNavigate()
    //console.log(id)
    const viewAProduct = async (id) => {
        const result = await GetAProductApi(id)
        //console.log(result)
        const initialQty = {};
        if (result.status == 200) {
            setAproduct(result.data)

            initialQty[result.data._id] = 1

        }
        setQuantities(initialQty);
    }
    const handleChange = (e, id) => {
        setQuantities({
            ...quantities,
            [id]: Number(e.target.value)
        });
    };
    const updateQuantity = async (data) => {
       // console.log(quantities)
        //console.log(data)
        const result = await updateProductQuantityApi({ quantities, email, data })
       // console.log(result)
        if (result.status == 200) {
           // console.log(result.data)
                        toast.success("Add To Cart Successfully")
                        setCartCount(result.data)
            navigate('/Cart')
            //toast.success("Deleted successfully")
            //setDeleteStatus(result.data)
            // setcartItem(cartItem.filter(item => item._id !== id));
        }
         else if (result.status == 400) {
                    toast.info("Already Added To cart")
                }
    }
     const updateQuantityBuynow = async (data) => {
       // console.log(quantities)
        //console.log(data)
        const result = await updateProductQuantityApi({ quantities, email, data })
       // console.log(result)
        if (result.status == 200) {
           // console.log(result.data)
                        toast.success("Add To Cart Successfully")
                        setCartCount(result.data)
            navigate('/checkout')
            //toast.success("Deleted successfully")
            //setDeleteStatus(result.data)
            // setcartItem(cartItem.filter(item => item._id !== id));
        }
         else if (result.status == 400) {
                    toast.info("Already Added To cart")
                }
    }
    /// console.log(amedicine)
    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("existingUser"));

        if (user && user.email) {
            setEmail(user.email);
        } else {
            navigate('/Loginpage');
        }
    }, []);

    useEffect(() => {

        viewAProduct(id)
    }, [email])
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
                            src={aproduct.image}
                            className="img-fluid rounded"
                            style={{ objectFit: "contain", width: "100%", height: "400px" }}
                        />
                    </Card>
                </Col>


                <Col md={5}>
                    <h5>Brand:{aproduct.brand}</h5>
                    <h3>{aproduct.name}</h3>

                    <div className="d-flex align-items-center mb-2">
                        <img
                            src="https://thumbs.dreamstime.com/b/glossy-yellow-d-four-star-rating-render-image-stars-golden-shape-quality-service-measurement-ranking-system-review-symbol-253258195.jpg"
                            alt="ratings"
                            style={{ height: "20px", width: "80px", objectFit: "contain" }}
                        />
                        <span className="ms-2">4.5 out of 5 stars | 234 reviews</span>
                    </div>
                    <hr />
                    <h4 className="text-danger mb-1">Rs:2000</h4>
                    <p className="mb-1">
                        <span className="">Original Price: Rs {aproduct.price}</span>{" "}
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
                    <p>{aproduct.description}.</p>

                </Col>
                <Col md={3}>
                    <div className="border p-2">
                        <p className="mb-2 ms-2">
                            SAR6 delivery <span className="fw-bold">6-9 october</span>
                        </p>
                        <p className="text-danger ms-2">Usually ship within 4-5 days</p>
                        <input
                            type="number"
                            min="1"
                            placeholder="Enter Quantity"

                            value={quantities[aproduct._id] || 1}            // only this item’s qty
                            onChange={(e) => handleChange(e, aproduct._id)}   // update only this item
                            className="p-2 border rounded w-35"
                        />

                        <Button variant="warning" className="w-100 mb-2 p-1 mt-2 " onClick={() =>  updateQuantity(aproduct) }>Add to Cart</Button>
                        <Button variant="success" className="w-100 mb-2 p-1" onClick={() =>  updateQuantityBuynow(aproduct) }>Buy Now</Button>

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
             <ToastContainer theme='colored' position='top-center' autoClose={2000} />
        </div>
    );
}

export default Product;
