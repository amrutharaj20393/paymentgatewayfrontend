import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Amount from './pages/Amount'
import PaymentSuccess from './pages/PaymentSuccess'
import Home from './users/Home'
import Auth from './pages/Auth'
import Blogs from './users/Blogs'
import Header from './useramazon/Header'
import Footer from './useramazon/Footer'
import Fashion from './useramazon/Fashion'
import Hero from './useramazon/Hero'
import Appliances from './useramazon/Appliances'
import Product from './useramazon/Product'
import Cart from './useramazon/Cart'
import Checkout from './useramazon/Checkout'
import Payment from './useramazon/Payment'
import Login from './useramazon/Login'
import Otppage from './useramazon/Otppage'
import Register from './useramazon/Register'
import Loginpassword from './useramazon/Loginpassword'
import Orderpage from './useramazon/Orderpage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Home />}></Route> */}

        <Route path='/' element={<Hero />}></Route>
        <Route path="/login" element={<Auth />} />
        <Route path='/register' element={<Auth register />}></Route>
        <Route path='/blog' element={<Blogs />}></Route>


        <Route path="/Loginpage" element={<Login />} />
        <Route path="/Registerpage" element={<Register />} />
        <Route path='/fashion' element={<Fashion />}></Route>
        <Route path='/appliances' element={<Appliances />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/Otp' element={<Otppage/>}></Route>
        <Route path='/Loginpassword' element={<Loginpassword/>}></Route>
         <Route path='/orderpage' element={<Orderpage/>}></Route>

        <Route path='/sucess' element={<Payment />}></Route>

      </Routes>
      <Footer />
    </>
  )
}

export default App
