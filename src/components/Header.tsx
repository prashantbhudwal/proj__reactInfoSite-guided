import logo from "../assets/react-logo.png";

function Header() {
  return (
    <header>
      <nav className="navBar">
        <img className="logo" src={logo} alt="" />
        {/* <h2>ReactFacts</h2> */}
        <ul className="menu">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
