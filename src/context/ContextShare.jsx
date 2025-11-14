import React, { createContext, useState } from 'react'
export const allBlogAddContext = createContext("")
function ContextShare({ children }) {
    const [addBlogStatus, setaddBlogStatus] = useState([])
    return (
        <div>
            <allBlogAddContext.Provider value={{ addBlogStatus, setaddBlogStatus }}>
                {
                    children
                }

            </allBlogAddContext.Provider>
        </div>
    )
}

export default ContextShare