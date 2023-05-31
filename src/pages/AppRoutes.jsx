import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const Navbar = lazy(() => import('../components/navbar/Navbar'));
const MobileNavbar = lazy(() => import('../components/navbar/MobileNavbar'));

const Footer = lazy(() => import('../components/footer/Footer'));
const MobileFooter = lazy(() => import('../components/footer/MobileFooter'));

const Home = lazy(() => import('./home/Home'));
const Workshop = lazy(() => import('./workshop/Workshop'));
const About = lazy(() => import('./about/About'));
const Showcase = lazy(() => import('./showcase/Showcase'));
const Signup = lazy(() => import('./signup/Signup'));
const Confirmation = lazy(() => import('./confirmation/Confirmation'));
const HowItWorks = lazy(() => import('./howItWorks/HowItWorks'));


const AppRoutes = () => {

  const stripeTestPromise = loadStripe("pk_live_51NAky3Cf7CaIpKG5pcBTYVPZoeuwWUXrStPsGsDvqwFb83krcrALmsuIByuXlFsPpFLyTIgm3dhndGcY6SMgML1K00X0qsvd1H");

  const NotFound = () => {
    return(
      <div style = {{textAlign: "center", margin: "12.75rem 2rem", width: "calc(100% - 4rem)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}> 
        <h1 style = {{color: "var(--secondary-color)", fontSize: "3rem"}}>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <br />
        <br />
      </div>
    )
  }

  const FooterChosen = () => {
    return window.innerWidth > 767 ? <Footer /> : <MobileFooter />
  }

  const NavbarChosen = () => {
    return window.innerWidth > 767 ? <Navbar /> : <MobileNavbar />
  }

  return(
    <>
      <Elements stripe = {stripeTestPromise}>
        <Suspense>
          <Routes>
            <Route path="/" element={<><NavbarChosen /><Home /><FooterChosen /></>} />
            <Route path="workshops" element={<><NavbarChosen /><Workshop /><FooterChosen /></>} />
            <Route path="how-it-works" element={<><NavbarChosen /><HowItWorks /><FooterChosen /></>} />
            <Route path="about" element={<><NavbarChosen /><About /><FooterChosen /></>} />
            <Route path="showcase" element={<><NavbarChosen /><Showcase /><FooterChosen /></>} />
            <Route path="sign-up" element={<><NavbarChosen /><Signup /><FooterChosen /></>} />
            <Route path="confirmation">
              <Route path=":id" element={<><NavbarChosen /><Confirmation /><FooterChosen /></>} />
            </Route>
            <Route path="*" element={<><NavbarChosen /><NotFound /><FooterChosen /></>} />
          </Routes>
        </Suspense>
      </Elements>
    </>
  )
}

export default AppRoutes;