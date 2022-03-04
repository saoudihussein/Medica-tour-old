/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import '../pages/index.css'
import parse from 'html-react-parser';
import LayoutPageContact from './LayoutPageContact';
import '../fonts/font.css';
import '../pages/index.css'
import { Helmet } from "react-helmet"
import icon1 from '../images/icons/apple-touch-icon.png'
import icon2 from '../images/icons/favicon-32x32.png'
import icon3 from '../images/icons/favicon-16x16.png'
import CookieConsent from "react-cookie-consent";
import '../pages/index.css'
import menu1 from '../images/img/menu1.jpg';
import menu2 from '../images/img/unnamed.png';
import WhatsApp from './whatsApp';
const timeout = 222200
const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `all ${timeout}ms ease-in-out`,
    opacity: 0
  },
}
const INTERN = props => {
  const { content } = props.pageContext
  const { title } = props.pageContext
  const { breadcrumbs } = props.pageContext
  const { SEOTitle } = props.pageContext
  const { SEODescription } = props.pageContext


  return (

    <div >
      <CookieConsent enableDeclineButton flipButtons
        location="bottom"
        buttonText="Accepter"
        declineButtonText="Décliner"
        cookieName="Cookies prosper"
        style={{ background: "#439fc6" }}
        buttonStyle={{ color: "white", background: "#439fc6", fontSize: "18px", fontFamily: "Akkurat Pro,Helvetica,Arial,sans-serif" }}
        declineButtonStyle={{ color: "white", background: "#439fc6", fontSize: "18px", fontFamily: "Akkurat Pro,Helvetica,Arial,sans-serif" }}

        expires={150}



      >

        <div style={{ width: "80%", padding: "10px " }}> En poursuivant votre navigation sur ce site, vous acceptez notre <a href="/mentions-legales" style={{ color: "yellow" }}> politique
          de protection </a> des données et notamment que des cookies soient utilisés afin
          de réaliser des statistiques d’audience,
          d’améliorer votre expérience d’utilisateur et de vous offrir des contenus personnalisés.{" "}</div>
      </CookieConsent>
      <Helmet>
        <html lang="fr" />
        <meta charset="UTF-8" />
        <meta name="description" content={SEODescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{SEODescription}</title>
        <link rel="apple-touch-icon" sizes="180x180" href={icon1} />
        <link rel="icon" type="image/png" sizes="32x32" href={icon2} />
        <link rel="icon" type="image/png" sizes="16x16" href={icon3} />
      </Helmet>

      <LayoutPageContact>
        <div class="row .d-none" >

          <div class="col-1">

          </div>
          <div class="pt-5 col-lg-8 col-sm-12">
            {parse(content)}
          </div>
          <div className='d-none d-sm-block'>
            <div class="col-1">

            </div>


            <a href='/devis ' className='.d-none'>   <div className='menufloat'>
              <img style={{ height: "100%" }} src={menu1}
                alt="logo image " />

            </div>
            </a>
            <a href='/chirurgiens/ ' className='.d-none'>   <div className='menufloat2'>
              <img style={{ height: "100%" }} src={menu2}
                alt="logo image " />

            </div>
            </a>
            <div className='menufloat1 ' style={{ backgroundColor: "#66d0cc" }}>
              <div class="row">
                <div  >
                  <i class="fa  fa-phone" style={{ fontSize: "70%" }}></i>
                </div>
                <div class=" iconText">
                  <a href="tel:+33 1 83 62 41 72" style={{ color: 'white' }} >+33 1 83 62 41 72
                  </a>
                </div>

              </div>
              <div class="row">
                <div  >
                  <i class="fa fa-whatsapp" style={{ fontSize: "70%" }}></i>
                </div>
                <div class=" iconText">
                  <a href="tel:+216 22 543 410" style={{ color: 'white' }} >    +216 22 543 410
                  </a>

                </div>

              </div>
              <div class="row">
                <div  >
                  <i class="fa  fa-envelope-o" style={{ fontSize: "70%" }}></i>
                </div>
                <div class=" iconText" >

                  contact@medica-tour.fr
                </div>

              </div>
              <div class="row">
                <div  >
                  <i class="fa  fa-home" style={{ fontSize: "70%" }}></i>
                </div>
                <div class=" iconText" style={{ marginTop: "-36px" }}>
                  145, RES MAYA "B" - H NOUIRA, BORJ LOUZIR 2073    </div>

              </div>
            </div>
          </div>







          <div class="container d-block d-sm-none d-md-none d-lg-none d-xl-none">
            <div class="row">
              <div class="col align-self-start">

              </div>
              <div class="col align-self-center">
                <div className='pb-4'>
                  <div class="col-1">

                  </div>


                  <a href='/devis ' >   <div className='pb-4' >
                    <img style={{ height: "100%" }} src={menu1}
                      alt="logo image " />

                  </div>
                  </a>
                  <a href='/chirurgiens/ ' >   <div className='pb-4' >
                    <img style={{ height: "106px" }} src={menu2}
                      alt="logo image " />

                  </div>
                  </a>
                  <div style={{ backgroundColor: "#66d0cc", paddingLeft: "24px" }}>
                    <div class="row">
                      <div  >
                        <i class="fa  fa-phone" style={{ fontSize: "70%" }}></i>
                      </div>
                      <div class=" iconText">
                        <a href="tel:+33 1 83 62 41 72" style={{ color: 'white' }} >+33 1 83 62 41 72
                        </a>
                      </div>

                    </div>
                    <div class="row">
                      <div  >
                        <i class="fa fa-whatsapp" style={{ fontSize: "70%" }}></i>
                      </div>
                      <div class=" iconText">
                        <a href="tel:+216 22 543 410" style={{ color: 'white' }} >    +216 22 543 410
                        </a>

                      </div>

                    </div>
                    <div class="row">
                      <div  >
                        <i class="fa  fa-envelope-o" style={{ fontSize: "70%" }}></i>
                      </div>
                      <div class=" iconText" >

                        contact@medica-tour.fr
                      </div>

                    </div>
                    <div class="row">
                      <div  >
                        <i class="fa  fa-home" style={{ fontSize: "70%" }}></i>
                      </div>
                      <div class=" iconText" style={{ marginTop: "-36px" }}>
                        145, RES MAYA "B" - H NOUIRA, BORJ LOUZIR 2073    </div>

                    </div>
                  </div>
                </div>
              </div>
              <div class="col align-self-end">

              </div>
            </div>
          </div>


        </div>
      </LayoutPageContact>

      <WhatsApp></WhatsApp>


    </div>
  )


}
export default INTERN


