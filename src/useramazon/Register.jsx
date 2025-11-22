import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'
import { amazonloginemailApi, amazonregisterApi } from "../services/allApi";
import { otpContext } from "../context/ContextShare";

function Register() {
    const [userdetails, setUserDetails] = useState({
        username: "",
        email: "",
        password: ""
    })
    const { setOtp } = useContext(otpContext)
    const navigate = useNavigate()

    const handleRegister = async () => {
        const { username, email, password } = userdetails
        if (!username || !email || !password) {
            toast.info("please fill all details")
        }
        else {
            const result1 = await amazonregisterApi({ username, email, password })
            console.log(result1)
            if (result1.status == 200) {
                const result = await amazonloginemailApi({ email })
                console.log(result)

                toast.success(" Success")

                setOtp(result.data.otp)
                setTimeout(() => {
                    navigate('/Otp')
                }, 1000)

            }
            else if (result.status == 400) {

                toast.warning(result.response.data)
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
                    <Link className="text-primary small" to="/login">
                        Sign in
                    </Link>
                </div>

            </div>
            <span className="small text-muted">Or</span>
            <button className="bg-light border w-25 py-2 mt-3 mb-3 rounded d-flex justify-content-center align-items-center gap-2">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgFBviof7MeRdm0h8w_l9JBpqxLzWru9IMnQ&s"
                    alt="Google"
                    style={{ width: "20px" }}
                />
                <span className="small fw-bold">Sign in with Google</span>
            </button>
            <ToastContainer theme='colored' position='top-center' autoClose={2000} />
        </div>
    );
}

export default Register;
