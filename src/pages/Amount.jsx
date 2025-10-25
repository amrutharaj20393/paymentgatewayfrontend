import React, { useState } from 'react'
import { amountApi } from '../services/allApi';

function Amount() {
    const [amount, setAmount] = useState("");

    const makePayment = async (data) => {
        console.log(data)
            const result = await amountApi({data})
            console.log(result)
            window.location.href = result.data.url; 

        

        ///console.log(data)

    }

   
    return (
        <>
            <div>
                <h1>Amrutha</h1>
                <div className='md:flex justify-center items-center  px-5 py-10 w-100'>

                    <h2>Enter Amount:</h2>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
                    <button onClick={()=>{makePayment(amount)}}>Pay Now</button>
                </div>
            </div>

        </>
    )
}

export default Amount