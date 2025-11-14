import React, { useState } from 'react'
//import { amountApi } from '../services/allApi';

function Amount() {
    const [amount, setAmount] = useState("");

    // const makePayment = async (data) => {
    //     console.log(data)
    //     const result = await amountApi({ data })
    //     console.log(result)
    //     window.location.href = result.data.url;



    //     ///console.log(data)

    // }


    return (
        <>
            {/* <div>
                <h1 className='text-red-500 text-3xl'>Task By:Amrutha Raj</h1>
                <div >
                    <div>
                        <h2 className='text-emerald-600 text-bold mx-5 my-2'> Amount</h2>
                    </div>
                    <div className='md:flex justify-center items-center  px-5  w-100'>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" className='me-2 p-1' />
                        <button type="button" className='bg-emerald-800 text-white px-5 p-1 rounded  hover:bg-white hover:border border-emerald-500 hover:text-emerald-600 w-full' onClick={() => { makePayment(amount) }}>Pay Now</button>
                    </div>


                </div>
            </div> */}

        </>
    )
}

export default Amount