import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'
import { amazonloginemailApi, amazonregisterApi, GoogleRegisterApi } from "../services/allApi";
import { googleStatusContext, otpContext } from "../context/ContextShare";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function Register() {
    const [userdetails, setUserDetails] = useState({
        username: "",
        email: "",
        password: ""
    })
    //const [error,setError]=useState("")
    const { setOtp } = useContext(otpContext)
    const { setGoogleStatus } = useContext(googleStatusContext)
    const navigate = useNavigate()

    const handleRegister = async () => {

        const { username, email, password } = userdetails
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            //setError("Invalid email format!");
            toast.warning("Invalid email format!")
            return;
        }
        if (!username || !email || !password) {
            toast.info("please fill all details")
        }
        else {
            console.log(username, email, password)
            const result1 = await amazonregisterApi({ username, email, password })
           
                if (result1.status == 200) {
                    const result = await amazonloginemailApi({ email })
                     console.log(result)

                    toast.success(" Otp send to your mail id")

                    setOtp(result.data.otp)
                    setTimeout(() => {
                        navigate('/Otp')
                    }, 1000)

                }
                else if (result1.status == 400) {

                    toast.warning("Email id already registered")
                    setUserDetails({
                        username: "",
                        email: "",
                        password: ""
                    })
                }
                else {
                    toast.error("something went wrong")
                    setUserDetails({
                        username: "",
                        email: "",
                        password: ""
                    })
                }
            
            // console.log(result1)

        }

    }

    const handleGooglelogin = async (credentialResponse) => {
        const details = jwtDecode(credentialResponse.credential)
        console.log(details)

        const result = await GoogleRegisterApi({ username: details.name, email: details.email, password: 'googlepassword' })
        //console.log(result)
        if (result.status == 200) {
            toast.success("Register Successfully")
            sessionStorage.setItem("existingUser", JSON.stringify(result.data.existinguser))
            sessionStorage.setItem("token", result.data.token)
            setGoogleStatus("registered")
            setTimeout(() => {
                navigate('/')
            }, 1000)


        }
        else {
            toast.error("something went wrong")
        }
    }
    return (
        <div className="d-flex flex-column align-items-center mt-5">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                width="120"
                alt="Amazon Logo"
            />

            <div
                className="border p-4 mt-3"
                style={{ width: "350px", borderRadius: "8px" }}
            >
                <h4 className="fw-bold mb-3">Create account</h4>

                <label className="fw-bold small">Your name</label>
                <input type="text" className="form-control mb-3" value={userdetails.username} onChange={(e) => setUserDetails({ ...userdetails, username: e.target.value })} />

                <label className="fw-bold small">Your email</label>
                <input type="text" className="form-control mb-3" value={userdetails.email} onChange={(e) => setUserDetails({ ...userdetails, email: e.target.value })} />

                <label className="fw-bold small">Password</label>
                <input
                    type="password"
                    placeholder="At least 6 characters"
                    className="form-control mb-3"
                    value={userdetails.password} onChange={(e) => setUserDetails({ ...userdetails, password: e.target.value })}
                />

                <button
                    className="btn w-100"
                    style={{ background: "#f0c14b", borderColor: "#a88734" }}
                    onClick={handleRegister}
                >
                    Continue
                </button>

                <p className="small mt-3">
                    By creating an account, you agree to Amazon's{" "}
                    <span className="text-primary">Conditions of Use</span> and{" "}
                    <span className="text-primary">Privacy Notice</span>.
                </p>

                <div className="mt-3">
                    <span className="small">Already have an account? </span>
                    <Link className="text-primary small" to="/Loginpage">
                        Sign in
                    </Link>
                </div>

            </div>
            <span className="small text-muted">Or</span>


            <GoogleLogin width={"350px"}
                onSuccess={credentialResponse => {
                    console.log(credentialResponse)
                    handleGooglelogin(credentialResponse)
                }}
                onError={() => {
                    console.log('Login Failed')
                }}
            />
            <ToastContainer theme='colored' position='top-center' autoClose={2000} />
        </div>
    );
}

export default Register;
