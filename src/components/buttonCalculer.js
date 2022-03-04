import React from 'react';
import iconTimer from '../images/icons/icon-timer.svg';

export default function ButtonCalculer() {
    return (
   <div>
        <a style={{ textDecoration: 'none'}}className='buttonCalculer '   href="/simulation">
     
        <span className="iconbutton ">
        <img src={iconTimer} alt="timer" /> 1min</span>
        <span className="ml-5"> Calculez vos 
        </span>
       <div  className="ml-5"> <span > réductions d'impôt
        </span></div><br></br>
      <p className='ml-5'> Je lance ma simulation</p>
      

      </a>                       
               </div>

        );
}

