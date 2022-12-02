import logo from "./images/logo.svg";
import arrow from "./images/icon-arrow-down.svg";
const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/" id="contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="title">
        <h1>We are Creatives</h1>
        <div className="img-wrapper">
          <img src={arrow} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
