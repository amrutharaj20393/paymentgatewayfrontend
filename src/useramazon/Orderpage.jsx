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
        const result = await orderListApi(email)
       // console.log(result)
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

            {orders.length > 0 ?
                (orders.map((order, index) => (
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
                ))) : (<p>Zero Orders placed</p>)
            }

            <div id="productCarousel" className="carousel slide bg-white " data-bs-ride="false">
                <h5 className='fw-bold '>Inspired by Your browsing history</h5>
                <div className="carousel-inner p-1">

                    <div className="carousel-item active">
                        <div className="d-flex justify-content-center gap-2">
                            <div className="col-6 col-sm-3 col-lg-2">
                                <div className="card border-0 ">
                                    <img src="https://m.media-amazon.com/images/G/31/IMG20/Home/2024/HFRevamp/Layers._SS400_QL85_.jpg" className="card-img-top" style={{
                                        height: "300px",
                                        width: "100%",
                                        objectFit: "contain"
                                    }} />
                                    <div className="card-body text-center p-0 m-0">
                                        <h6 className="card-title text-primary p-2">Lukzer 2 Seater Green Leaves Universal Sofa Cover | 360° Fully Covered Anti-Slip Washable........</h6>
                                        <div className="card-body p-0 m-0">
                                            <p className="card-text small text-danger">Rs:885</p>
                                            <p className="card-text small text-black">Free delivery by 23-oct</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-6 col-sm-3 col-lg-2">
                                <div className="card border-0">
                                    <img src="https://m.media-amazon.com/images/I/51ZiROH9i6L._SR480,440_AC_.jpg" className="card-img-top" style={{
                                        height: "300px",
                                        width: "100%",
                                        objectFit: "contain"
                                    }} />
                                    <div className="card-body text-center p-0 m-0">
                                        <h6 className="card-title text-primary p-2">Xtrim Puzzle Exercise Mat High-Density EVA Foam Mat, Interlocking Tiles, Shock Proof, ..........</h6>
                                        <div className="card-body p-0 m-0">
                                            <p className="card-text small text-danger">Rs:885</p>
                                            <p className="card-text small text-black">Free delivery by 23-oct</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-6 col-sm-3 col-lg-2">
                                <div className="card border-0" >
                                    <img src="https://m.media-amazon.com/images/I/21o88VcjQ7L._SR480,440_AC_.jpg" className="card-img-top" style={{
                                        height: "300px",
                                        width: "100%",
                                        objectFit: "contain"
                                    }} />
                                    <div className="card-body text-center p-0 m-0">
                                        <h6 className="card-title text-primary p-2">Boldfit Yoga Mat for Women & Men - TPE Eco Friendly 6mm thickness Non Slip Classic Pro Exercise Mat for .....</h6>
                                        <div className="card-body p-0 m-0">
                                            <p className="card-text small text-danger">Rs:885</p>
                                            <p className="card-text small text-black">Free delivery by 23-oct</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-6 col-sm-3 col-lg-2">
                                <div className="card border-0">
                                    <img src="https://m.media-amazon.com/images/I/41UIxg3-XPL._SR480,440_AC_.jpg" className="card-img-top" style={{
                                        height: "300px",
                                        width: "100%",
                                        objectFit: "contain"
                                    }} />
                                    <div className="card-body text-center p-0 m-0">
                                        <h6 className="card-title text-primary p-2">Nermosa Women Printed Anarkali Kurta and Pant Set with Dupatta</h6>
                                        <div className="card-body p-0 m-0">
                                            <p className="card-text small text-danger">Rs:885</p>
                                            <p className="card-text small text-black">Free delivery by 23-oct</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-6 col-sm-3 col-lg-2">
                                <div className="card border-0">
                                    <img src="https://m.media-amazon.com/images/I/319WYcef6JL._SR480,440_AC_.jpg" className="card-img-top" style={{
                                        height: "300px",
                                        width: "100%",
                                        objectFit: "contain"
                                    }} />
                                    <div className="card-body text-center p-0 m-0">
                                        <h6 className="card-title text-primary p-2">Boldfit Blaze Football Practise Foot Ball Training Football Size 5 Original for All Ages Group Rubber ......</h6>
                                        <div className="card-body  p-0 m-0">
                                            <p className="card-text small text-danger">Rs:885</p>
                                            <p className="card-text small text-black">Free delivery by 23-oct</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-6 col-sm-3 col-lg-2">
                                <div className="card border-0" >
                                    <img src="https://m.media-amazon.com/images/I/31AopMCvXPL._SR480,440_AC_.jpg" className="card-img-top" style={{
                                        height: "300px",
                                        width: "100%",
                                        objectFit: "contain"
                                    }} />
                                    <div className="card-body text-center p-0 m-0">
                                        <h6 className="card-title text-primary p-2">Kore PVC 10KG Combo 3 Home Gym Set with One 3 Ft Curl and One Pair Dumbbell Rods with Gym Bag and Gym....</h6>
                                        <div className="card-body p-0 m-0">
                                            <p className="card-text small text-danger">Rs:885</p>
                                            <p className="card-text small text-black">Free delivery by 23-oct</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="carousel-item ">
                        <div className="d-flex justify-content-center gap-2">

                            <div className="col-6 col-sm-3 col-lg-2">
                                <div className="card border-0" >
                                    <img src="https://via.placeholder.com/150" className="card-img-top" style={{
                                        height: "300px",
                                        width: "100%",
                                        objectFit: "contain"
                                    }} />
                                    <div className="card-body text-center p-0 m-0">
                                        <h6 className="card-title text-primary">Product One</h6>
                                        <div className="card-bodyp-0 m-0">
                                            <p className="card-text small text-danger">Rs:885</p>
                                            <p className="card-text small text-black">Free delivery by 23-oct</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-6 col-sm-3 col-lg-2">
                                <div className="card border-0" >
                                    <img src="https://via.placeholder.com/150" className="card-img-top" style={{
                                        height: "300px",
                                        width: "100%",
                                        objectFit: "contain"
                                    }} />
                                    <div className="card-body text-center">
                                        <h6 className="card-title text-primary p-0 m-0">Product One</h6>
                                        <div className="card-body p-0 m-0">
                                            <p className="card-text small text-danger">Rs:885</p>
                                            <p className="card-text small text-black">Free delivery by 23-oct</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-6 col-sm-3 col-lg-2">
                                <div className="card border-0">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" style={{
                                        height: "300px",
                                        width: "100%",
                                        objectFit: "contain"
                                    }} />
                                    <div className="card-body text-center p-0 m-0">
                                        <h6 className="card-title text-primary">Product One</h6>
                                        <div className="card-body p-0 m-0">
                                            <p className="card-text small text-danger">Rs:885</p>
                                            <p className="card-text small text-black">Free delivery by 23-oct</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-6 col-sm-3 col-lg-2">
                                <div className="card border-0" >
                                    <img src="https://via.placeholder.com/150" className="card-img-top" style={{
                                        height: "300px",
                                        width: "100%",
                                        objectFit: "contain"
                                    }} />
                                    <div className="card-body text-center p-0 m-0">
                                        <h6 className="card-title text-primary">Product One</h6>
                                        <div className="card-body p-0 m-0">
                                            <p className="card-text small text-danger">Rs:885</p>
                                            <p className="card-text small text-black">Free delivery by 23-oct</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-6 col-sm-3 col-lg-2">
                                <div className="card border-0" >
                                    <img src="https://via.placeholder.com/150" className="card-img-top" style={{
                                        height: "300px",
                                        width: "100%",
                                        objectFit: "contain"
                                    }} />
                                    <div className="card-body text-center">
                                        <h6 className="card-title text-primary p-0 m-0">Product One</h6>
                                        <div className="card-body p-0 m-0">
                                            <p className="card-text small text-danger">Rs:885</p>
                                            <p className="card-text small text-black">Free delivery by 23-oct</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-6 col-sm-3 col-lg-2">
                                <div className="card border-0">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" style={{
                                        height: "300px",
                                        width: "100%",
                                        objectFit: "contain"
                                    }} />
                                    <div className="card-body text-center">
                                        <h6 className="card-title text-primary p-0 m-0">Product One</h6>
                                        <div className="card-body p-0 m-0">
                                            <p className="card-text small text-danger">Rs:885</p>
                                            <p className="card-text small text-black">Free delivery by 23-oct</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <button className="carousel-control-prev  " type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon "></span>
                </button>

                <button className="carousel-control-next " type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>

            </div>

        </div>
    );
}

export default Orderpage;
