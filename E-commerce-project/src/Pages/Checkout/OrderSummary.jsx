import dayjs from "dayjs";

export function OrderSummary({cart , deliveryOptions}) {

    return (

        <div className="order-summary">


            {cart.map((item) => {


                const deliveryOption = deliveryOptions?.find((option) => option.id === item.deliveryOptionId);
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
                                    <span>
                                        Quantity: <span className="quantity-label">{item.quantity}</span>
                                    </span>
                                    <span className="update-quantity-link link-primary">
                                        Update
                                    </span>
                                    <span className="delete-quantity-link link-primary">
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