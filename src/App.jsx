import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Amount from './pages/Amount'
import PaymentSuccess from './pages/PaymentSuccess'
import Home from './users/Home'
import Auth from './pages/Auth'
import Blogs from './users/Blogs'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/login" element={<Auth />} />
        <Route path='/register' element={<Auth register />}></Route>
         <Route path='/blog' element={<Blogs/>}></Route>

      </Routes>
    </>
  )
}

export default App
