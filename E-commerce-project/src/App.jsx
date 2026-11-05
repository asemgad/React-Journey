import { HomePage } from './Pages/Home/HomePage.jsx'
import { CheckoutPage } from './Pages/Checkout/CheckoutPage.jsx'
import { Routes, Route } from 'react-router'

import './App.css'
import { OrdersPage } from './Pages/Orders/OrdersPage.jsx'
import { TrackingPage } from './Pages/Tracking/TrackingPage.jsx'

function App() { // path = "/" = index

  return (
    <>

      {/* <Routes>
      <Route path="/" element={<HomePage/>} > </Route >  
      <Route path="/checkout" element={<CheckoutPage/>} > </Route >  
      
    </Routes> to use the index we need to make it self closing tag  */}

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="tracking" element={<TrackingPage />} />
      </Routes>

    </>
  )
}

export default App
