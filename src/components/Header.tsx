import logo from "../assets/react-logo.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav className="navBar">
        <img className="logo" src={logo} alt="" />
        <h2 className="siteName">ReactFacts</h2>
        <h3 className="siteDesc">My First React Project</h3>
      </nav>
    </header>
  );
}
export default Header;
