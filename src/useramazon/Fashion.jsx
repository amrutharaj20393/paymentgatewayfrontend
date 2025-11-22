import React from 'react'
import Header from './Header'
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Form } from 'react-bootstrap';
function Fashion() {
    return (

        <div className='bg-success-subtle'>
            <Container fluid className="mt-2">
                <div className="d-flex justify-content-between flex-wrap-0 align-items-center">
                    <h4 className="fw-bold me-4">Amazon Fashion</h4>
                    <h5 className="me-4 fw-normal">Men's Fashion</h5>
                    <h5 className="me-4 fw-normal">Women's Fashion</h5>
                    <h5 className="me-4 fw-normal">Kids</h5>
                    <h5 className="me-4 fw-normal">Footwear</h5>
                    <h5 className="me-4 fw-normal">Watches</h5>
                </div>

                <Carousel interval={3000}>
                    <Carousel.Item>
                        <Row className="g-3 text-center">

                            <Col xs={4} md={2}>
                                <div className=' text-center '>
                                    <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/WinterFlip/MF/Halo/Mob/Selected/Winter_Wear._SS300_QL85_FMpng_.png" className=" rounded " style={{
                                        height: "120px",
                                        width: "100%",
                                        objectFit: "contain"
                                    }} />
                                    <h5 className='text-center'>Men Clothing</h5>
                                </div>

                            </Col>

                            <Col xs={4} md={2}>
                                <div className='text-center'>
                                    <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/WinterFlip/AF/Halo/PC/Winter_wear._SS300_QL85_FMpng_.png" className=" rounded " style={{
                                        height: "120px", width: "100%", objectFit: "contain"
                                    }} />
                                    <h5>Women Clothing</h5>
                                </div>

                            </Col>

                            <Col xs={4} md={2}>
                                <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/WinterFlip/AF/Halo/Mob/Kids_Clothing._SS300_QL85_FMpng_.png" className="rounded" style={{
                                    height: "120px", width: "100%", objectFit: "contain"
                                }} />
                                <h5>Kids Clothing</h5>
                            </Col>

                            <Col xs={4} md={2}>
                                <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/WinterFlip/AF/Halo/Mob/Footwear._SS300_QL85_FMpng_.png" className=" rounded" style={{
                                    height: "120px", width: "100%", objectFit: "contain"
                                }} />
                            </Col>

                            <Col xs={4} md={2}>
                                <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/WinterFlip/AF/Halo/Mob/Luggage._SS300_QL85_FMpng_.png" className=" rounded" style={{
                                    height: "120px", width: "100%", objectFit: "contain"
                                }} />
                            </Col>

                            <Col xs={4} md={2}>
                                <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/WinterFlip/AF/Halo/Mob/Jewllery._SS300_QL85_FMpng_.png" className=" rounded" style={{
                                    height: "120px", width: "100%", objectFit: "contain"
                                }} />
                            </Col>

                        </Row>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Row className="g-3 text-center">

                            <Col xs={4} md={2}>
                                <div className=' text-center '>
                                    <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/WinterFlip/MF/Halo/Mob/Selected/Winter_Wear._SS300_QL85_FMpng_.png" className=" rounded " style={{
                                        height: "120px",
                                        width: "100%",
                                        objectFit: "contain"
                                    }} />
                                    <h5 className='text-center'>Men Clothing</h5>
                                </div>

                            </Col>

                            <Col xs={4} md={2}>
                                <div className='text-center'>
                                    <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/WinterFlip/AF/Halo/PC/Winter_wear._SS300_QL85_FMpng_.png" className=" rounded " style={{
                                        height: "120px", width: "100%", objectFit: "contain"
                                    }} />
                                    <h5>Women Clothing</h5>
                                </div>

                            </Col>

                            <Col xs={4} md={2}>
                                <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/WinterFlip/AF/Halo/Mob/Kids_Clothing._SS300_QL85_FMpng_.png" className="rounded" style={{
                                    height: "120px", width: "100%", objectFit: "contain"
                                }} />
                                <h5>Kids Clothing</h5>
                            </Col>

                            <Col xs={4} md={2}>
                                <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/WinterFlip/AF/Halo/Mob/Footwear._SS300_QL85_FMpng_.png" className=" rounded" style={{
                                    height: "120px", width: "100%", objectFit: "contain"
                                }} />
                            </Col>

                            <Col xs={4} md={2}>
                                <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/WinterFlip/AF/Halo/Mob/Luggage._SS300_QL85_FMpng_.png" className=" rounded" style={{
                                    height: "120px", width: "100%", objectFit: "contain"
                                }} />
                            </Col>

                            <Col xs={4} md={2}>
                                <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/WinterFlip/AF/Halo/Mob/Jewllery._SS300_QL85_FMpng_.png" className=" rounded" style={{
                                    height: "120px", width: "100%", objectFit: "contain"
                                }} />
                            </Col>

                        </Row>
                    </Carousel.Item>
                </Carousel>

            </Container>



            {/* ================= HERO BANNER ================= */}
            <div className="w-100">
                <img
                    src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/Unrec/T1/Herotater/PC._CB801005113_.jpg"
                    className="img-fluid w-100"
                    alt="Amazon Fashion Banner"
                />
            </div>

            <Container className="mt-5">
                <Carousel indicators className="w-100">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/Jupiter/Event/Thankyouevent/v2/Footwear_1500x460._SX1500_QL85_FMpng_.png"
                            alt="Slide 1"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/Jupiter/Event/Thankyouevent/v2/Unrec_beauty_1500x460._SX1500_QL85_FMpng_.png"
                            alt="Slide 2"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/Jupiter/Event/Thankyouevent/v2/Jew_1500x460._SX1500_QL85_FMpng_.png"
                            alt="Slide 3"
                        />
                    </Carousel.Item>
                </Carousel>
                <Container fluid className="mt-4">
                    <Carousel indicators={true} interval={3000}>

                        {/* Slide 1 */}
                        <Carousel.Item>
                            <Row className="g-3 justify-content-center px-3">

                                <Col xs={6} sm={4} md={2}>
                                    <Card className="h-100 shadow-sm border-0">
                                        <Card.Img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/BAU/Flip/WF/PFF/Tops._CB798874241_.png" className="img-fluid rounded" />
                                    </Card>
                                </Col>

                                <Col xs={6} sm={4} md={2}>
                                    <Card className="h-100 shadow-sm border-0">
                                        <Card.Img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/BAU/Flip/WF/PFF/Sarees-2._CB798874241_.png" className="img-fluid rounded" />
                                    </Card>
                                </Col>

                                <Col xs={6} sm={4} md={2}>
                                    <Card className="h-100 shadow-sm border-0">
                                        <Card.Img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/BAU/Flip/WF/PFF/Shoes._CB798874241_.png" className="img-fluid rounded" />
                                    </Card>
                                </Col>

                                <Col xs={6} sm={4} md={2}>
                                    <Card className="h-100 shadow-sm border-0">
                                        <Card.Img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/BAU/Flip/WF/PFF/Beauty._CB798874241_.png" className="img-fluid rounded" />
                                    </Card>
                                </Col>

                                <Col xs={6} sm={4} md={2}>
                                    <Card className="h-100 shadow-sm border-0">
                                        <Card.Img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/BAU/Flip/WF/PFF/Luggage._CB798874241_.png" className="img-fluid rounded" />
                                    </Card>
                                </Col>

                                <Col xs={6} sm={4} md={2}>
                                    <Card className="h-100 shadow-sm border-0">
                                        <Card.Img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/BAU/Flip/WF/PFF/Watches._CB798874241_.png" className="img-fluid rounded" />
                                    </Card>
                                </Col>

                            </Row>
                        </Carousel.Item>

                        {/* Slide 2 */}
                        <Carousel.Item>
                            <Row className="g-3 justify-content-center px-3">

                                <Col xs={6} sm={4} md={2}>
                                    <Card className="h-100 shadow-sm border-0">
                                        <Card.Img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/BAU/Flip/WF/PFF/Tops._CB798874241_.png" className="img-fluid rounded" />
                                    </Card>
                                </Col>

                                <Col xs={6} sm={4} md={2}>
                                    <Card className="h-100 shadow-sm border-0">
                                        <Card.Img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/BAU/Flip/WF/PFF/Sarees-2._CB798874241_.png" className="img-fluid rounded" />
                                    </Card>
                                </Col>

                                <Col xs={6} sm={4} md={2}>
                                    <Card className="h-100 shadow-sm border-0">
                                        <Card.Img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/BAU/Flip/WF/PFF/Shoes._CB798874241_.png" className="img-fluid rounded" />
                                    </Card>
                                </Col>

                                <Col xs={6} sm={4} md={2}>
                                    <Card className="h-100 shadow-sm border-0">
                                        <Card.Img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/BAU/Flip/WF/PFF/Beauty._CB798874241_.png" className="img-fluid rounded" />
                                    </Card>
                                </Col>

                                <Col xs={6} sm={4} md={2}>
                                    <Card className="h-100 shadow-sm border-0">
                                        <Card.Img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/BAU/Flip/WF/PFF/Luggage._CB798874241_.png" className="img-fluid rounded" />
                                    </Card>
                                </Col>

                                <Col xs={6} sm={4} md={2}>
                                    <Card className="h-100 shadow-sm border-0">
                                        <Card.Img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/BAU/Flip/WF/PFF/Watches._CB798874241_.png" className="img-fluid rounded" />
                                    </Card>
                                </Col>

                            </Row>
                        </Carousel.Item>

                    </Carousel>
                </Container>


                {/* ================= WOMEN’S SECTION ================= */}
                <div className="bg-warning-subtle  mt-1 mb-2">
                    <h3 className="fw-bold mt-5 mb-3 ms-5">Best Footwear</h3>

                    <Row className="g-3 px-5 py-2">
                        <Col xs={6} md={2}>
                            <Card className="h-100 text-center">
                                <Card.Img
                                    src="https://m.media-amazon.com/images/I/71Ak7pL7jLL._AC_UL480_QL65_.jpg"
                                    className="img-fluid rounded"
                                    style={{ height: "150px", objectFit: "contain" }}
                                />
                                <Card.Body>
                                    <p className="card-text small bg-warning-subtle ">Short description</p>
                                    <p className="card-text small text-danger ">Under 499</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={6} md={2}>
                            <Card className="h-100 text-center">
                                <Card.Img
                                    src="https://m.media-amazon.com/images/I/61RMzIzWHEL._AC_UL480_QL65_.jpg"
                                    className="img-fluid rounded"
                                    style={{ height: "150px", objectFit: "contain" }}
                                />
                                <Card.Body>
                                    <p className="card-text small bg-warning-subtle ">Short description</p>
                                    <p className="card-text small text-danger ">Under 499</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={6} md={2}>
                            <Card className="h-100 text-center">
                                <Card.Img
                                    src="https://m.media-amazon.com/images/I/61el7K3NPbL._AC_UL480_QL65_.jpg"
                                    className="img-fluid rounded"
                                    style={{ height: "150px", objectFit: "contain" }}
                                />
                                <Card.Body>
                                    <p className="card-text small bg-warning-subtle ">Short description</p>
                                    <p className="card-text small text-danger ">Under 499</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={6} md={2}>
                            <Card className="h-100 text-center">
                                <Card.Img
                                    src="https://m.media-amazon.com/images/I/71KiStWGEZL._AC_UL480_QL65_.jpg"
                                    className="img-fluid rounded"
                                    style={{ height: "150px", objectFit: "contain" }}
                                />
                                <Card.Body>
                                    <p className="card-text small bg-warning-subtle ">Short description</p>
                                    <p className="card-text small text-danger ">Under 499</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={6} md={2}>
                            <Card className="h-100 text-center">
                                <Card.Img
                                    src="https://m.media-amazon.com/images/I/51O8m1wTVVL._AC_UL480_QL65_.jpg"
                                    className="img-fluid rounded"
                                    style={{ height: "150px", objectFit: "contain" }}
                                />
                                <Card.Body>
                                    <p className="card-text small bg-warning-subtle ">Short description</p>
                                    <p className="card-text small text-danger ">Under 499</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={6} md={2}>
                            <Card className="h-100 text-center">
                                <Card.Img
                                    src="https://m.media-amazon.com/images/I/41SsO9Ubh1L._AC_UL480_QL65_.jpg"
                                    className="img-fluid rounded"
                                    style={{ height: "150px", objectFit: "contain" }}
                                />
                                <Card.Body>
                                    <p className="card-text small bg-warning-subtle ">Short description</p>
                                    <p className="card-text small text-danger ">Under 499</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className="bg-white  mt-1">
                    <h3 className="fw-bold mt-5 mb-3 ms-5">Budget add</h3>

                    <Row className="g-3 px-5 py-2">
                        <Col xs={6} md={2}>
                            <Card className="h-100 text-center">
                                <Card.Img
                                    src="https://m.media-amazon.com/images/I/618MdeNFBmL._AC_UL480_FMwebp_QL65_.jpg"
                                    className="img-fluid rounded"
                                    style={{ height: "150px", objectFit: "contain" }}
                                />
                                <Card.Body>
                                    <p className="card-text small bg-warning-subtle ">Short description</p>
                                    <p className="card-text small text-danger ">Under 499</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={6} md={2}>
                            <Card className="h-100 text-center">
                                <Card.Img
                                    src="https://m.media-amazon.com/images/I/81TbJv9sITL._AC_UL480_FMwebp_QL65_.jpg"
                                    className="img-fluid rounded"
                                    style={{ height: "150px", objectFit: "contain" }}
                                />
                                <Card.Body>
                                    <p className="card-text small bg-warning-subtle ">Short description</p>
                                    <p className="card-text small text-danger ">Under 499</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={6} md={2}>
                            <Card className="h-100 text-center">
                                <Card.Img
                                    src="https://m.media-amazon.com/images/I/41pcjRlHIFL._AC_UL480_FMwebp_QL65_.jpg"
                                    className="img-fluid rounded"
                                    style={{ height: "150px", objectFit: "contain" }}
                                />
                                <Card.Body>
                                    <p className="card-text small bg-warning-subtle ">Short description</p>
                                    <p className="card-text small text-danger ">Under 499</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={6} md={2}>
                            <Card className="h-100 text-center">
                                <Card.Img
                                    src="https://m.media-amazon.com/images/I/91tqTRlxyoL._AC_UL480_FMwebp_QL65_.jpg"
                                    className="img-fluid rounded"
                                    style={{ height: "150px", objectFit: "contain" }}
                                />
                                <Card.Body>
                                    <p className="card-text small bg-warning-subtle ">Short description</p>
                                    <p className="card-text small text-danger ">Under 499</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={6} md={2}>
                            <Card className="h-100 text-center">
                                <Card.Img
                                    src="https://m.media-amazon.com/images/I/51O8m1wTVVL._AC_UL480_QL65_.jpg"
                                    className="img-fluid rounded"
                                    style={{ height: "150px", objectFit: "contain" }}
                                />
                                <Card.Body>
                                    <p className="card-text small bg-warning-subtle ">Short description</p>
                                    <p className="card-text small text-danger ">Under 499</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={6} md={2}>
                            <Card className="h-100 text-center">
                                <Card.Img
                                    src="https://m.media-amazon.com/images/I/41SsO9Ubh1L._AC_UL480_QL65_.jpg"
                                    className="img-fluid rounded"
                                    style={{ height: "150px", objectFit: "contain" }}
                                />
                                <Card.Body>
                                    <p className="card-text small bg-warning-subtle ">Short description</p>
                                    <p className="card-text small text-danger ">Under 499</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>




            </Container>

            <div className='mt-3 bg-white p-3'>
                <Row>
                    <Col sm={4}>
                     
                        <h4 className='ms-2'>Department</h4>
                        <Form>
                            <Form.Check type="radio" label="All" name="department" id="dept-radio1" className="black-radio" />
                            <Form.Check type="radio" label="Baby" name="department" id="dept-radio2" />
                            <Form.Check type="radio" label="Bags, Wallets and Luggage" name="department" id="dept-radio3" />
                        </Form>

                        <h4 className='mt-5 ms-2'>Customer Reviews</h4>
                        <Form>
                            <Form.Check type="radio" label="All" name="reviews" id="review-radio1" className="black-radio" />

                            <div className='d-flex align-items-center mt-2'>
                                <Form.Check type="radio" name="reviews" id="review-radio2" className="black-radio" />
                                <img src="https://thumbs.dreamstime.com/b/glossy-yellow-d-four-star-rating-render-image-stars-golden-shape-quality-service-measurement-ranking-system-review-symbol-253258195.jpg"
                                    alt="4 stars"
                                    style={{ height: "20px", width: "50px", objectFit: "contain", marginLeft: "5px" }} />
                                <h6 className='fw-normal ms-1'>and up</h6>
                            </div>

                            <div className='d-flex align-items-center mt-2'>
                                <Form.Check type="radio" name="reviews" id="review-radio3" className="black-radio" />
                                <img src="https://thumbs.dreamstime.com/b/glossy-yellow-d-four-star-rating-render-image-stars-golden-shape-quality-service-measurement-ranking-system-review-symbol-253258195.jpg"
                                    alt="4 stars"
                                    style={{ height: "20px", width: "50px", objectFit: "contain", marginLeft: "5px" }} />
                                <h6 className='fw-normal ms-1'>and up</h6>
                            </div>
                        </Form>

                        {/* Price */}
                        <h4 className='ms-2 mt-5'>Price</h4>
                        <Form>
                            <Form.Check type="radio" label="All" name="price" id="price-radio1" className="black-radio" />
                            <Form.Check type="radio" label="Under 100" name="price" id="price-radio2" />
                            <Form.Check type="radio" label="Under 10000" name="price" id="price-radio3" />
                        </Form>
                    </Col>

                    {/* Products */}
                    <Col sm={8} className='p-3'>
                        <Row className='mt-3'>
                            <Col md={3}>
                                <Card className="h-100 text-center mt-3 border-0">
                                    <Card.Img src="https://m.media-amazon.com/images/I/618MdeNFBmL._AC_UL480_FMwebp_QL65_.jpg"
                                        className="img-fluid rounded" style={{ height: "150px", objectFit: "contain" }} />
                                    <Card.Body>
                                        <div className='d-flex justify-content-between align-items-center p-2'>
                                            <div className='bg-danger mb-2'><p>72% off</p></div>
                                            <p className='text-danger'>Limited time deal</p>
                                        </div>
                                        <p className="card-text small bg-warning-subtle">Short description</p>
                                        <p className="card-text small text-danger">Under 499</p>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className="h-100 text-center mt-3 border-0">
                                    <Card.Img src="https://m.media-amazon.com/images/I/71I53evweVL._SY879_.jpg"
                                        className="img-fluid rounded" style={{ height: "150px", objectFit: "contain" }} />
                                    <Card.Body>
                                        <div className='d-flex justify-content-between align-items-center p-2'>
                                            <div className='bg-danger mb-2 '><p>72% off</p></div>
                                            <p className='text-danger'>Limited time deal</p>
                                        </div>
                                        <p className="card-text small bg-warning-subtle">Short description</p>
                                        <p className="card-text small text-danger">Under 499</p>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className="h-100 text-center mt-3 border-0">
                                    <Card.Img src="https://m.media-amazon.com/images/I/91BGjOT9h0L._SX679_.jpg"
                                        className="img-fluid rounded" style={{ height: "150px", objectFit: "contain" }} />
                                    <Card.Body>
                                        <div className='d-flex justify-content-between align-items-center p-2 '>
                                            <div className='bg-danger mb-2'><p>72% off</p></div>
                                            <p className='text-danger'>Limited time deal</p>
                                        </div>
                                        <p className="card-text small bg-warning-subtle">Short description</p>
                                        <p className="card-text small text-danger">Under 499</p>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className="h-100 text-center mt-3 border-0">
                                    <Card.Img src="https://m.media-amazon.com/images/I/51sSJUx8mwL._SY879_.jpg"
                                        className="img-fluid rounded" style={{ height: "150px", objectFit: "contain" }} />
                                    <Card.Body>
                                        <div className='d-flex justify-content-between align-items-center p-2'>
                                            <div className='bg-danger mb-2'><p>72% off</p></div>
                                            <p className='text-danger'>Limited time deal</p>
                                        </div>
                                        <p className="card-text small bg-warning-subtle">Short description</p>
                                        <p className="card-text small text-danger">Under 499</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                 <Row>
                    <Col sm={4}>
                     

                    </Col>

                    {/* Products */}
                    <Col sm={8} className='p-3'>
                        <Row className='mt-2'>
                            <Col md={3}>
                                <Card className="h-100 text-center mt-3 border-0">
                                    <Card.Img src="https://m.media-amazon.com/images/I/71l2sZoikXL._SY879_.jpg"
                                        className="img-fluid rounded" style={{ height: "150px", objectFit: "contain" }} />
                                    <Card.Body>
                                        <div className='d-flex justify-content-between align-items-center p-2'>
                                            <div className='bg-danger mb-2'><p>72% off</p></div>
                                            <p className='text-danger'>Limited time deal</p>
                                        </div>
                                        <p className="card-text small bg-warning-subtle">Short description</p>
                                        <p className="card-text small text-danger">Under 499</p>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className="h-100 text-center mt-3 border-0">
                                    <Card.Img src="https://m.media-amazon.com/images/I/51sSJUx8mwL._SY879_.jpg"
                                        className="img-fluid rounded" style={{ height: "150px", objectFit: "contain" }} />
                                    <Card.Body>
                                        <div className='d-flex justify-content-between align-items-center p-2'>
                                            <div className='bg-danger mb-2'><p>72% off</p></div>
                                            <p className='text-danger'>Limited time deal</p>
                                        </div>
                                        <p className="card-text small bg-warning-subtle">Short description</p>
                                        <p className="card-text small text-danger">Under 499</p>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className="h-100 text-center mt-3 border-0">
                                    <Card.Img src="https://m.media-amazon.com/images/I/618MdeNFBmL._AC_UL480_FMwebp_QL65_.jpg"
                                        className="img-fluid rounded" style={{ height: "150px", objectFit: "contain" }} />
                                    <Card.Body>
                                        <div className='d-flex justify-content-between align-items-center p-2'>
                                            <div className='bg-danger mb-2'><p>72% off</p></div>
                                            <p className='text-danger'>Limited time deal</p>
                                        </div>
                                        <p className="card-text small bg-warning-subtle">Short description</p>
                                        <p className="card-text small text-danger">Under 499</p>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className="h-100 text-center mt-3 border-0">
                                    <Card.Img src="https://m.media-amazon.com/images/I/71I53evweVL._SY879_.jpg"
                                        className="img-fluid rounded" style={{ height: "150px", objectFit: "contain" }} />
                                    <Card.Body>
                                        <div className='d-flex justify-content-between align-items-center p-2'>
                                            <div className='bg-danger mb-2'><p>72% off</p></div>
                                            <p className='text-danger'>Limited time deal</p>
                                        </div>
                                        <p className="card-text small bg-warning-subtle">Short description</p>
                                        <p className="card-text small text-danger">Under 499</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            </div>

        </div>
    )

}

export default Fashion