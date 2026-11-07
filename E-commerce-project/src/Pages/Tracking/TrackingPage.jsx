import { Header } from "../../components/Header";
import {Link} from "react-router";
import {useParams} from "react-router";
import "./tracking.css";
import { useEffect , useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

 export function TrackingPage({cart}) {

    // console.log(params)

      const { orderId, productId } = useParams();
       const [orders, setOrders] = useState(null);



    useEffect(() => {

      async function GetOrderData() {

      const response = await axios.get(`/api/orders/${orderId}?expand=products`);
      setOrders(response.data)

      }
      GetOrderData();
    }, [orderId])

    //  const product = orders.
    //  console.log(product)
    console.log(orders)
  

    


    return (

        <>
         <title>Tracking</title>
        

        <Header cart={cart} />
        
        <div className="tracking-page">
      <div className="order-tracking">
        <Link className="back-to-orders-link link-primary" to="/orders">
          View all orders
        </Link>

        <div className="delivery-date">
          Arriving on Monday, June 13
        </div>

        <div className="product-info">
          Black and Gray Athletic Cotton Socks - 6 Pairs
        </div>

        <div className="product-info">
          Quantity: 1
        </div>

        <img className="product-image" src="images/products/athletic-cotton-socks-6-pairs.jpg" />

        <div className="progress-labels-container">
          <div className="progress-label">
            Preparing
          </div>
          <div className="progress-label current-status">
            Shipped
          </div>
          <div className="progress-label">
            Delivered
          </div>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
        </>
           


    );
    
}