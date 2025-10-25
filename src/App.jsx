import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Amount from './pages/Amount'
import PaymentSuccess from './pages/PaymentSuccess'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
<Route path='/' element={<Amount/>}></Route>
<Route path="/payment-success" element={<PaymentSuccess />} />
    </Routes>
    </>
  )
}

export default App
