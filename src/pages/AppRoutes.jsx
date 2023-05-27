import { Routes, Route } from 'react-router-dom';

import Navbar from '../components/navbar/Navbar';
import MobileNavbar from '../components/navbar/MobileNavbar';

import Footer from '../components/footer/Footer';
import MobileFooter from '../components/footer/MobileFooter';

import Home from './home/Home';
import Workshop from './workshop/Workshop';
import About from './about/About';
import Showcase from './showcase/Showcase';
import Signup from './signup/Signup';
import Confirmation from './confirmation/Confirmation';
import HowItWorks from './howItWorks/HowItWorks';

const AppRoutes = () => {

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

    </>
  )
}

export default AppRoutes;