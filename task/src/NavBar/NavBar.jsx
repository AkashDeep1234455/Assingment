import "./navbar.css";
function NavBar() {
  return (
    <div className="navbar">
      <div className="icon">
        <img src="../images.png" alt="logo" className="printifyLogo" />
      </div>
      <ul className="links">
        <li className="li">
          <a href="">Catalog</a>
        </li>
        <li className="li">
          <a href="">How it works</a>
        </li>
        <li className="li">
          <a href="">Pricing</a>
        </li>
        <li className="li">
          <a href="">Blog</a>
        </li>
        <li className="li">
          <a href="">Services</a>
        </li>
        <li className="li">
          <a href="">Use-cases</a>
        </li>
        <li className="li">
          <a href="">Need Help</a>
        </li>
      </ul>
      <div className="userButton">
        <button className="login">Log in</button>
        <button className="signup">Sign up</button>
      </div>
    </div>
  );
}

export default NavBar;
