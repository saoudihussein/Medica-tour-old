import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../components/header.css';
import logo from '../images/logo/logo.png';
import Menu from './menu'

import $ from 'jquery';

export default class Header extends React.Component {

  render () {
    return (
   <div>
     <div>
      <aside >
      
        <div className={'sidebar-menu disabled'}>
          <Menu />
        </div>
        <div className="content-nav">
          <Navbar expand="lg" className={'navbar-expand-lg'}>
            <a style={{ textDecoration: 'none' }}
                     className="text-secondary h6 pt-2" 
                    href="/">
              <img style={{height:"100%"}}  className="img " src={logo }
                   alt="logo image "/>
            </a>
            <Navbar.Toggle aria-controls="navbarScroll" onClick={(event) => {
              let btn = $(event.target);
              btn.toggleClass('opened');
                btn.parents('.content-nav')
                .prev('.sidebar-menu')
                .toggleClass('disabled');
            }}/>
            <Nav className="mr-auto my-2 my-lg-0"
                 style={{ maxHeight: '800px' }}
                 navbarScroll>
              <Menu/>
            </Nav>
            <a style={{ textDecoration: 'none' }} className='buttonSimulationBlueIndex d-none d-lg-block d-xl-block  d-xxl-block '  href="/devis">
                          <span>Devis</span>

                        </a>
          </Navbar>
        </div>
   
      </aside>
      </div>
  
      </div>
    );
  }

}


