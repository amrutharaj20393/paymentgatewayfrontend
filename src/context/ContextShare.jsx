import React, { createContext, useState, useEffect } from 'react'
export const allBlogAddContext = createContext("")
export const otpContext = createContext("")
export const cartcountContext = createContext("")
export const AuthContext = createContext();
//export const userContext = createContext("")
function ContextShare({ children }) {
    const [addBlogStatus, setaddBlogStatus] = useState([])
    const [otp, setOtp] = useState("")
    const [cartcount, setCartCount] = useState([])
    //const [userdetails, setUserDetails] = useState({})
    const [token, setToken] = useState("");
    useEffect(() => {
        const storedToken = sessionStorage.getItem("token");
        if (storedToken) setToken(storedToken);
    }, []);
    return (
        <div>
            <allBlogAddContext.Provider value={{ addBlogStatus, setaddBlogStatus }}>
                <otpContext.Provider value={{ otp, setOtp }}>
                    <cartcountContext.Provider value={{ cartcount, setCartCount }}>
                        <AuthContext.Provider value={{ token, setToken }}>

                            {
                                children
                            }
                        </AuthContext.Provider>
                    </cartcountContext.Provider>
                </otpContext.Provider>
            </allBlogAddContext.Provider>
        </div>
    )
}

export default ContextShare