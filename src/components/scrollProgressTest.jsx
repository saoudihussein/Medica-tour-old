import React, { useEffect, useState } from "react";
import './menu.css'
export default function ScrollProgressTest() {

  const[scrollTop,setScrollTop]=useState(0);
  const onSCroll=()=>{
      const winScroll = document.documentElement.scrollTop;
      const height =document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled=(winScroll/height)* 50;
      setScrollTop(scrolled)
  }
  useEffect(() => {
      window.addEventListener("scroll",onSCroll);
      return () => window.addEventListener("scroll",onSCroll);
    
  }, [])

    return (
        <div className="App">
             <div className="progressMainWrapper1">
                <div className="progressMainStyle1"  ></div>
                 </div>
            <div className="progressMainWrapper">
                <div className="progressMainStyle" 
                style={{ width: `${scrollTop}%`}}></div>
                 </div>
        </div>
    );
};

