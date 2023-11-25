import React, { useContext } from 'react';
import { CartItemsContext } from "../contextApi/CartContext";

export default function FoodCard({ foodItem }) {

    const { cart, setCart } = useContext(CartItemsContext);

    return (
        <>
            <div className="col-md-4 col-sm-8 col-11 mx-auto">
                <div className="card">
                    <img src={foodItem.foodImg} className="card-img-top" alt="Food Item" />
                    <div className="card-body">
                        <h5 className="card-title">{foodItem.foodTitle}</h5>
                        <p className="card-text">{foodItem.foodText}</p>
                        <div className="p-0 m-0 d-flex flex-wrap justify-content-between align-items-center">
                            {cart.some((item) => item.foodId === foodItem.foodId) ? (
                                <button
                                    className="btn btn-view-item"
                                    onClick={() => {
                                        setCart(cart.filter((item) => {
                                            return item.foodId !== foodItem.foodId;
                                        }));
                                    }}
                                >Xóa khỏi giỏ hàng</button>
                            ) : (
                                <button
                                    className="btn btn-view-item"
                                    onClick={() => {
                                        setCart([...cart, {...foodItem, foodQuantity : 1}]);
                                    }}
                                >Thêm vào giỏ hàng</button>
                            )}
                            <button className="btn border-0"> {foodItem.foodPrice} VND</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}