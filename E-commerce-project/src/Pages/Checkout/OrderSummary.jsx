import axios from "axios";
import dayjs from "dayjs";
import { useState } from "react";

export function OrderSummary({cart , deliveryOptions , loadCart}) {

    const [quantityStatus , setQuantityStatus] = useState(false);

    function UpdateQuantity ()
    {

           quantityStatus? setQuantityStatus(false) : setQuantityStatus(true)
           console.log(quantityStatus)
    };

    return (

        <div className="order-summary">


            {cart.map((item) => {


                const deliveryOption = deliveryOptions?.find((option) => option.id === item.deliveryOptionId);

                const deleteCartItem = async () => {
                    await axios.delete(`/api/cart-items/${item.productId}`); 

                    await loadCart()
                };
                return (

                    <div key={item.productId} className="cart-item-container">
                        <div className="delivery-date">
                            {deliveryOption ? `Delivery date: ${dayjs(deliveryOption.estimatedDeliveryTimeMs).format("dddd, MMMM D")}` : "Delivery date: TBD"}
                        </div>

                        <div className="cart-item-details-grid">
                            <img className="product-image"
                                src={item.product.image} />

                            <div className="cart-item-details">
                                <div className="product-name">
                                    {item.product.name}
                                </div>
                                <div className="product-price">
                                    {(item.product.priceCents / 100).toFixed(2)}
                                </div>
                                <div className="product-quantity">

                                    <input style={{opacity:quantityStatus? 1 : 0}} className="quantity-input" type="text" />
                                    <span>
                                        Quantity: <span className="quantity-label">{item.quantity}</span>
                                    </span>
                                    <span onClick={UpdateQuantity} className="update-quantity-link link-primary">
                                        Update
                                    </span>
                                    <span onClick={deleteCartItem} className="delete-quantity-link link-primary">
                                        Delete
                                    </span>
                                </div>
                            </div>

                            <div className="delivery-options">
                                <div className="delivery-options-title">
                                    Choose a delivery option:
                                </div>

                                {deliveryOptions.map((option) => {

                                    let priceString = option.priceCents === 0 ? "FREE Shipping" : `$${(option.priceCents / 100).toFixed(2)} - Shipping`;


                                    return (
                                        <div key={option.id} className="delivery-option">
                                            <input type="radio"
                                                className="delivery-option-input"
                                                name={`delivery-option-${cart.productId}`} />
                                            <div>
                                                <div className="delivery-option-date">
                                                    {dayjs(option.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
                                                </div>
                                                <div className="delivery-option-price">
                                                    {priceString}
                                                </div>
                                            </div>
                                        </div>

                                    );
                                })}



                            </div>
                        </div>
                    </div>
                );


            })}





        </div>



    );
}