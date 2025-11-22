import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
export default function Header() {
  const [open, setOpen] = useState(false);

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
            <h6 className="small fw-normal">Update Location</h6>
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
           
            <Link to="/Loginpage" className="hidden md:flex items-center gap-1 hover:text-yellow-400">
              <FontAwesomeIcon icon={faUser} />
              <span>Login</span>
            </Link>

            <Link to="/Cart" className="relative flex items-center hover:text-yellow-400">
              <FontAwesomeIcon icon={faShoppingCart} className="fa-lg" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
                3
              </span>
            </Link>

            {/* Hamburger Menu for Mobile */}
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
          <li className='mx-2 mt-3 md:mt-0 font-bold'>All</li>
          <li className='mx-2 mt-3 md:mt-0 font-bold'>Today's Deals</li>
          <li className='mx-2 mt-3 md:mt-0 font-bold'>
            <Link to="/appliances" className="no-underline">Electronics & Home Appliances</Link>
          </li>
          <li className='mx-2 mt-3 md:mt-0 font-bold'>Mobiles</li>
          <li className='mx-2 mt-3 md:mt-0 font-bold'>Home & Kitchen</li>
          <li className='mx-3 mt-3 md:mt-0 font-bold'>
            <Link to='/fashion' className="no-underline">Fashion</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
