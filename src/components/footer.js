import React from "react";
import './menu.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import logo from '../images/logo/logo1.png';
import location from '../images/icons/location.png';
import msgbottom from '../images/icons/msgbottom.png';
import telbottom from '../images/icons/telbottom.png';
import whatsapp from '../images/icons/whatsapp.png';

export default function Footer() {


  return (
    <footer style={{ backgroundColor: "#00183f" }} class=" text-lg-start  text-muted ">
      <div className="newfooter">

        <section class="">
          <div className="container">
            <div class="row">
              <div style={{textAlign:"center"}} class="col-sm mt-3">
                <img style={{height:"100%"}}
                  className="w-50"
                  src={logo}
                  alt="medica-tour image"
                />
              </div>
              <div class="col-sm mt-3">
                <h1 style={{color:"#0275a9",textAlign:"center",fontSize:"20px",fontWeight:"bold",fontFamily:"GothamRoundedBold",marginBottom:"30px"}}>SITEMAP</h1>
                <div class="row">
                  <div class="col">
                    <ul>
                      <li><a href="/a-propos/">A Propos</a></li>
                      <li><a href="/clinique/">Clinique</a></li>
                      <li><a href="/sejour-medical/">Séjour</a></li>
                    </ul>
                  </div>
                  <div class="col">
                    <ul>
                      <li><a href="/contact/">Contact</a></li>
                      <li><a href="/actualites/1/">Blog</a></li>
                      <li><a href="/devis/">Devis</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm pl-5 pr-5 mt-3" style={{textAlign:"center"}}>
                <h1 style={{color:"#0275a9",textAlign:"center",fontSize:"20px",fontWeight:"bold",fontFamily:"GothamRoundedBold",marginBottom:"30px"}}>CONTACTEZ NOUS</h1>

                <div class="row mt-3">
                  <div> <img style={{height:"100%"}}
                    className="d-block w-100"
                    src={location}
                    alt="medica-tour image"
                  /></div>
                  <div className="ml-2"> 
                    <span style={{color:"white",fontSize:"14px"}}>145, RES MAYA "B" - H NOUIRA, BORJ LOUZIR 2073</span>

                  </div>
                </div>
                <div class="row mt-3">
                  <div> <img style={{height:"100%"}}
                    className="d-block w-100 mt-2"
                    src={msgbottom}
                    alt="medica-tour image"
                  /></div>
                  <div className="ml-2"> 
                    <span style={{fontSize:"14px",color:"white"}}>Contact@medica-tour.fr</span>

                  </div>
                </div>
                <div class="row mt-3">
                  <div > <img style={{height:"100%"}}
                    className="d-block w-100 mt-1"
                    src={telbottom}
                    alt="medica-tour image"
                  /></div>
                  <div className="ml-2"> 
                    <a href="tel:01 83 62 41 72" style={{color:'white'}} >    01 83 62 41 72

                  </a></div>
                </div>
                <div class="row mt-3">
                  <div> <img style={{height:"100%"}}
                    className="d-block w-100 mt-1"
                    src={whatsapp}
                    alt="medica-tour image"
                  /></div>
                  <div className="ml-2"> 
                    <a href="tel:+216 22 543 410" style={{color:'white'}} >    +216 22 543 410

                  </a></div>
                </div>
              </div>
            </div>
          </div>
        </section>
       <div style={{backgroundColor:"#001332"}} className="mt-3">
  <div class="row">
  <div class="col-auto mr-auto"><p>© 2019 Medica Tour. All Rights Reserved. </p></div>
  <div class="col-auto"><p>Powered by <a href="#">Medica-Tour</a></p></div>
</div>
         </div>
         </div>
    </footer>

  );
};

