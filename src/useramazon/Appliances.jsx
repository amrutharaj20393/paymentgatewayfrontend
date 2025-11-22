import React, { useEffect, useState } from 'react'

import { Container, Row, Col, Carousel } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import { addToCartAmazonApi, amazonallProductApi } from '../services/allApi';

function Appliances() {
    const [productlist, setProductlist] = useState([])
    const [tempArray, setTempArray] = useState([])
    const [tempArray1, setTempArray1] = useState([])
    const [tempArray2, setTempArray2] = useState([])
     const [email, setEmail] = useState("")
    const getProductdet = async () => {
        //console.log("hai")
        const result = await amazonallProductApi()
        console.log(result)
        setProductlist(result.data)
        setTempArray(result.data)
        setTempArray1(result.data)
        setTempArray2(result.data)

    }
    const filter = (data) => {
        if (data == "Nofilter") {
            setProductlist(tempArray)
        }
        else {

            setProductlist(tempArray.filter((item) => item.brand.toLowerCase() == data.toLowerCase()))
        }


    }
    const filter1 = (data) => {

        console.log(tempArray1)
        setProductlist(tempArray1.filter((item) => Number(item.rating) >= 4.5))



    }

    const filter2 = (data) => {
        if (data == "Nofilter") {
            setProductlist(tempArray2)
        }
        else if (data == "thous") {

            setProductlist(tempArray2.filter((item) => item.price >= 1000 && item.price < 1500))
        }
        else if (data == "thousand") {
            setProductlist(tempArray2.filter((item) => item.price >= 1500))
        }


    }

    const handleAddCart = async (data) => {

        console.log(email)
        const result = await addToCartAmazonApi({ data, email })
    console.log(result)
        if (result.status == 200) {
            console.log(result.data)
            toast.success("Add To Cart Successfully")
            //setCartMedDt(result.data)
           // setCartstatus(result.data)

        }
        else if (result.status == 400) {
            toast.info("Already Added To cart")
        }
    }


    useEffect(() => {

        getProductdet()
        const user = JSON.parse(sessionStorage.getItem("existingUser"))
        if (user && user.email) {
            setEmail(user.email)
        }
    }, [])
    return (
        <>
            <div className='mt-3 bg-white p-3'>
                <Row>
                    <Col sm={4}>

                        <h4 className='ms-2'>Delivery day</h4>
                        <Form>
                            <Form.Check type="radio" label="Get in 2 days" name="department" id="dept-radio1" className="black-radio" />

                        </Form>

                        <h4 className='mt-5 ms-2'>Customer Reviews</h4>
                        <Form>


                            <div className="d-flex align-items-center mt-2"
                                onClick={() => filter("Nofilter")}
                                style={{ cursor: "pointer" }}>



                                {/* 🔘 Radio Button + Label */}
                                <div className="ms-3 d-flex align-items-center">
                                    <input
                                        type="radio"
                                        id="rating"
                                        name="filter"
                                        className="black-radio"
                                        onChange={() => filter1("rating")}
                                        style={{
                                            accentColor: "black",  // makes radio button black
                                            width: "14px",
                                            height: "14px"
                                        }}
                                    />
                                    {/* ⭐ Rating Image */}
                                    <img
                                        src="https://thumbs.dreamstime.com/b/glossy-yellow-d-four-star-rating-render-image-stars-golden-shape-quality-service-measurement-ranking-system-review-symbol-253258195.jpg"
                                        alt="4 stars"
                                        style={{
                                            height: "20px",
                                            width: "50px",
                                            objectFit: "contain"
                                        }}
                                    />
                                    <label
                                        htmlFor="rating"
                                        className="ms-2"
                                        style={{ marginTop: "2px" }}
                                    >
                                        4.5 and above
                                    </label>
                                </div>
                            </div>



                        </Form>

                        {/* Price */}
                        <h4 className='ms-2 mt-5'>Price</h4>
                        <div className='md:block justify-center'>
                            <div className='mt-3' onClick={() => filter2("Nofilter")}>
                                <input type="radio" id="Nofilter" name='filter' />
                                <label htmlFor="Nofilter" className="ms-3">All</label>
                            </div>
                            <div className='mt-1' onClick={() => filter2("thous")}>
                                <input type="radio" id="thous" name='filter' />
                                <label htmlFor="thous" className="ms-3">Above 1000 & Below 1500 </label>
                            </div>
                            <div className='mt-1' onClick={() => filter2("thousand")} >
                                <input type="radio" id="thousand" name='filter' />
                                <label htmlFor="thousand" className="ms-3">Above 1500 </label>
                            </div>
                        </div>

                        {/* Price */}
                        <h4 className='ms-2 mt-5'>Brands</h4>
                        {/* <Form>
                            <Form.Check type="radio" label="Svmsung" name="price" id="price-radio1" className="black-radio" />
                            <Form.Check type="radio" label="LG" name="price" id="price-radio2" />
                            <Form.Check type="radio" label="Haier" name="price" id="price-radio3" />
                            <Form.Check type="radio" label="Daikein" name="price" id="price-radio4" />
                            <Form.Check type="radio" label="Goderaj" name="price" id="price-radio5" />

                        </Form> */}
                        <div className='md:block justify-center'>
                            <div className='mt-3' onClick={() => filter("Nofilter")}>
                                <input type="radio" id="Nofilter" name='filter' />
                                <label htmlFor="Nofilter" className="ms-3">All</label>
                            </div>
                            <div className='mt-1' onClick={() => filter("atomberg")}>
                                <input type="radio" id="atomberg" name='filter' />
                                <label htmlFor="atomberg" className="ms-3">Atomberg </label>
                            </div>
                            <div className='mt-1' onClick={() => filter("NewLeaf")} >
                                <input type="radio" id="NewLeaf" name='filter' />
                                <label htmlFor="NewLeaf" className="ms-3">New Leaf </label>
                            </div>
                            <div className='mt-1' onClick={() => filter("Svmsung")}>
                                <input type="radio" id="Svmsung" name='filter' />
                                <label htmlFor="Svmsung" className="ms-3">Svmsung </label>
                            </div>
                            <div className='mt-1' onClick={() => filter("Daikein")}>
                                <input type="radio" id="Daikein" name='filter' />
                                <label htmlFor="Daikein" className="ms-3">Daikein </label>
                            </div>
                            <div className='mt-1' onClick={() => filter("Goderaj")}>
                                <input type="radio" id="Goderaj" name='filter' />
                                <label htmlFor="Goderaj" className="ms-3">Goderaj</label>
                            </div>
                        </div>


                    </Col>

                    {/* Products */}
                    <Col sm={8} className='p-3'>
                        <Row className='mt-3'>
                            {productlist.length > 0 ? (
                                productlist.map((item) => (
                                    <Col md={3} key={item._id}>
                                        <Card className="h-100 text-center p-1">

                                            <Card.Img
                                                src={item.image}
                                                className="img-fluid rounded"
                                                style={{ height: "150px", objectFit: "contain" }}
                                            />

                                            <Card.Body className="p-1">
                                                <p className="card-text fw-bold mb-1">{item.name.slice(0, 50)}...</p>
                                                <p className="card-text fw-normal text-primary mb-1">Brand :{item.brand}</p>

                                                <p className="card-text mb-1">
                                                    Rs: {item.price} <span className="text-danger">(46% off)</span>
                                                </p>

                                                <div className="d-flex align-items-center justify-content-between mb-1">
                                                    <span className="fw-bold">Ratings <span className="text-danger">{item.rating}</span></span>

                                                    <img
                                                        src="https://thumbs.dreamstime.com/b/glossy-yellow-d-four-star-rating-render-image-stars-golden-shape-quality-service-measurement-ranking-system-review-symbol-253258195.jpg"
                                                        style={{ height: "20px", width: "80px", objectFit: "contain" }}
                                                    />
                                                </div>

                                                <p className="card-text small text-muted mb-0">
                                                    Free Delivery by <span className="fw-bold text-dark">Sat, 14 Sept</span>
                                                </p>

                                                <Button variant="warning" className='rounded mt-1' onClick={() => handleAddCart(item)} >Add to cart</Button>
                                            </Card.Body>

                                        </Card>
                                    </Col>
                                ))
                            ) : (
                                <p>No products available</p>
                            )}
                        </Row>

                    </Col>
                </Row>

 
            </div>
 <ToastContainer theme='colored' position='top-center' autoClose={2000} />
        </>
    )
}

export default Appliances