import { HomePage } from './Pages/HomePage.jsx'
import { CheckoutPage } from './Pages/CheckoutPage.jsx'
import { Routes, Route } from 'react-router'

import './App.css'
import { OrdersPage } from './Pages/OrdersPage.jsx'

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
      </Routes>

    </>
  )
}

export default App
