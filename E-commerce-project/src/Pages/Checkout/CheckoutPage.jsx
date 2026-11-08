import { useEffect, useState } from 'react';
import './CheckoutHeader.css'
import './CheckoutPage.css'
import axios from 'axios';
import { OrderSummary } from './OrderSummary';
import { useNavigate } from 'react-router';


export function CheckoutPage({ cart , loadCart }) {

  const [deliveryOptions, setDeliveryOptions] = useState([])
  const [PaymentSummary, setPaymentSummary] = useState([])

  const navigate = useNavigate()

  async function createOrder() {
   await axios.post('/api/orders')
    await loadCart();
    navigate('/orders');
    
  }


  useEffect(() => {

    async function GetDeliveryOptionsData() { // we need to put it into funciton as the await returns promise and the useeffect can not return promise 
     const response = await   axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
     setDeliveryOptions(response.data)
    };


    // axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
    //   .then((response) => {
    //     setDeliveryOptions(response.data);
    //   })

    // axios.get('/api/payment-summary')
    //   .then((response) => {
    //     setPaymentSummary(response.data);
    //   })


    const GetPaymentSummaryData = async function (){
      const response = await axios.get('/api/payment-summary')
      setPaymentSummary(response.data)
    }


      GetDeliveryOptionsData();
      GetPaymentSummaryData();
  }, [])


  return (

    <>

      <title>Checkout</title>

      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <a href="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </a>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<a className="return-to-home-link"
              href="/">3 items</a>)
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          
          <OrderSummary loadCart={loadCart} cart={cart} deliveryOptions={deliveryOptions} />

          <div className="payment-summary">
            <div className="payment-summary-title">
              Payment Summary
            </div>

            <div className="payment-summary-row">
                  <div>Items (3):</div>
 </div>


            {PaymentSummary && (

              <>
 
                  <div className="payment-summary-money">{(PaymentSummary.productCostCents / 100).toFixed(2)}</div>
               

                <div className="payment-summary-row">
                  <div>Shipping &amp; handling:</div>
                  <div className="payment-summary-money">{(PaymentSummary.shippingCostCents / 100).toFixed(2)} </div>
                </div>

                <div className="payment-summary-row subtotal-row">
                  <div>Total before tax:</div>
                  <div className="payment-summary-money">{(PaymentSummary.totalCostBeforeTaxCents / 100).toFixed(2)}</div>
                </div>

                <div className="payment-summary-row">
                  <div>Estimated tax (10%):</div>
                  <div className="payment-summary-money">{(PaymentSummary.taxCents / 100).toFixed(2)}</div>
                </div>

                <div className="payment-summary-row total-row">
                  <div>Order total:</div>
                  <div className="payment-summary-money">{(PaymentSummary.totalCostCents / 100).toFixed(2)}</div>
                </div>

                <button onClick={createOrder}  className="place-order-button button-primary">
                  Place your order
                </button>
              </>


            )}
          </div>
        </div>
      </div>
    </>



  );

}