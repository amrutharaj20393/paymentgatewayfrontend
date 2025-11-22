import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { amazonloginApi, amazonloginemailApi } from "../services/allApi";
import { toast, ToastContainer } from 'react-toastify'
import { otpContext } from "../context/ContextShare";
function Login() {
    const [email, setEmail] = useState("")
   //const { userdetails } = useContext(userContext)
    const navigate = useNavigate()
    
    const handleotp = async () => {

       // console.log(email)

        if (!email) {
            toast.info("please fill all details")
        }
        else {

            const result = await amazonloginApi( email )
            console.log(result)
            if (result.status == 200) {
                 sessionStorage.setItem("existingUser", JSON.stringify(result.data.existinguser))

                toast.success(" Success")
                
               

            }
            else if (result.status == 400) {

                toast.warning(result.response.data)

            }
            else {
                toast.error("something went wrong")

            }
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
                
               <Link to='/Loginpassword'><button
                    className="btn w-100"
                    style={{ background: "#f0c14b", borderColor: "#a88734" }} onClick={handleotp}
                >
                    Continue
                </button></Link> 


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

export default Login;
