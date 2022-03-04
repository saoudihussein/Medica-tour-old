/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import '../pages/index.css'
import parse from 'html-react-parser';
import LayoutPageActualiteDetail from '../components/LayoutPageContact';
import ButtonCalculer from '../components/buttonCalculer';
const windowGlobal = typeof window !== 'undefined' && window

const ActualiteTemplate = props => {
    const { content } = props.pageContext
    const { image } = props.pageContext
    const { title } = props.pageContext
    const { datefab } = props.pageContext
    function onClickTwitter() {
        if(windowGlobal)
        return window.open("https://twitter.com/intent/tweet?text="+window.location.href, '_blank');
      }   
      function onClickFacebook() {
        if(windowGlobal)
        return window.open("https://www.facebook.com/sharer/sharer.php?u="+window.location.href, '_blank');
      }   
      function onClickLinkedlin() {
        if(windowGlobal)
        return window.open("https://www.linkedin.com/shareArticle?mini=true&amp;url="+window.location.href, '_blank');
      }   
      return (
        <html >
            <body >
                <LayoutPageActualiteDetail>
<div className="container col-sm-w-100 col-md-w-75 col-lg-w-75 col-xl-w-75 col-xxl-w-75 justify-content-center pt-5">
<h1 className="titlePageIntern ">Bloc</h1>

                    <div className="d-flex align-items-start flex-column detailPage" >
                        <div >            <a href="#" class="pt-5 img-fluid"><img className="imgdetailActualite" src={image} /></a>
                            <div className="row">
                                <div className=" col-12 col-xxl-4 col-lg-4  col-md-1 col-sm-0 col-xs-0 mx-auto">
                                </div>
                                <div className=" bg-white  divPositionDetail  p-5 col-12 col-xxl-7 col-lg-7  col-md-11 col-sm-11 col-xs-11 mx-auto" >
                                    <div class=" row ">
                                       
                                        <div className="pt-1 actualiteTagDate ">{datefab.substring(0, 10)}</div>
                                        <h3 className="ActualiteInternTitle ">{title}</h3>

                                    </div>
                                </div>
                                <div className="col-1">
                                </div>
                            </div>
                            <div className="row">
                                <div className=" col-12 col-xxl-4 col-lg-4  col-md-1 col-sm-0 col-xs-0 mx-auto">
                                </div>

                                <div className=" d-flex flex-row col-12 col-xxl-6 col-lg-6  col-md-11 col-sm-11 col-xs-11 mx-auto " >
                                  
                                           
                                            <div className="col-10 mt-5">
                                                {parse(content)}
                                    </div>

                                </div>
                                
                                <div className="col-1">
                                </div>
                            </div>
                        </div>
                    </div>




                    </div>

                </LayoutPageActualiteDetail>



            </body>
        </html>
    )


}
export default ActualiteTemplate