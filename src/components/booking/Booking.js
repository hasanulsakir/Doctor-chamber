import {  faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Booking.css'

const Booking = (props) => {
    // console.log(props);
       const { name, title, gender,speciality, fee, img } = props.doctor;
    return (
        <div className='boxContainer'>
            <img src={img} alt="" />
            <div className='doctorContent'>
            <h3 className='doctorName'> {name}</h3>
            <p>{title}</p>
            <p>Speaciality: {speciality}</p>
            <p>Gender: {gender}</p>
            <p>Doctors Fee: {fee}</p>
            <button 
                onClick={() => props.addToCart(props.doctor)}
                className='btn-regular'
            >
            <FontAwesomeIcon icon={faPlusCircle}/> Book Appoinment</button>
            </div>
           
        </div>
    );
};

export default Booking;