import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart, faUser, faLocation } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import { AuthContext, cartcountContext, deleteContext, googleStatusContext, orderStatusContext } from "../context/ContextShare";
import { getCartApi } from "../services/allApi";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("")
  // const [token, setToken] = useState(() => sessionStorage.getItem("token") || "");
  const { cartcount, setCartCount } = useContext(cartcountContext)
  const navigate = useNavigate()
  const location = useLocation();
  const { token, setToken } = useContext(AuthContext);
  const { deleteStatus } = useContext(deleteContext)
  const [carlist, setCartList] = useState([])
  const { orderStatus } = useContext(orderStatusContext)
  const { googleStatus,setGoogleStatus } = useContext(googleStatusContext)
  //const navigate = useNavigate();

  const handlelogout = () => {
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setToken("")
    // Reset your states
    //setToken(null);
    setGoogleStatus(false);

    // Force redirect
    navigate("/");
    navigate('/')
  }

  const getCartDet = async () => {
    const user = JSON.parse(sessionStorage.getItem("existingUser"));
    if (user) {
      const email = user.email
      //console.log(email)
      //console.log(emailid)
      const result = await getCartApi(email)
      console.log(result)
      if (result.status == 200) {

        setCartList(result.data.cartItems)
        //if user donot change the quantity field

      }
      else if (result.status == 401) {
        console.log("no cart data")
        setCartList([])
        //setAMedicine([])

      }

    }

  }
  console.log(cartcount)
  useEffect(() => {


    getCartDet()
  }, [deleteStatus])
  useEffect(() => {

    getCartDet()
  }, [cartcount])
  useEffect(() => {

    getCartDet()
  }, [orderStatus])


  // useEffect(() => {
  //   getCartDet()
  // }, [cartcount])
  //   useEffect(()=>{
  // getCartDet()
  //   },[deleteStatus])

  //console.log(cartcount)
  return (
    <>
      <header className="bg-black text-white w-full">
        <div className="px-4 py-3 flex justify-between items-center md:px-5">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              className="w-24 bg-white"
              alt="logo"
            />




          </div>
          <div className="ms-5">
            <h6 className="small fw-normal"><FontAwesomeIcon icon={faLocation} className="me-3" />Update Location</h6>
            <h6 className="small fw-normal">Delivering to thrissur 686510</h6>
          </div>

          <div className="d-flex justify-content-center mt-3">
            <div
              className="d-flex border rounded"
              style={{ width: "550px", height: "40px", overflow: "hidden" }}
            >

              {/* Category Dropdown */}
              <Form.Select
                style={{
                  width: "150px",
                  border: "none",
                  height: "40px"
                }}
              >
                <option>All</option>
                <option>Mobiles</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home</option>
                <option>Books</option>
              </Form.Select>

              <div className="d-flex w-100">
                <Form.Control
                  type="text"
                  placeholder="Search Amazon..."
                  className="border-0"
                  style={{ boxShadow: "none", height: "40px" }}
                />

                <Button
                  variant="warning"
                  className="rounded-0"
                  style={{ width: "60px", height: "40px" }} >
                  Search
                </Button>
              </div>

            </div>
          </div>


          <div className="flex items-center gap-4">

            {/* LOGIN / LOGOUT */}
            {(token || googleStatus) ? (
              <Link to="/" onClick={handlelogout} className="hidden md:flex items-center gap-1 hover:text-yellow-400">
                <FontAwesomeIcon icon={faUser} />
                <span>Logout</span>
              </Link>
            ) : (
              <Link to="/Loginpage" className="hidden md:flex items-center gap-1 hover:text-yellow-400">
                <FontAwesomeIcon icon={faUser} />
                <span>Login</span>
              </Link>
            )}

            {/* ORDERS (Only if logged in) */}
            {(token || googleStatus) && (
              <Link to="/orderpage" className="hidden md:flex items-center gap-1 hover:text-yellow-400">
                <span>Orders</span>
              </Link>
            )}

            {/* CART (Only if logged in) */}
            {(token || googleStatus) && (
              <Link to="/Cart" className="relative flex items-center hover:text-yellow-400">
                <FontAwesomeIcon icon={faShoppingCart} className="fa-lg" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
                  {carlist?.length}
                </span>
              </Link>
            )}

            {/* Mobile Menu */}
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              <FontAwesomeIcon icon={faBars} className='fa-2x' />
            </button>

          </div>

        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 pb-3">
          <div className="flex">
            <input
              type="text"
              placeholder="Search Amazon"
              className="w-full px-4 py-2 text-black rounded-l-md focus:outline-none"
            />
            <button className="bg-yellow-500 px-4 rounded-r-md hover:bg-yellow-400">
              Search
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="bg-[#232f3e] text-white px-6 py-4 md:hidden space-y-4 animate-slide">
          <p className="hover:text-yellow-400 cursor-pointer">Home</p>
          <p className="hover:text-yellow-400 cursor-pointer">Today's Deals</p>
          <p className="hover:text-yellow-400 cursor-pointer">Customer Service</p>
          <p className="hover:text-yellow-400 cursor-pointer">Gift Cards</p>
          <p className="hover:text-yellow-400 cursor-pointer">Sell</p>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex bg-secondary  text-white ">
        <ul className="flex  w-full">
          <li className='mx-2 mt-3 md:mt-0 font-bold'><Link to="/" className="text-white">All</Link></li>
          <li className='mx-2 mt-3 md:mt-0 font-bold'>Today's Deals</li>
          <li className='mx-2 mt-3 md:mt-0 font-bold'>
            <Link to="/appliances" className="no-underline text-white">Electronics & Home Appliances</Link>
          </li>
          <li className='mx-2 mt-3 md:mt-0 font-bold'>Mobiles</li>
          <li className='mx-2 mt-3 md:mt-0 font-bold'>Home & Kitchen</li>
          <li className='mx-3 mt-3 md:mt-0 font-bold'>
            <Link to='/fashion' className="no-underline text-white">Fashion</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
