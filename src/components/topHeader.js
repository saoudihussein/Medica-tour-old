import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../components/header.css';
import logo from '../images/logo/logo.png';
import Menu from './menu1'

import $ from 'jquery';

export default class Header extends React.Component {

  render() {
    return (
      <div>
        <div>
          <aside >

            <div className={'sidebar-menu disabled'}>
              <Menu collapsed={true} />
            </div>
            <div className="content-nav" >
              <Navbar expand="lg" className={'navbar-expand-lg'}>
                <div className='col-11 col-sm-11 col-lg-6 col-md-11 col-xl-6'>
                  <div className='row'>
                    <div className='col-3'>
                      <div className='row justify-content-center'>

                        <div style={{ backgroundColor: "white", width: "25px", borderRadius: "50%", marginLeft: "12%" }}><a href="https://www.facebook.com/Medicatour.fr" style={{ marginLeft: "15%" }} class="fab fa-facebook-f" ></a></div>
                        <div style={{ backgroundColor: "white", width: "25px", borderRadius: "50%", marginLeft: "5px" }}><a href="https://www.instagram.com/medicatour.fr/?hl=fr" style={{ marginLeft: "15%" }} class="fab fa-instagram" ></a></div>
                        <div style={{ backgroundColor: "white", width: "25px", borderRadius: "50%", marginLeft: "5px" }}><a href="https://www.linkedin.com/company/medica-tour-fr/" style={{ marginLeft: "15%" }} class="fab fa-linkedin-in" ></a></div>
                      </div>
                    </div>
                    <div className='col-9'>
                      <div className='row '>
                        <div className='col-6'>
                          <a  href='tel:+33 1 83 62 41 72' style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}> +33 1 83 62 41 72 </a>

                        </div>

                        <div className='col-6'>
                          <i class=" fa  fa-phone" style={{ color: "white" }}></i>

                          <a className='pl-2' href='tel:+216 22 543 410' style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}>22 543 410 </a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className='col-1 col-sm-1 col-lg-6 col-md-1 col-xl-6 '>
                  <Navbar.Toggle aria-controls="navbarScroll" onClick={(event) => {
                    let btn = $(event.target);
                    btn.toggleClass('opened');
                    btn.parents('.content-nav')
                      .prev('.sidebar-menu')
                      .toggleClass('disabled');
                  }} />
                  <Nav className="mr-auto my-2 my-lg-0 topHeadermarg"

                    navbarScroll>
                    <Menu />
                  </Nav>
                </div>
              </Navbar>

            </div>

          </aside>
        </div>

      </div>
    );
  }

}


