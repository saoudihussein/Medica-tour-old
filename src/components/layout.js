import React from 'react';
import Header from './header';
import '../pages/index.css'

export default function Layout(props){

  return (
    <div className={'page-home'} >
      <div style={{backgroundColor:"#1c3c6e"}}>
        <div className="mt-5 marginHeader">
          <div className="mt-5">
            <div className="pt-2 ">
              <Header logo={props.logo}/>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <main className="background">{props.children}

        </main>
      </div>
    </div>
  );
}