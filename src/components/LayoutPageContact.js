import React from 'react';
import Header from './header';
import Footer from './footer';
import ScrollProgressTest from './scrollProgressTest';
import TopHeader from './topHeader';
import footerBack from '../images/background/footerBack.jpg';
import NavBarMobileComponenet from './navbarMobile';

export default function LayoutPageContact({ children }) {

  return (

    <div>
      <div style={{ position: "absolute", zIndex: "999", width: "100%" }}>
        <div style={{ backgroundColor: "#06b9d2" }} >
          <TopHeader />
        </div>
        <div style={{ backgroundColor: "#1c3c6e" }}>
          <div className="mt-5 marginHeader" >
            <div className="mt-5">
              <div className="pt-2 "  >

                <Header />


                


              </div>
            </div>
          </div>
        </div>
      </div>
     
      <div className="pt-5">
        <div className="pt-5">

          {children}

        </div>
      </div>
      <div className="infolocal " style={{ backgroundImage: { footerBack } }}>
      <br/>
        <h3 className='d-flex justify-content-center mt-3 text-white pl-4 pr-4'>DEMANDER UN DEVIS GRATUIT</h3>
        <p className='text-white pl-3 pr-3' >Si vous pensez que votre apparence extérieure ne reflète pas votre beauté intérieure,
           contactez MedicaTour pour obtenir de l’aide. Elle s’appuie sur sa vaste expérience en chirurgie plastique,
            son sens de l’esthétique ainsi que son réseau professionnel pour vous offrir un plan de traitement chirurgical personnalisé,
             qui vous aidera à obtenir ce que vous désirez. En suivant un traitement chirurgical esthétique ou reconstructif avec 
             MedicaTour vous pouvez être assuré que votre apparence extérieure sera en harmonie avec votre beauté innée.</p>
             <span className='d-flex justify-content-center text-white' >Pour planifier une consultation personnelle avec</span>*
             <div style={{ textAlign: "center" }} className="pt-2">
             <center>  <a style={{ textDecoration: 'none',textAlign:"center" }} className='buttonSimulationBlueIndexBleu '  href="/devis">
                          <span>DEMANDER UN DEVIS GRATUITEMENT</span>

                        </a> </center>     
            </div>
             <br/>
      </div>

      <Footer />

    </div>
  )
}

