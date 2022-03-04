import React from 'react';
import Header from './header';
import Footer from './footer';
import logoBlue from '../images/logo/logo-prosper-blue.svg';
import ButtonCalculer from '../components/buttonCalculer';

export default function LayoutPageActualiteDetail({ children }) {

  return (
    <div >
      <div>
        <div className="mt-5 marginHeader">
          <div className="mt-5">
            <div className="pt-2 ">
              <Header logo={logoBlue}/>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
          <div class="bloc-flottantActualiteDetail">
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
        <div className="pt-5 ">
          <Footer/>
        </div>
      </div>
    </div>
  );
}
