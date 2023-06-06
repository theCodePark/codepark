import './navbar.css'
import logo from '../../images/logo.png'
const Navbar = () => {
  return(
    <nav className="navbar">
    <a className="navbar-brand" href="/">
      <img src={logo} alt="Company Logo" />
    </a>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item underline-transition">
        <a className="nav-link" href="/workshops">Workshops</a>
      </li>
      <li className="nav-item underline-transition">
        <a className="nav-link" href="/what-we-do">What We Do</a>
      </li>
      <li className="nav-item underline-transition">
        <a className="nav-link" href="/about">About Us</a>
      </li>
      <li className="nav-item underline-transition">
        <a className="nav-link" href="/showcase">Showcase</a>
      </li>
      <li className="green-button nav-item">
        <a className="nav-link" style = {{color: "white"}} href="/sign-up">Sign Up</a>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar;