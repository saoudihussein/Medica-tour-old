/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react'

import { graphql, StaticQuery } from 'gatsby'
import parse from 'html-react-parser';
import CookieConsent from "react-cookie-consent";

import LayoutPageActualite from './LayoutPageContact';
import { Helmet } from "react-helmet"
import { data } from 'jquery';
const windowGlobal = typeof window !== 'undefined' && window

let i = 0;

const Actualites = props => {


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

                <div>
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


                        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-128586591-1"></script>


                        <meta charset="UTF-8" />
                        {/* {(() => {

 
                        if(windowGlobal)
                        {
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                          
                            gtag('config', 'UA-128586591-1');
                       (function(w,d,s,l,i){w[l]=w[l]||[],
w[l].push({'gtm.start':
       new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
       j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
       'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
       })(window,document,'script','dataLayer','GTM-KDKWV2B');
                        }
   })()} */}
                        <meta name="description" content="Retrouvez ici toutes nos actualités liées à la défiscalisation." />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Investissement &amp; Défiscalisation : l'Actualité Prosper</title>
                        <link rel="apple-touch-icon" sizes="180x180" href='/images/icons/apple-touch-icon.png' />
                        <link rel="icon" type="image/png" sizes="32x32" href='/images/icons/favicon-32x32.png' />
                        <link rel="icon" type="image/png" sizes="16x16" href='/images/icons/favicon-16x16.png' />
                    </Helmet>
                    <LayoutPageActualite>

<div className='container col-sm-w-100 col-md-w-50 col-lg-w-50 col-xl-w-50 col-xxl-w-50 justify-content-center pt-5'>
<h1 className="titlePageIntern ">Blog</h1>
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
                                for (let i = indice; i <= indice1; i++) {
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
                       
                        <div className="d-flex justify-content-center mt-5 pt-5">

                            <button className="btnNavigate" onClick={handlePageClick1} style={{display:windowGlobal ? parseInt(window.location.pathname.split("/").pop())!=1 ? 'block' : 'none':""}}> &lt;</button>
                            <button className="btnNavigate" disabled > 
                            
                            {(() => {
                                                                    const options2 = [];
                                                                    if(windowGlobal)
                                                                    {                                                                    
                                                                            { options2.push(parseInt(window.location.pathname.split("/").pop()-1)) }
                                                                    
                                                                    }  
                                                                    return options2;
                                                                })()}
                             </button>
                             <button className="btnNavigate" onClick={handlePageClick} style={{display:windowGlobal ?parseInt(window.location.pathname.split("/").pop())>data.nodes.length/7 ? 'none' : 'block':""}} aria-disabled="true" > &gt;</button>

                        </div>
                        </div>

                    </LayoutPageActualite>

                </div>
      
    )
}
export default Actualites
