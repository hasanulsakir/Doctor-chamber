import React from 'react';
// import React, {  useState } from 'react';
import './Header.css';
const Header = () => {
   
    // const [] = useState([]);
    
//      const [doctor, setdoctor] = useState([]);
//   useEffect(() => {
//       fetch('./doctor.json')
//       .then(res => res.json)
//       .then(data => console.log(data))
//   }, []);



    
    return ( 
        <div className='header'>
            <h1 className='title'> Doctor Chamber</h1>
            <p className='subTitle'> Total Medical Fee Available: $10000 </p>
           
       </div>
    );
};

export default Header;