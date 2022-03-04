import React, { useState,useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import ButtonCalculer from '../components/buttonCalculer';

export default function LayoutPageIntern({ children }) {
  const [btn,setBtn] = useState('btnTop')
  const [offset, setOffset] = useState(0);
  const [a, setA] = useState(0);

  useEffect(() => {
     var a =document.getElementById('footer')
     setA(a.offsetTop)
    window.onscroll = () => {
      setOffset(window.pageYOffset)
      if(window.pageYOffset> a.offsetTop-500){
      setBtn('btnTop1')
     }else{
setBtn('btnTop')
     }
    }
  }, []);
  return (
    <body >
    <div >
      <div>
        <div className="mt-5 marginHeader">
          <div className="mt-5">
            <div className="pt-2 ">
              <Header />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
          <div class={btn +" bloc-flottant"} >
              <ButtonCalculer />
          </div>
        <div className="row">
          <div className="sidbarfix1  pt-2">
            <div className="pt-5">
              {children}
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
    </body>
  );
}
