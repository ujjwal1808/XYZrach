import React, {useEffect} from 'react'
import Header from '../Components/Header'

const Contact = () => {


  useEffect( () => {
    
    const script = document.createElement("script");
  script.src = "https://sheetdb.io/s/f/897vqh0vqrcm2.js";
  // script.async = true;

  document.body.appendChild(script);
  
  }, []);

  return (
    <div>
        <Header data="contact"/>
    </div>
  )
}

export default Contact