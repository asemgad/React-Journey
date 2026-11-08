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

    const loadCart = async () => {
      const response =   await axios.get("/api/cart-items?expand=product")
      setCart(response.data);
     };

    useEffect( () => {
      // axios.get("http://localhost:3000/api/cart-items?expand=product")
      // .then((response) => {
      //   setCart(response.data);
      // })
     
     loadCart();

    } , []);

  return (
    <>

      {/* <Routes>
      <Route path="/" element={<HomePage/>} > </Route >  
      <Route path="/checkout" element={<CheckoutPage/>} > </Route >  
      
    </Routes> to use the index we need to make it self closing tag  */}

      <Routes>
        <Route index element={<HomePage loadCart = {loadCart} cart = {cart} />} />
        <Route path="checkout" element={<CheckoutPage loadCart = {loadCart} cart = {cart} />} />
        <Route path="orders" element={<OrdersPage cart = {cart} />} />
        <Route path="tracking/:orderId/:productId" element={<TrackingPage cart = {cart} />} />
      </Routes>

    </>
  )
}

export default App
