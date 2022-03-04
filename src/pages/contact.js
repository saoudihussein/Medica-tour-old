/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react'
import '../pages/index.css'
import CookieConsent  from "react-cookie-consent";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


import LayoutPageContact from '../components/LayoutPageContact';
import GoogleMapReact from 'google-map-react';

class Contact extends Component {
  
render(){
        return (
            
            <div>
            <CookieConsent enableDeclineButton flipButtons
location="bottom"
buttonText="Accepter"
declineButtonText="Décliner"
cookieName="Cookies prosper"
style={{ background: "#439fc6" }}
buttonStyle={{ color: "white",background:"#439fc6", fontSize: "18px", fontFamily: "Akkurat Pro,Helvetica,Arial,sans-serif" }}
declineButtonStyle={{ color: "white",background:"#439fc6", fontSize: "18px", fontFamily: "Akkurat Pro,Helvetica,Arial,sans-serif" }}

expires={150}



>

<div style={{width:"80%",padding:"10px "}}> En poursuivant votre navigation sur ce site, vous acceptez notre <a href="/mentions-legales" style={{color:"yellow"}}> politique
de protection </a> des données et notamment que des cookies soient utilisés afin 
de réaliser des statistiques d’audience,
d’améliorer votre expérience d’utilisateur et de vous offrir des contenus personnalisés.{" "}</div>
</CookieConsent>
  <LayoutPageContact>
  <div class="container col-sm-w-100 col-md-w-75 col-lg-w-75 col-xl-w-75 col-xxl-w-75 justify-content-center pt-5">

  <h1 class="titlePageIntern">Contact</h1>

  <div class="container">
<div class="row pt-5 pb-5">
<div class="col-sm pt-5 pb-5">
<p className='pt-5 ' style={{fontFamily:"GothamRoundedMedium",fontSize:"16px",fontWeight:"bold"}}>145, RES MAYA “B” – H NOUIRA, BORJ LOUZIR 2073</p>
<p style={{fontFamily:"GothamRoundedMedium",fontSize:"16px",fontWeight:"bold"}}>Contact@medica-tour.fr</p>
<div className='raw'>
<div  className='col-sm'></div>
<p>Tel</p>

<div  className='col-sm'><p className='col' className='pb-5' style={{fontFamily:"GothamRoundedMedium",fontSize:"16px",fontWeight:"bold"}}><a style={{color:"black"}} href='tel:01 83 62 41 72'>01 83 62 41 72</a></p>
</div>
</div>
  <div className='raw'>
<div  className='col-sm'><i class="fa fa-whatsapp" aria-hidden="true"></i></div>
<p>WhatsApp</p>
<div  className='col-sm'><p className='col' className='pb-5' style={{fontFamily:"GothamRoundedMedium",fontSize:"16px",fontWeight:"bold"}}><a style={{color:"black"}} href='tel:+216 22 543 410'>+216 22 543 410</a></p>
</div>
</div>

</div>
<div class="col-sm">
  <div >
<iframe className='map'  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12767.551111619516!2d10.1973926!3d36.8691049!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x247fbf54781134c3!2sMedicaTour!5e0!3m2!1sfr!2stn!4v1645547327303!5m2!1sfr!2stn"  ></iframe>
</div>
</div>

</div>
</div>
</div>
      
      
  </LayoutPageContact>
 </div>
 
    )

        }
}
export default Contact

