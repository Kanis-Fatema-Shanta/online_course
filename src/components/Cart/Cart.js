import React from 'react';
import Enrolled from '../Enrolled/Enrolled'
import './Cart.css'
const Cart = (props) => {
    const data = props.data;
    //console.log("cart", typeof(data))
    let sum=0;
    data.map(each=>{
        sum+=each.price
    });
    return (
        <div className="cart">
            {/* summary view */}
            <div className="cart-top">
                <h4>Course Summary</h4>
                <span>Enrolled courses : {data.length}</span>
                <h5>Total Price: {sum}</h5>
            </div>
            {/* enrolled item list short view */}
            <div className="cart-list">
                <Enrolled data={data}> </Enrolled>
            </div>
            
        </div>
    );
};

export default Cart;