import facebook from "./images/icon-facebook.svg";
import instagram from "./images/icon-instagram.svg";
import twitter from "./images/icon-twitter.svg";
import pinterest from "./images/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer>
      <div className="logo"></div>
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
        </ul>
      </nav>
      <ul className="icons">
        <li className="icon">
          <a href="/">
            <img src={facebook} alt="" />
          </a>
        </li>
        <li className="icon">
          <a href="/">
            <img src={instagram} alt="" />
          </a>
        </li>
        <li className="icon">
          <a href="/">
            <img src={twitter} alt="" />
          </a>
        </li>
        <li className="icon">
          <a href="/">
            <img src={pinterest} alt="" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
