import { HomePage } from './Pages/Home/HomePage.jsx'
import { CheckoutPage } from './Pages/Checkout/CheckoutPage.jsx'
import { Routes, Route } from 'react-router'

import './App.css'
import { OrdersPage } from './Pages/Orders/OrdersPage.jsx'
import { TrackingPage } from './Pages/Tracking/TrackingPage.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() { // path = "/" = index

    const [cart , setCart] = useState([]);

    useEffect( () => {
      // axios.get("http://localhost:3000/api/cart-items?expand=product")
      // .then((response) => {
      //   setCart(response.data);
      // })

     const fetchAppDate = async () => {
      const response =   await axios.get("http://localhost:3000/api/cart-items?expand=product")
      setCart(response.data);
     }
     fetchAppDate();

    } , [])

  return (
    <>

      {/* <Routes>
      <Route path="/" element={<HomePage/>} > </Route >  
      <Route path="/checkout" element={<CheckoutPage/>} > </Route >  
      
    </Routes> to use the index we need to make it self closing tag  */}

      <Routes>
        <Route index element={<HomePage cart = {cart} />} />
        <Route path="checkout" element={<CheckoutPage cart = {cart} />} />
        <Route path="orders" element={<OrdersPage cart = {cart} />} />
        <Route path="tracking" element={<TrackingPage />} />
      </Routes>

    </>
  )
}

export default App
