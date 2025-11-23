import React, { useEffect, useState } from "react";
import { orderListApi } from "../services/allApi";

function Orderpage() {
    const [orders, setcartItem] = useState([])
    const [email, setEmail] = useState("")
    // const orders = [
    //     {
    //         orderId: "OD12345",
    //         date: "2025-01-12",
    //         total: 1599,
    //         status: "Delivered",
    //         items: [
    //             {
    //                 name: "Boat Headphones",
    //                 qty: 1,
    //                 price: 699,
    //                 image: "https://via.placeholder.com/100"
    //             },
    //             {
    //                 name: "Laptop Stand",
    //                 qty: 1,
    //                 price: 900,
    //                 image: "https://via.placeholder.com/100"
    //             }
    //         ]
    //     },
    //     {
    //         orderId: "OD67890",
    //         date: "2025-02-01",
    //         total: 499,
    //         status: "Out for Delivery",
    //         items: [
    //             {
    //                 name: "USB Cable",
    //                 qty: 2,
    //                 price: 249,
    //                 image: "https://via.placeholder.com/100"
    //             }
    //         ]
    //     }
    // ];

    const getOrderList = async () => {
        //const user = JSON.parse(sessionStorage.getItem("existingUser"));
        const result = await orderListApi( email)
        console.log(result)
        if (result.status == 200) {
            setcartItem(result.data.cartItems)
        }
        else {
            console.log("no items to show ")
            setcartItem([])
        }
    }

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("existingUser"));

        if (user && user.email) {
            setEmail(user.email);
        } else {
            navigate('/');
        }
    }, []);

    // run getCartDet only when email is set
    useEffect(() => {
        if (email) {
            getOrderList();
        }
    }, [email]);


    return (
        <div className="container py-4">
            <h3 className="fw-bold mb-4">Your Orders</h3>

            {orders.map((order, index) => (
                <div key={index} className="card mb-4 shadow-sm p-3">

                    <div className="d-flex justify-content-between">
                        <div>
                            <p className="mb-1"><strong>Order ID:</strong> OD1125</p>
                            <p className="mb-1"><strong>Date:</strong> 26/11/2025</p>
                            <p className="mb-1"><strong>Status:</strong>
                                <span className="text-success fw-bold"> {order.status}</span>
                            </p>
                        </div>

                        <div>

                        </div>
                    </div>

                    <hr />


                    <div className="d-flex align-items-center mb-3">
                        <img src={order.image} alt="" className="me-3 rounded" width="80" height="80" />

                        <div>
                            <h6 className="mb-1">{order.name}</h6>
                            <p className="mb-0">Qty: {order.quantity}</p>
                            <p className="mb-0 text-primary">₹{order.price}</p>
                        </div>
                    </div>


                    <div className="d-flex gap-3 mt-3">
                        <button className="btn btn-warning">Track Order</button>
                        <button className="btn btn-outline-secondary">View Invoice</button>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default Orderpage;
