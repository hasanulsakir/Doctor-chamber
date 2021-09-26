import React from 'react';
import './Doctor.css';
import { useEffect, useState } from 'react';
import Booking from '../booking/Booking';
import Cart from '../Cart/Cart';

const Doctor = () => {
    const [doctors, setdoctor] = useState([]);
    const [cart, setcart] = useState([]);
  useEffect(() => {
      fetch('./doctor.json')
      .then(res => res.json())
      .then(data => setdoctor(data))
  }, []);

    const addToCart = (doctor) => {
        const newCart = [...cart, doctor];
        setcart(newCart)
    }
    
    return (

        <div className='body-wrap'>
            <h5>Total Doctor: {doctors.length}</h5>
        <div className='container-wrap'>
             
       <div className='doctor-container'> 
              
                <div className='doctor-details'>
                    {doctors.map(doctor => <Booking
                        doctor={doctor}
                        key={doctor.key}
                        addToCart = {addToCart}
                    ></Booking>)}
                </div>
        </div>
            <div className='cart-details'>
             <Cart cart={cart}></Cart>
        </div>
</div>
</div>
        



   
           
    );
};

export default Doctor;