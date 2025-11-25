import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { amazonloginApi, amazonloginemailApi, GoogleRegisterApi } from "../services/allApi";
import { toast, ToastContainer } from 'react-toastify'
import { AuthContext, googleStatusContext, otpContext } from "../context/ContextShare";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
function Login() {
    const [email, setEmail] = useState("")
   
    //const { userdetails } = useContext(userContext)
    const navigate = useNavigate()
     const { setGoogleStatus } = useContext(googleStatusContext)

    const handleotp = async () => {

        // console.log(email)

        if (!email) {
            toast.info("please fill all details")
        }
        else {

            const result = await amazonloginApi(email)
           // console.log(result)
            if (result.status == 200) {
                sessionStorage.setItem("existingUser", JSON.stringify(result.data.existinguser))
              
                toast.success(" Success")
                navigate('/Loginpassword')



            }
            else if (result.status == 400) {

                toast.warning(result.response.data)

            }
            else {
                toast.error("something went wrong")

            }
        }

    }
    const handleGooglelogin = async (credentialResponse) => {
        const details = jwtDecode(credentialResponse.credential)
        //console.log(details)
        const result = await GoogleRegisterApi({ username: details.name, email: details.email, password: 'googlepassword' })
        console.log(result)
        if (result.status == 200) {
            toast.success("Login Successfully")
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
            {/* Amazon Logo */}
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                width="120"
                alt="Amazon Logo"
            />

            {/* Login Box */}
            <div
                className="border p-4 mt-3"
                style={{ width: "350px", borderRadius: "8px" }}
            >
                <h4 className="fw-bold mb-3">Sign in</h4>

                {/* Email */}
                <label className="fw-bold small">Email </label>
                <input
                    type="text"
                    value={email}
                    className="form-control mb-3"
                    style={{ height: "40px" }}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* Continue Button */}

                <button
                    className="btn w-100"
                    style={{ background: "#f0c14b", borderColor: "#a88734" }} onClick={handleotp}
                >
                    Continue
                </button>


                <p className="small mt-3">
                    By continuing, you agree to Amazon's{" "}
                    <span className="text-primary">Conditions of Use</span> and{" "}
                    <span className="text-primary">Privacy Notice</span>.
                </p>

                <p className="small text-primary">Need help?</p>
            </div>

            {/* Divider */}
            <div className="d-flex align-items-center gap-2 mt-3" style={{ width: "350px" }}>
                <div className="flex-grow-1 border-bottom"></div>
                <span className="small text-muted">New to Amazon?</span>
                <div className="flex-grow-1 border-bottom"></div>
            </div>

            {/* Create Account */}
            <Link
                to="/Registerpage"
                className="btn mt-3"
                style={{
                    width: "350px",
                    background: "#e7e9ec",
                    borderColor: "#adb1b8"
                }}
            >
                Create your Amazon account
            </Link>
            <span className="small text-muted">Or</span>


            {/* <span className="small fw-bold">Sign in with Google</span> */}
            <GoogleLogin width={"350px"} height={"150px"}
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

export default Login;
