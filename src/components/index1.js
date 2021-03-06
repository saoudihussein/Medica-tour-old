/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react'
import Layout from './LayoutPageContact';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import '../fonts/font.css';
import { ScrollToTopOnMount} from 'react-fullpage';
import slide1 from '../images/background/slide1.jpg';
import logo from '../images/logo/logo.png';
import slide2 from '../images/background/slide2.jpg';
import home1 from '../images/img/home1.jpg';
import doctor1 from '../images/img/doctor1.jpg';
import doctor2 from '../images/img/doctor2.jpg';
import doctor3 from '../images/img/doctor3.jpg';
import doctor4 from '../images/img/doctor4.jpg';
import doctor5 from '../images/img/doctor5.jpg';
import doctor6 from '../images/img/doctor6.jpg';
import doctor7 from '../images/img/doctor7.jpg';
import sejour1 from '../images/img/sejour1.jpg';
import sejour2 from '../images/img/sejour2.jpg';

import flip1 from '../images/img/flip1.jpg';
import flip2 from '../images/img/flip2.jpg';
import flip3 from '../images/img/flip3.jpg';
import flip4 from '../images/img/flip4.jpg';
import flip5 from '../images/img/flip5.jpg';
import flip6 from '../images/img/flip6.jpg';

import section2first from '../images/img/section2first.png';
import section2fourth from '../images/img/section2fourth.png';
import section2second from '../images/img/section2second.png';
import section2third from '../images/img/section2third.png';
import Carousel from 'react-bootstrap/Carousel'
import Carousel1 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Helmet } from "react-helmet"
import CookieConsent from "react-cookie-consent";
import WhatsApp from './whatsApp';
const windowGlobal = typeof window !== 'undefined' && window



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default function Index1(props) {
    const [max, setMax] = useState(6);
    const [min, setMin] = useState(1);
    const [nb, setNb] = useState(1);
    function handlePageClick() {
        setMax(max + 6);
        setMin(min + 6);
        if(windowGlobal)
        if (parseInt(window.location.pathname.split("/").pop()) >1) {
        }
        if(windowGlobal){
        window.location.href = parseInt(window.location.pathname.split("/").pop())+1
        }
 
        

    }
    function handlePageClick1() {
        setMax(max - 6);
        setMin(min - 6);
        if(windowGlobal){
        setNb(window.location.pathname.split("/").pop() - 1);
        if (window.location.pathname.split("/").pop() == 2) {

        }
        window.location.href = parseInt(window.location.pathname.split("/").pop())-1
    }
    }

    const { data } = props.pageContext
    const { indice } = props.pageContext

  return (
    <div >
      <CookieConsent enableDeclineButton flipButtons
        location="bottom"
        buttonText="Accepter"
        declineButtonText="D??cliner"
        cookieName="Cookies prosper"
        style={{ background: "#439fc6" }}
        buttonStyle={{ color: "white", background: "#439fc6", fontSize: "18px", fontFamily: "Akkurat Pro,Helvetica,Arial,sans-serif" }}
        declineButtonStyle={{ color: "white", background: "#439fc6", fontSize: "18px", fontFamily: "Akkurat Pro,Helvetica,Arial,sans-serif" }}

        expires={150}



      >

        <div style={{ width: "80%", padding: "10px " }}> En poursuivant votre navigation sur ce site, vous acceptez notre <a href="/mentions-legales" style={{ color: "yellow" }}> politique
          de protection </a> des donn??es et notamment que des cookies soient utilis??s afin
          de r??aliser des statistiques d???audience,
          d???am??liorer votre exp??rience d???utilisateur et de vous offrir des contenus personnalis??s.{" "}</div>
      </CookieConsent>
      <Helmet>
        <html lang="fr" />


        <meta charset="UTF-8" />
        <meta name="description" content="chirurgie esth??tique en Tunisie : Un s??jour esth??tique ?? tarif r??duit avec prise en charge globale par Medica-Tour | devis gratuit." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Medica-Tour: chirurgie esth??tique en Tunisie, prix s??jour esth??tique</title>
        <link rel="apple-touch-icon" sizes="180x180" href='/images/icons/apple-touch-icon.png' />
        <link rel="icon" type="image/png" sizes="32x32" href='/images/icons/favicon-32x32.png' />
        <link rel="icon" type="image/png" sizes="16x16" href='/images/icons/favicon-16x16.png' />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" />

      </Helmet>
      <ScrollToTopOnMount />

      <div>

        <Layout logo={logo}  >
          <WhatsApp></WhatsApp>
          <div >
            <Carousel>
              <Carousel.Item>
                <img style={{height:"420px"}}
                  className="d-block w-100"
                  src={slide2}
                  alt="medica-tour image"
                />
                <Carousel.Caption>
                  <div className="col-lg-4 col-sm-10">
                    <h3>VOTRE SANT??
                      EST NOTRE PRIORIT??</h3>
                    <p style={{ fontSize: "87.5%", fontFamily: "Roboto,Arial", lineHeight: "1.5", color: "#ffffff" }}>Gr??ce ?? son r??seau de professionnels, MedicaTour vous offre un accompagnement personnalis??
                      et une ??quipe m??dicale des plus comp??tentes pour vous offrir des soins ?? la hauteur de vos attentes</p>
                    <div className="pt-1">
                    <a style={{ textDecoration: 'none',textAlign:"center",width:"220px"  }} className='buttonSimulationBlueIndexBleu '  href="/devis">
                          <span>DEMANDER UN DEVIS</span>

                        </a>                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img style={{height:"420px"}}
                  className="d-block w-100"
                  src={slide1}
                  alt="Second slide"
                />

                <Carousel.Caption>
                <div className="col-lg-4 col-sm-8">
                    <h3>SOYEZ CELLE OU CELUI
                      QUE VOUS VOULEZ ??TRE</h3>
                    <p style={{ fontSize: "87.5%", fontFamily: "Roboto,Arial", lineHeight: "1.5", color: "#ffffff" }}>Avec MedicaTour profitez d???un s??jour m??dical
                      tout compris en toute qui??tude .</p>
                    <div className="pt-1">
                    <a style={{ textDecoration: 'none',textAlign:"center",width:"220px" }} className='buttonSimulationBlueIndexBleu w-80'  href="/devis">
                          <span>DEMANDER UN DEVIS</span>

                        </a>  
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
            <div style={{backgroundColor:"#999896"}}>
            <div class="container"  style={{backgroundColor:"#1c3c6e",height:"220px"}}>
  <div class="row">
    <div class="col-sm" style={{marginTop:"4%",textAlign:"center"}}>
   <b style={{fontWeight:"bold",fontSize:"30px",textAlign:"center",color:"white",marginTop:"20%",width:"80%"}}>   Welcome to Medica-Tour </b>
    </div>
    <div class="col-sm" style={{backgroundColor:"#06b9d2",height:"220px"}}>
    <div class="container" style={{marginTop:"13%",textAlign:"center"}}>
  <div class="row">
    <div class="col-sm openingTime">
    Lundi - Samedi
    </div>
    <div class="col-sm openingTime">
    08:00 - 21:00
    </div>
    </div>
    <hr style={{color:"white",backgroundColor:"white",width:"60%"}}></hr>
    <div class="row">

    <div class="col-sm openingTime">
    Dimanche
    </div>
    <div class="col-sm openingTime">
    Ferm??
    </div>
    </div>
</div>
    </div>
    <div class="col-sm phone-class"  style={{backgroundColor:"#a1cf5f"}}>
     <div class="row "style={{marginTop:"10%",marginLeft:"10%"}}>
    <div class="col-sm" class="col-1" style={{fontSize:"200%"}}>
    <i class="fa  fa-phone" style={{color:"white"}}></i>    </div>
    <div class="col-sm" >
    <div style={{color:"black"}} >
    T??l
    </div><div className='openingTime' >
     <a href='tel:+33 1 83 62 41 72' style={{color:"white"}}> +33 1 83 62 41 72 </a>
    </div>
    </div>
  </div>
  <hr style={{width:"60%",backgroundColor:"white",margin:"0",marginLeft:"10%"}}></hr>

  <div class="row" style={{marginLeft:"10%"}}>
     <div class="col-1" style={{fontSize:"200%"}}>
    <i class="fa fa-whatsapp"style={{color:"white"}}></i> 
    </div>

    <div class="col-sm" style={{padding:"8px"}}>
    <div style={{color:"black",marginLeft:"5px"}} >
    T??l & WhatsApp
    </div><div className='openingTime' >
    
    <a href='tel:+216 22 543 410' style={{color:"white"}}>+216 22 543 410 </a>

    </div>
    </div>
    </div>
    <hr style={{width:"60%",backgroundColor:"white",margin:"0",marginLeft:"10%"}}></hr>

    <div class="row" style={{marginLeft:"10%"}}>

     <div class="col-sm " class="col-1" style={{fontSize:"150%"}}>
    <i class="fa  fa-envelope-o" style={{color:"white"}}></i> 
    </div>
    <div class="col-sm"style={{padding:"8px"}}>
   <div style={{marginLeft:"5px"}}className='openingTime' >
   contact@medica-tour.fr
    </div>
    </div>
    </div>

    </div>
  </div>
</div>
</div>
          </div>
       
          <div class="container w-80 justify-content-center">
            <div class="row pt-5 mobile">
              <div class="col-sm">
                <img style={{height:"100%"}}
                  className="d-block w-100"
                  src={home1}
                  alt="Third slide"
                />    </div>
              <div class="col-sm">
                <h1 className="titrePageIndex">Chirurgie esth??tique en Tunisie</h1>
                <p>MedicaTour est une agence de chirurgie esth??tique en Tunisie qui vous offre un s??jour m??dical tout compris r??pondant ?? vos besoins. Pareillement, nous proposons des services d???assistance m??dicale et
                  logistique en vue de proposer des solutions s??res et optimis??es dans les domaines suivants:</p>
                <div class="row">
                  <div class="col">
                    <ul>
                      <li>CHIRURGIE ESTH??TIQUE</li>
                      <li>CHIRURGIE DU VISAGE</li>
                      <li>SOINS DENTAIRES</li>
                      <li>OPERATION BARIATRIQUE ET OB??SIT??</li>
                    </ul>
                  </div>
                  <div class="col">
                    <ul>
                      <li>TRAITEMENT DE L???INFERTILIT??</li>
                      <li>CHIRURGIE INTIME</li>
                      <li>ET PLUS ENCORE???</li>
                    </ul>
                  </div>
                </div>
                <p>La chirurgie plastique en Tunisie peut r??soudre les imperfections, r??tablir la tension de la peau apr??s l???accouchement ou l?????ge, ou encore corriger les r??sultats d???une intervention chirurgicale ant??rieure.
                  Ainsi, nous offrons des prestations de qualit?? pour toute chirurgie plastique, au meilleur prix. </p>
              </div>
            </div>

            <div style={{ textAlign: "center" }} className="pt-5">
           <center> <a style={{ textDecoration: 'none',textAlign:"center" }} className='buttonSimulationBlueIndexBleu '  href="/devis">
                          <span>OBTENIR UN DEVIS GRATUIT</span>

                        </a>  </center>
            </div>
            <p className="pt-5" >Afin de vous prodiguer les meilleurs soins, MedicaTour collabore avec les chirurgiens
              les plus qualifi??s. Nous collaborons ??galement avec les ??tablissements m??dicaux ?? la pointe de la technologie et conformes
              aux normes internationales. Nous vous offrons aussi des conseils et orientations dans votre choix du type d???intervention
              de chirurgie esth??tique, tout au long de votre <a href='/procedure/'> s??jour esth??tique en Tunisie.</a>

              </p> <p>  Si vous d??sirez sauter le pas et vous offrir une chirurgie esth??tique en Tunisie, avec une clinique fiable, proposant
              des prestations de tr??s bonne facture ?? des tarifs avantageux. Alors MedicaTour est la clinique qui satisfera tous vos besoins.</p>

            <h2 className="titrePageIndexh2 w-80 justify-content-center pt-3">Chirurgie esth??tique en Tunisie : Comment r??server mon intervention chirurgicale et les d??marches ?? suivre</h2>
            <ul className="pt-5">
              <li> Tout d???abord veuillez remplir le formulaire de demande de devis ?? MedicaTour. Vous pouvez cliquez sur le bouton ci-dessous afin de proc??der ?? cette premi??re ??tape</li>
              <li>Un conseiller prendra alors en charge votre demande. Apr??s une premi??re prise de contact, votre conseiller vous demandera quelques informations : le type d???intervention demand??, ainsi que quelques questions g??n??rales sur votre ??tat de sant??. Selon les cas, des photos seront n??cessaires pour votre dossier. Lorsque votre dossier est pr??t,
                notre conseiller se charge de le transmettre au chirurgien afin qu???il puisse ??tablir un premier diagnostic</li>
              <li>Apr??s ce premier diagnostic, nous vous transmettons un devis pr??liminaire</li>
              <li>Apr??s examen et v??rification de votre dossier m??dical par le chirurgien, nous organisons l???intervention. Notre conseiller, selon les disponibilit??s du chirurgien,
                vous contactera pour d??cider des dates d???arriv??e et de votre chirurgie</li>
              <li>Votre conseiller vous communiquera alors votre devis final</li>
              <li>?? votre arriv??e en Tunisie, MedicaTour s???occupe de vous accueillir, ainsi que votre transfert depuis l???a??roport vers votre h??tel. Nous assurons ??galement votre transport depuis l???h??tel vers la clinique. Aussi bien pour la consultation pr??op??ratoire,
                le jour de l???intervention et la consultation post-op??ratoire</li>
              <li>Un conseiller sera ??galement ?? votre disposition durant toute la p??riode de votre convalescence. Nous pouvons ??galement mettre ?? disposition une aide-soignante si n??cessaire</li>
              <li>Enfin les ??quipes de MedicaTour assurent votre transfert de l???h??tel vers l???a??roport le jour de votre d??part</li>
            </ul>
            <div style={{ textAlign: "center" }} >
           <a style={{ textDecoration: 'none',textAlign:"center" }} className='buttonSimulationBlueIndexBleu '  href="/devis">
                         <span>OBTENIR UN DEVIS GRATUIT</span>

                        </a>            <h3 className="titrePageIndexh3 pt-5">Nos Op??rations Esth??tiques</h3>
            </div>
            <div class="row align-items-start pt-3">
              <div class="col-sm">
              <center> 
              <a href='/chirurgie-silhouette-tunisie/' style={{textDecoration:"none"}}>

               <div>
                 <img className="w-50" style={{height:"100%"}} src={section2first} alt="medica-tour image" /></div>
                <div className="pt-3"><p  style={{ textAlign: "center" }}>Chirurgie Esth??tique</p></div>
                <div style={{ width: "80%" }}><p>Chirurgie sein
                  Op??ration visage
                  Intervention silhouette
                  Chirurgie de l'intimit??</p></div>
                  </a>
                  </center> 

              </div>
              <div class="col-sm">
              <center> 
              <a href='/chirurgie-dentaires-tunisie/' style={{textDecoration:"none"}}>

              <div><img className="w-50" style={{height:"100%"}} src={section2second} alt="medica-tour image" /></div>
                <div className="pt-3"><p  style={{ textAlign: "center" }}> Dentisterie Esth??tique</p></div>
                <div style={{ width: "80%" }}><p>Implant dentaire
                  Facette dentaire
                  Blanchiment des dents</p></div>
                  </a>
                  </center>
              </div>
              <div class="col-sm">
              <center>
              <a href='/chirurgie-obesite-tunisie/' style={{textDecoration:"none"}}>

              <div><img className="w-50" style={{height:"100%"}} src={section2third} alt="medica-tour image" /></div>
                <div className="pt-3"><p  style={{ textAlign: "center" }}>Chirurgie De L???ob??sit??</p></div>
                <div style={{ width: "80%" }}><p>Sleeve gastrique
                  By-pass gastrique
                  Anneau gastrique</p></div>
                  </a>
                  </center>
              </div>
          
             
              <div class="col-sm">
              <center>
              <a href='/greffe-cheveux-tunisie/' style={{textDecoration:"none"}}>

               <div><img className="w-50" style={{height:"100%"}} src={section2fourth} alt="medica-tour image" /></div>
                <div className="pt-3"><p  style={{ textAlign: "center" }}>Greffe Poils Et Cheveux</p></div>
                <div style={{ width: "80%" }}><p>Implants capillaire
                  Greffe de la barbe
                  transplantation des sourcils</p></div>
                  </a>
                  </center>
              </div>
              
            </div>
            <div style={{ textAlign: "center" }}> <h3 className="titrePageIndexh3 pt-5" >NOS INTERVENTIONS</h3></div>

            <div class="row align-items-start pt-5" >
              <div class="col">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front " style={{ backgroundColor: "white", border: "2px solid #eeeeee" }}>
                      <img
                        class="img-circle pt-2" style={{ borderRadius: "50%", width: "70%",height:"85%" }} src={flip2} alt="medica-tour image"
                      />
                      <p className="mt-2"style={{ textAlign: "center" }}>Chirurgie mammaire </p>

                    </div>
                    <div class="flip-card-back p-2">
                      La chirurgie mammaire est une proc??dure chirurgicale esth??tique ou reconstructive. Le but de cette intervention permet d??? augmenter le volume de la poitrine, de remodeler sa forme, ou enfin d???am??liorer la sensation de la poitrine. Elle peut aussi ??tre reconstructive, notamment dans le cas d???une mastectomie (ablation)

                      ?? partir de 2000 ???
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front " style={{ backgroundColor: "white", border: "2px solid #eeeeee" }}>
                      <img
                        class="img-circle pt-2" style={{ borderRadius: "50%", width: "70%",height:"85%" }} src={flip4} alt="medica-tour image"
                      />                      <p className="mt-2"style={{ textAlign: "center" }} > Chirurgie de la silhouette </p>   </div>
                    <div class="flip-card-back p-2">
                      La chirurgie de la silhouette est une intervention chirurgicale esth??tique ou reconstructive. Cette chirurgie du corps, permet de redonner ?? la silhouette des proportions harmonieuses, perdues ou non existantes. Pour ce faire, le chirurgien joue sur les contours du corps: ventre, fesses, bras???

                      ?? partir de 1700 ???
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front " style={{ backgroundColor: "white", border: "2px solid #eeeeee" }}>
                      <img
                        class="img-circle pt-2" style={{ borderRadius: "50%", width: "70%",height:"85%" }} src={flip5} alt="medica-tour image"
                      />                      <p className="mt-2"style={{ textAlign: "center" }}> Intervention esth??tique du visage </p>   </div>
                    <div class="flip-card-back p-2">
                      La chirurgie du visage est une proc??dure chirurgicale permettant de corriger certaines imperfections. C???est ??galement un moyen d???estomper le vieillissement du visage. Les proc??dures sont multiples, et permettent de contrer de nombreux aspects disgracieux. La chirurgie du visage s???adresse aux patients de tous ??ges et sexes

                      ?? partir de 1600???
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row align-items-start pt-5" >
              <div class="col">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front " style={{ backgroundColor: "white", border: "2px solid #eeeeee" }}>
                      <img
                        class="img-circle pt-2" style={{ borderRadius: "50%", width: "70%",height:"85%" }} src={flip6} alt="medica-tour image"
                      />                      <p className="mt-2" style={{ textAlign: "center" }}>Traitement de l???infertilit?? (PMA) </p>   </div>
                    <div class="flip-card-back p-2">
                      Les techniques et pratiques m??dicales permettant de traiter l???infertilit??, sont ??galement appel??es PMA (procr??ation m??dicalement assist??e). La procr??ation m??dicalement assist??e d??signe les solutions th??rapeutiques, cliniques et biologiques, tous sexes confondus. MedicaTour propose l???ins??mination artificielle, la biopsie testiculaire et la f??condation in vitro (FIV)

                      ?? partir de 1000 ???
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front " style={{ backgroundColor: "white", border: "2px solid #eeeeee" }}>
                      <img
                        class="img-circle pt-2" style={{ borderRadius: "50%", width: "70%",height:"85%" }} src={flip3} alt="medica-tour image"
                      />                      <p className="mt-2"style={{ textAlign: "center" }}> Chirurgie de l???ob??sit?? </p>   </div>
                    <div class="flip-card-back p-2">
                      La chirurgie de l???ob??sit?? permet d???am??liorer l?????tat de sant?? du patient ob??se. Pour ce faire, une prise en charge nutritionnelle ?? vie est associ??e ?? une perte de poids durable. La chirurgie bariatrique englobe toutes les techniques m??dicales associ??es ?? la perte de poids.

                      ?? partir de 3200 ???
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front " style={{ backgroundColor: "white", border: "2px solid #eeeeee" }}>
                      <img
                        class="img-circle pt-2" style={{ borderRadius: "50%", width: "70%",height:"85%" }} src={flip1} alt="medica-tour image"
                      />                      <p className="mt-2"style={{ textAlign: "center" }}> Greffe poils et cheveux </p>   </div>
                    <div class="flip-card-back p-2">
                      La greffe capillaire est une technique chirurgicale permettant de traiter une calvitie, un manque de poils de la barbe ou des sourcils. Ces proc??dures sont l?????volution de la proc??dure de greffe capillaire FUE ??tendant la zone donneuse au corps entier.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center" }} className="pt-5">
          <center>  <a style={{ textDecoration: 'none',textAlign:"center" }} className='buttonSimulationBlueIndexBleu '  href="/devis">
                          <span>OBTENIR UN DEVIS GRATUIT</span>

                        </a>     </center>         </div>

            <div>
              <h2 className="titrePageIndexh2 pt-5">MedicaTour votre partenaire privil??gi?? de chirurgie esth??tique en Tunisie.</h2>
              <p> Des soins prodigu??s par la m??decine esth??tique aux interventions chirurgicales, nous offrons une panoplie compl??te de services. Notre objectif est de vous permettre d???atteindre le bien-??tre, rajeunissement ou embellissement que vous recherchez.

                Nous tenons ?? offrir les meilleurs soins et satisfaire les attentes de nos patients. Nous proposons des prestations chirurgicales de qualit??, ?? l???aide de nos chirurgiens renomm??s.

                Sp??cialiste de la chirurgie esth??tique en Tunisie, MedicaTour offre une gamme compl??te d???interventions esth??tiques : de la chirurgie du visage au remodelage de votre silhouette, en passant par la chirurgie intime ou la greffe de cheveux.
                Nous nous engageons ?? vous accompagner et vous garantir le meilleur s??jour esth??tique en Tunisie possible.</p>
              <h4 className="titrePageIndexh4 pt-4">La chirurgie esth??tique en Tunisie : Pour qui ?</h4>
              <p>Recourir ?? une intervention chirurgicale esth??tique peut venir de besoins vari??s. Ils peuvent ??tre purement esth??tiques, mais aussi pour des raisons th??rapeutiques. </p>
              <ul>
                <li>Votre intervention de chirurgie esth??tique peut viser ?? corriger ou embellir votre apparence physique. Ces patients sont ?? la recherche d???une intervention purement esth??tique. Ils d??sirent un rajeunissement, corriger une imperfection, ou embellir une ou plusieurs zones de leur physique.</li>
                <li>D???autre part, une chirurgie r??paratrice a des vertus th??rapeuthiques. Elle peut permettre la correction d???une malformation, ou encore r??parer des cicatrices. Ces patients visent ?? retrouver leur int??grit?? physique. Aussi bien apr??s le traitement d???une malformation, le retrait d???une tumeur, ou toute intervention laissant des s??quelles visibles.</li>
              </ul>
              <p>Quelle que soit vos motivations pour recourir ?? une <a href='/a-propos/'> op??ration de chirurgie esth??tique en Tunisie</a>, elle vous permet d???am??liorer votre confort.</p>
              <h4 className="titrePageIndexh4 pt-4">Pourquoi choisir la Tunisie comme destination m??dicale ?</h4>
              <p>Depuis pr??s d???une dizaine d???ann??es, la Tunisie se positionne en tant qu???acteur majeur du tourisme m??dical. En effet, la Tunisie accueille un nombre croissant d?????trangers ayant choisi cette destination pour leur chirurgie esth??tique. Cela s???explique notamment par des conditions sanitaires strictes, des services m??dicaux d??velopp??s et des comp??tences reconnues ?? l?????chelle internationale.</p>
              <h4 className="titrePageIndexh4 pt-4">Des soins haut de gamme tout pr??s de chez vous</h4>
              <p>Avec son climat et une offre touristique de qualit?? , la Tunisie est devenue une destination incontournable du tourisme m??dical. En effet, La Tunisie est la deuxi??me destination du continent, avec pr??s de 500 000 patients trait??s en 2018. Sa position g??ographique avantageuse et sa qualit?? de soins ?? prix avantageux, en fait donc une destination de choix.</p>
              <h4 className="titrePageIndexh4 pt-4">Les meilleurs chirurgiens esth??tiques en Tunisie
              </h4>
              <p>Nous sommes une clinique de tourisme m??dical facilitant votre <a href='/sejour-medical/'> s??jour de chirurgie esth??tique en Tunisie</a>. Nos services comprennent:<br />

                -L???organisation de votre s??jour esth??tique<br />

                -L???accompagnement tout au long des diff??rentes ??tapes de votre intervention<br />

                -La mise en relation avec le chirurgien id??al pour votre intervention<br />

                Afin de vous faire b??n??ficier de la meilleure expertise du pays, MedicaTour s???assure de travailler avec les meilleurs chirurgiens tunisiens. Cela nous permet de garantir ?? nos patients la qualit?? de nos prestations chirurgicales. Nos chirurgiens sont choisis suite ?? un processus de s??lection bas?? sur : </p>
              <ul>
                <li>Une revue approfondie de leur carri??re </li>
                <li>La qualit?? de leurs interventions</li>
              </ul>
              <p>Forts de leur longue exp??rience, nos chirurgiens offrent les meilleurs traitements pour chaque patient.</p>
            </div>
            <div style={{ textAlign: "center" }} className="pt-5">
          <center>  <a style={{ textDecoration: 'none',textAlign:"center" }} className='buttonSimulationBlueIndexBleu '  href="/devis">
                          <span>OBTENIR UN DEVIS GRATUIT</span>

                        </a> </center>             </div>

            <Carousel1
            responsive={responsive}
            >
              <div className="pt-5">
                <h2 className="titlehch">Chirurgien de l???ob??sit??</h2>
                <img style={{height:"100%"}}
                  className="d-block w-75"
                  src={doctor1}
                  alt="medica-tour image"
                />
                <p>Dr Mohamed Bourguiba Belgacem</p>
              </div>
              <div className="pt-5">
                <h2 className="titlehch">Chirurgien dentaire</h2>

                <img style={{height:"100%"}}
                  className="d-block w-75"
                  src={doctor2}
                  alt="medica-tour image"
                />
                <p>Dr Jouda Ben Mustapha Sghaier</p>

              </div >
              <div className="pt-5">
                <h2 className="titlehch">Chirurgien esth??tique</h2>

                <img style={{height:"100%"}}
                  className="d-block w-75"
                  src={doctor3}
                  alt="medica-tour image"
                />
                <p>Dr Mohamed ALI ABDELAALI</p>

              </div >
              <div className="pt-5">
                <h2 className="titlehch">Chirurgien esth??tique</h2>

                <img style={{height:"100%"}}
                  className="d-block w-75"
                  src={doctor4}
                  alt="medica-tour image"
                />
                <p>Dr Hichem Mahmoud</p>

              </div>
              <div className="pt-5">
                <h2 className="titlehch">Chirurgien esth??tique</h2>

                <img style={{height:"100%"}}
                  className="d-block w-75"
                  src={doctor5}
                  alt="medica-tour image"
                />
                <p>Dr Zied Mabrouki</p>

              </div>
              <div className="pt-5">
                <h2 className="titlehch">Traitement de l???infertilit??</h2>

                <img style={{height:"100%"}}
                  className="d-block w-75"
                  src={doctor6}
                  alt="medica-tour image"
                />
                <p>Dr Chiheb ben said</p>

              </div>
              <div className="pt-5">
                <h2 className="titlehch">M??decin esthetique</h2>

                <img style={{height:"100%"}}
                  className="d-block w-75"
                  src={doctor7}
                  alt="medica-tour image"
                />
                <p>Dr Donia Ben Jemia</p>

              </div>

            </Carousel1>
            
            <div style={{ textAlign: "center" }} className="pt-5">
         <center>   <a style={{ textDecoration: 'none',textAlign:"center" }} className='buttonSimulationBlueIndexBleu '  href="/devis">
                          <span>OBTENIR UN DEVIS GRATUIT</span>

                        </a> </center>             </div>
            <h3 className="titrePageIndexh3 pt-4">VOTRE S??JOUR DE CHIRURGIE ESTHETIQUE EN TUNISIE</h3>
            <div class="container">
              <div class="row pt-5">
                <div class="col-sm">
                  <img
                    className="d-block w-100"
                    src={sejour1}
                    style={{ borderRadius: "10px",height:"100%" }}

                    alt="medica-tour image"
                  />    </div>
                <div class="col-sm">
                  <p>Une offre extr??mement avantageuse: Ainsi, MedicaTour offre ?? ses patients le meilleur service de chirurgie esth??tique en Tunisie avec des tarifs pouvant ??tre jusqu????? 50% moins cher qu???en Europe. Donc, MedicaTour met
                    ?? votre disposition un s??jour esth??tique de luxe, ?? un tarif avantageux tout en vous assurant une ??quipe m??dicale ?? la pointe.</p>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row pt-5">
                <div class="col-sm">
                  <p>Une offre extr??mement avantageuse: Ainsi, MedicaTour offre ?? ses patients le meilleur service de chirurgie esth??tique en Tunisie avec des tarifs pouvant ??tre jusqu????? 50% moins cher qu???en Europe. Donc, MedicaTour met
                    ?? votre disposition un s??jour esth??tique de luxe, ?? un tarif avantageux tout en vous assurant une ??quipe m??dicale ?? la pointe.</p>
                </div>
                <div class="col-sm">
                  <img 
                    className="d-block w-100"
                    style={{ borderRadius: "10px",height:"100%" }}
                    src={sejour2}
                    alt="medica-tour image"
                  />

                </div>
              </div>
            </div>
            <div style={{ textAlign: "center" }} className="pt-5">
          <center>  <a style={{ textDecoration: 'none',textAlign:"center" }} className='buttonSimulationBlueIndexBleu '  href="/devis">
                          <span>OBTENIR UN DEVIS GRATUIT</span>

                        </a> </center>             </div>
            <div style={{ textAlign: "center" }} className="pt-5">
              <h3 className="titrePageIndexh3">D??marche chirurgie esth??tique Tunisie</h3>
            </div>
            <div class="container">
              <div class="row">
                <div class="col">
                  <ul>
                    <li>Remplissez le formulaire de devis</li>
                    <li>Apr??s le traitement de votre dossier m??dical d??taill??, nous vous envoyons un devis personnalis??</li>
                    <li>Un mail contenant le planning de votre  s??jour esth??tique en Tunisie vous sera envoy?? apr??s avoir fix??
                      un rendez-vous avec le chirurgien selon vos disponibilit??s respectives.</li>
                    <li>Une fois votre r??servation est confirm??e, nous vous faisons parvenir par mail le planning de votre s??jour esth??tique en Tunisie.</li>
                    <li>Vous trouverez ?? votre accueil notre ??quipe qui vous emm??nera vers votre lieu de r??sidence, la clinique et qui sera ?? votre service.</li>
                  </ul>
                </div>
                <div class="col">
                  <ul>
                    <li>Une consultation pr??-op??ratoire s???impose. Vous pouvez poser toutes les questions et vous aurez par la suite.</li>
                    <li>Votre op??ration de chirurgie esth??tique se d??roulera le lendemain de votre arriv??e ou lors de la date fix??e au pr??alable</li>
                    <li>Apr??s l???intervention, notre ??quipe sera aux petits soins afin de vous accompagner pendant votre convalescence.</li>
                    <li>Une ??quipe MedicaTour vous conduira ?? l???a??roport quelques heures avant votre vol de retour et s???assurera de la bonne d??marche de votre embarquement.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          <div className='container col-sm-w-100 col-md-w-50 col-lg-w-50 col-xl-w-50 col-xxl-w-50 justify-content-center pt-5'>
          <h2 className="titrePageIndexh2 w-80 justify-content-center pt-3">Blog</h2>
</div>
<div className='container col-sm-w-100 col-md-w-50 col-lg-w-50 col-xl-w-50 col-xxl-w-50 justify-content-center pt-5'>       

                     <div className="row">
                            {(() => {
                                const options = [];
                                 if(data.nodes.length >= indice+7)
                                {
                                    var indice1=indice+5
                                }else if(data.nodes.length >= indice+6)
                                   {
                                    var indice1=indice+4

                                   }else if(data.nodes.length >= indice+5)
                                {
                                    var indice1=indice+3

                                }else if(data.nodes.length >= indice+4)
                                   {
                                    var indice1=indice+2

                                }else if(data.nodes.length >= indice+3)
                                {
                                    var indice1=indice+1

                                }else if(data.nodes.length >= indice+2)
                                   {
                                    var indice1=indice

                                }else 
                                {

                                }
                                for (let i = indice; i <= 2; i++) {
                                        options.push(
                                            <div className=" pt-3 col-12 col-xxl-4 col-lg-4  col-md-6 col-sm-12 col-xs-12 mx-auto">
                                                <div className="col-sm ">
                                                    <div className="d-flex flex-column  ">
                                                        <div >
                                                            <a style={{ textDecoration: 'none' }} className=" imgActualite " href={data.nodes[i].uri}>
                                                                <img className="imgActualite " src={data.nodes[i].featuredImage.link} alt={data.nodes[i].featuredImage.title}/>
                                                            </a>
                                                        </div>
                                                        <div >
                                                            <div >
                                                               
                                                                <div>   <b >{data.nodes[indice].date.substring(8, 10)+"/"+data.nodes[indice].date.substring(5, 7)+"/"+data.nodes[indice].date.substring(0, 4)}</b></div>

                                                            </div>
                                                        </div>
                                                        <div className=" ActualiteTitleArticle"><a href={data.nodes[i].uri} style={{ textDecoration: 'none' }}><h3 className="ActualiteTitleArticle" >{data.nodes[i].title}</h3></a></div>
                                                      
                                                    </div>
                                                </div>

                                            </div>

                                        );

                                    }
                            

                                return options;
                            })()}

                        </div>
                        <center className="pb-5"> <a style={{ textDecoration: 'none',textAlign:"center" }} className='buttonSimulationBlueIndexBleu '  href="/actualites/1">
                          <span>Voir plus</span>

                        </a>  </center>
                    
                        </div>


        </Layout>

      </div>

    </div>


  )


}
