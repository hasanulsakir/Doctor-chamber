import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let names = " ";
    for (const totals of cart) {
        total = total + totals.fee;
        names = names  + totals.name;
   }
    return (
        <div>
            Booking Summary:
               <p>Total Book Doctor:{cart.length} </p>
               <p>Total Doctor Fee: $ {total}</p>
            <p>Doctor Name: {names}</p> <br />
            <button className='btn-regular'> <FontAwesomeIcon icon={faCheck}/> Procced To Confirm</button>
        </div>
    );
};

export default Cart;