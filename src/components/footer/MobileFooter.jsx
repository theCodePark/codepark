import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import './mobileFooter.css'

const url = window.location.href;
const shortRoutes = ["showcase", "confirmation"]
let footerName = "mobile-footer"

for(let i = 0; i < shortRoutes.length; i++) {
  if(url.includes(shortRoutes[i])) {
    footerName += " space"
    break;
  }
}
const MobileFooter = () => {

  return(
    <footer className = {footerName} >
      <h4>Site Map</h4>

      <div className='footer-horizontal'>
        <a href="/">Home</a><span className = "divider-block"> | </span>
        <a href="/workshops">Workshops</a><span className = "divider-block"> | </span>
        <a href="/how-it-works">How it Works</a><span className = "divider-block"> | </span>
        <a href="/about">About Us</a><span className = "divider-block"> | </span>
        <a href="/showcase">Showcase</a><span className = "divider-block"> | </span>
        <a href="/sign-up">Sign Up</a>
      </div>

      <h4>Company</h4>
      <div className='footer-horizontal'>
        <a href="https://docs.google.com/document/d/1hMRWd-D40nEoQzL2BfVOXpulfFFeTWHetIrbFlbsfz8/preview" target="_blank">Terms and Conditions</a><span className = "divider-block"> | </span>
        <a href="https://docs.google.com/document/d/1pg_vr-C4f4LcB8CRIez0yNCF1I2zy-00EMBh2_5PpXc/preview" target="_blank">Privacy Policy</a>
      </div>

      <h4>Contact</h4>
      <div className='footer-horizontal'>
        <a href="mailto:atalwalkar719@gmail.com?subject=CodePark%20Contact&cc=" target="_blank">Email</a><span className = "divider-block"> | </span>
        <a href="tel:+1-425-892-0645">+1 (425) 892-0645</a>
      </div>

      <h4>Follow Us</h4>
      <div className='footer-horizontal' style = {{alignItems: "center"}}>
        <a href="#" target="_blank"><BsInstagram size = {25}/></a>
        <a href="#" target="_blank"><BsGithub size = {25}/></a>
        <a href="#" target="_blank"><BsLinkedin size = {25}/></a>
      </div>

      <h4>
        © {new Date().getFullYear()} CodePark
      </h4>
    </footer>
  )
}

export default MobileFooter;