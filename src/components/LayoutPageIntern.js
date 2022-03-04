import React, { useState,useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import ScrollProgressTest from './scrollProgressTest';
import ButtonCalculer from './buttonCalculer';
import Sidebar from './sidebar';
import logoBlue from '../images/logo/logo-prosper-blue.svg';

export default function LayoutPageIntern({ children }) {
   const [cname,setCname] = useState('sidbarIntern')
   const [btn,setBtn] = useState('btnTop')
   const [offset, setOffset] = useState(0);
   const [a, setA] = useState(0);

   useEffect(() => {
      var a =document.getElementById('footer')
      setA(a.offsetTop)
     window.onscroll = () => {
       setOffset(window.pageYOffset)
       if(window.pageYOffset> a.offsetTop-500){
       setCname('sidbarIntern1')
       setBtn('btnTop1')
      }else{
         setCname('sidbarIntern')
setBtn('btnTop')
      }
     }
   }, []);
  
   return (
     <div class={'page-intern'}>
        <div>
        <div>
        <div className="mt-5 marginHeader">
          <div >
            <div className="pt-2 ">    
              <Header logo={logoBlue}/>
            </div>
          </div>
        </div>
      </div>
           <ScrollProgressTest/>
           <div className="container-fluid noPadding" >
           <div className="pt-5 d-lg-none d-md-block 
">

<ButtonCalculer/>
</div>
           <div className="rowIntern flexWrap" >
              
           <div  className={cname+" col-12 col-xxl-2 col-xl-2 col-lg-2 d-none d-xl-block d-xxl-block "} >
                    <Sidebar></Sidebar>
                 </div>
              
  
                 <div className="marginArticle col-12 col-xxl-6 col-lg-6  col-md-12 col-sm-12 col-xs-12 mx-auto ">
                    {children}
                 </div>
                 <div className={btn+ " col-12 col-xxl-3 col-xl-3 col-md-3 col-lg-3 col-md-12 col-sm-12 col-xs-12  mx-auto "}>

                 <ButtonCalculer/>
                  </div>
                 
                
             
                  </div>
                  </div>
        </div>
        <div className="mt-5 ">
           <div id='footer' className="pt-5 ">
              <Footer/>
           </div>
        </div>
     </div>
   );
}

