import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { otpContext } from "../context/ContextShare";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'

export default function Otppage() {
  const [otp1, setOtp1] = useState("");
  const { otp } = useContext(otpContext)
  //const { userdetails } = useContext(userContext)
  // console.log(otp)
  const navigate = useNavigate()
  const handleSubmit = async () => {
    console.log(otp)
    if (otp1 == otp) {
      toast.success("OTP Verified Successfully!");
      

    }

  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-3 rounded shadow bg-white" style={{ width: "500px", height: "400px" }}>



        <h5 className="fw-bold mt-2">Verify email address</h5>
        <p className=" small text-muted">
          To verify your email we send a OTP to your mailid.
        </p>

        {/* OTP Form */}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold small">Enter OTP</Form.Label>
            <Form.Control
              type="text"
              maxLength="6"
              value={otp1}
              onChange={(e) => setOtp1(e.target.value)}
              placeholder="••••••"
            />
          </Form.Group>

          <Link to={'/Loginpage'}> <Button
            type="submit"
            className="w-100"
            variant="warning"
          >
            Login
          </Button></Link>
        </Form>

        <p className="text-center mt-3 small">
          By creating an account or logging in you agree to Amazon's
          <span className="text-primary" style={{ cursor: "pointer" }}>
            Conditions of use,Privacy Notice and Amazon terms and conditions.
          </span>
        </p>
      </div>
      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
    </div>
  );
}
