import React, { createContext, useState, useEffect } from 'react'
export const allBlogAddContext = createContext("")
export const otpContext = createContext("")
export const cartcountContext = createContext("")
export const AuthContext = createContext();
export const deleteContext = createContext("")
export const orderStatusContext=createContext("")
export const googleStatusContext=createContext("")
function ContextShare({ children }) {
    const [addBlogStatus, setaddBlogStatus] = useState([])
    const [otp, setOtp] = useState("")
    const [cartcount, setCartCount] = useState([])
     const [deleteStatus, setDeleteStatus] = useState("")
     const [orderStatus,setOrderStatus]=useState("")
      const [googleStatus,setGoogleStatus]=useState("")
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
                        <deleteContext.Provider value={{deleteStatus, setDeleteStatus}}>
                            <orderStatusContext.Provider value={{orderStatus, setOrderStatus}}>
                                <googleStatusContext.Provider value={{googleStatus,setGoogleStatus}}>
                        <AuthContext.Provider value={{ token, setToken }}>

                            {
                                children
                            }
                        </AuthContext.Provider>
                        </googleStatusContext.Provider>
                        </orderStatusContext.Provider>
                     </deleteContext.Provider>
                    </cartcountContext.Provider>
                </otpContext.Provider>
            </allBlogAddContext.Provider>
        </div>
    )
}

export default ContextShare