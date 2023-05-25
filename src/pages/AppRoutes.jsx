import { Routes, Route } from 'react-router-dom';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

import Home from './home/Home';
import Workshop from './workshop/Workshop';
import About from './about/About';
import Showcase from './showcase/Showcase';
import Signup from './signup/Signup';
import Confirmation from './confirmation/Confirmation';
import HowItWorks from './howItWorks/HowItWorks';
const AppRoutes = () => {
  return(
    <>
      <Navbar />
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
        <Route path="*" element={<h1>This URL Does Not Exist</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default AppRoutes;