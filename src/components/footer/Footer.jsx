import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { useState, useEffect } from 'react';

import './footer.css'

const Footer = () => {
  const [footerName, setFooterName] = useState("footer");

  useEffect(() => {
    const url = window.location.href;
    const shortRoutes = ["showcase", "confirmation"]    

    for(let i = 0; i < shortRoutes.length; i++) {
      if(url.includes(shortRoutes[i])) {
        setFooterName("footer bottom");
        break;
      }
    }
  }, []);
  
  return(
    <footer className = {footerName} >
      <div>
        <h4>Site Map</h4>
        <a href="/">Home</a>
        <a href="/workshops">Workshops</a>
        <a href="/what-we-do">What We Do</a>
        <a href="/about">About Us</a>
        <a href="/showcase">Showcase</a>
        <a href="/sign-up">Sign Up</a>
      </div>

      <div>
        <h4>Company</h4>
        <a href="https://docs.google.com/document/d/1hMRWd-D40nEoQzL2BfVOXpulfFFeTWHetIrbFlbsfz8/preview" target="_blank">Terms and Conditions</a>
        <a href="https://docs.google.com/document/d/1pg_vr-C4f4LcB8CRIez0yNCF1I2zy-00EMBh2_5PpXc/preview" target="_blank">Privacy Policy</a>
      </div>

      <div>
        <h4>Contact</h4>
        <a href="mailto:atalwalkar719@gmail.com?subject=CodePark%20Contact&cc=" target="_blank">Email</a>
        <a href="tel:+1-425-892-0645">+1 (425) 892-0645</a>
      </div>

      <div style = {{alignItems: "center"}}>
        <h4>Follow Us</h4>
        {/* <a href="" target="_blank"><BsInstagram size = {25}/></a> */}
        <a href="https://github.com/theCodePark" target="_blank"><BsGithub size = {25}/></a>
        {/* <a href="#" target="_blank"><BsLinkedin size = {25}/></a> */}
      </div>

      <h3 className="copyright">
        © {new Date().getFullYear()} CodePark
      </h3>
    </footer>
  )
}

export default Footer;