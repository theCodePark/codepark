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

  const stripeTestPromise = loadStripe("pk_test_51NAky3Cf7CaIpKG5pcBTYVPZoeuwWUXrStPsGsDvqwFb83krcrALmsuIByuXlFsPpFLyTIgm3dhndGcY6SMgML1K00X0qsvd1H");

  const NotFound = () => {
    return(
      <div style = {{textAlign: "center", margin: "15rem 2rem", width: "calc(100% - 4rem)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}> 
        <h1 style = {{color: "var(--secondary-color)", fontSize: "3rem"}}>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <br />
        <br />
      </div>
    )
  }
  return(
    <>
      <Elements stripe = {stripeTestPromise}>
        <Suspense>
        {window.innerWidth > 767 ? <Navbar /> : <MobileNavbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="workshops" element={<Workshop />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="about" element={<About />} />
            <Route path="showcase" element={<Showcase />} />
            <Route path="sign-up" element={<Signup />} />
            <Route path="confirmation">
              <Route path=":id" element={<Confirmation />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          {window.innerWidth > 767 ? <Footer /> : <MobileFooter />}
        </Suspense>
      </Elements>
    </>
  )
}

export default AppRoutes;