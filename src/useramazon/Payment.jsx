import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // If using react-router

function Payment() {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <Card className="text-center p-5" style={{ maxWidth: "500px", width: "100%" }}>
        <div className="mb-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt="success"
            style={{ width: "80px", height: "80px" }}
          />
        </div>
        <h3 className="text-success mb-3">Payment Successful!</h3>
        <p className="mb-3">
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        <p className="mb-4">You will receive a confirmation email shortly.</p>
        <Link to="/">
          <Button variant="primary" className="w-100">
            Continue Shopping
          </Button>
        </Link>
      </Card>
    </div>
  );
}

export default Payment;
