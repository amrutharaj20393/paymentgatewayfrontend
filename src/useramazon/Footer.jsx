import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <>
     <footer className="bg-dark text-light pt-5 ">

      <div className="text-center py-3 bg-secondary bg-opacity-25">
        <a href="#" className="text-light text-decoration-none">Back to top</a>
      </div>

      <Container className="py-5">

        <Row className="g-4">

          <Col xs={6} md={3}>
            <h5 className="fw-bold">Get to Know Us</h5>
            <ul className="list-unstyled mt-3">
              <li><a href="#" className="text-light text-decoration-none">About Amazon</a></li>
              <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-light text-decoration-none">Press Releases</a></li>
              <li><a href="#" className="text-light text-decoration-none">Amazon Science</a></li>
            </ul>
          </Col>

          <Col xs={6} md={3}>
            <h5 className="fw-bold">Connect with Us</h5>
            <ul className="list-unstyled mt-3">
              <li><a href="#" className="text-light text-decoration-none">Facebook</a></li>
              <li><a href="#" className="text-light text-decoration-none">Twitter</a></li>
              <li><a href="#" className="text-light text-decoration-none">Instagram</a></li>
            </ul>
          </Col>

          <Col xs={6} md={3}>
            <h5 className="fw-bold">Make Money with Us</h5>
            <ul className="list-unstyled mt-3">
              <li><a href="#" className="text-light text-decoration-none">Sell on Amazon</a></li>
              <li><a href="#" className="text-light text-decoration-none">Become an Affiliate</a></li>
              <li><a href="#" className="text-light text-decoration-none">Advertise Your Products</a></li>
              <li><a href="#" className="text-light text-decoration-none">Amazon Global Selling</a></li>
            </ul>
          </Col>

          <Col xs={6} md={3}>
            <h5 className="fw-bold">Let Us Help You</h5>
            <ul className="list-unstyled mt-3">
              <li><a href="#" className="text-light text-decoration-none">Your Account</a></li>
              <li><a href="#" className="text-light text-decoration-none">Returns Centre</a></li>
              <li><a href="#" className="text-light text-decoration-none">Help</a></li>
              <li><a href="#" className="text-light text-decoration-none">COVID-19 Support</a></li>
            </ul>
          </Col>

        </Row>

        {/* Amazon Logo */}
        <div className="text-center mt-5">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
            width="120"
          />
        </div>

      </Container>

      {/* Bottom Bar */}
      <div className="bg-dark text-center py-3 border-top border-secondary">
        <small>© 2025 Amazon Clone — All rights reserved.</small>
      </div>

    </footer>
    </>
  )
}

export default Footer