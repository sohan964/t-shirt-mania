import React from 'react';
import './Cart.css';
const Cart = ({cart, handleRemoveItem}) => {

    let message;
    if(cart.length === 0){
        message = <p>pleace buy 1</p>
    }

    return (
        <div>
            <h2 className={cart.length ===2 ? 'orange': 'purple'}>Order summary</h2>
            <h4>Order quantity: {cart.length}</h4>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={()=>handleRemoveItem(tshirt)}>X</button>

                </p>)
            }
            {
                message
            }

            <p> and operator</p>
            {cart.length === 2 && <h4>double item</h4>}
        </div>
    );
};

export default Cart;

/*

Conditional Rendering
    1. use element and if-else
    2. ternary operator '?'
    3. && operator
    4. || operator ()

*/
