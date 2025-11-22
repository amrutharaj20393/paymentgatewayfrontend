import React, { createContext, useState } from 'react'
export const allBlogAddContext = createContext("")
export const otpContext = createContext("")
//export const userContext = createContext("")
function ContextShare({ children }) {
    const [addBlogStatus, setaddBlogStatus] = useState([])
    const [otp, setOtp] = useState("")
    //const [userdetails, setUserDetails] = useState({})

    return (
        <div>
            <allBlogAddContext.Provider value={{ addBlogStatus, setaddBlogStatus }}>
                <otpContext.Provider value={{ otp, setOtp }}>
                    


                        {
                            children
                        }
                  
                </otpContext.Provider>
            </allBlogAddContext.Provider>
        </div>
    )
}

export default ContextShare