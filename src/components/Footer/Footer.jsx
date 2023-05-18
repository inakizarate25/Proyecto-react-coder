import "./Footer.css";
import { Link } from "react-router-dom";
import github from './assets/github-alt.svg'
import linkedin from './assets/linkedin.svg'
import ig from './assets/instagram (1).svg'
import { useState, useEffect } from "react";

const Footer = () => {
  // const [showFooter, setshowFooter] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setshowFooter(true);
  //   }, 2000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);
  return (
    // <>{showFooter &&
     <footer>
      <div className="top-footer">
      <div className="logo">
      <Link className="logo-link" to='/'>PHONELAND</Link>
    </div>
    <ul className="navbar-footer">
      <li >
        <Link className="link-a" to={'/category/celulares'}>Celulares</Link>
      </li>

      <li>
      <Link className="link-a" to={'/category/consolas'}>Consolas</Link>
      </li>

      <li>
      <Link className="link-a" to={'/category/accesorios'}>Accesorios</Link>
      </li>
    </ul>
      </div>
  <div className="bottom-footer">
      <p className="copy">
      COPYRIGHT ©2023 Proyecto desarrollado por
      Iñaki Zárate
      </p>
      <div className="redes">
      <a href="https://github.com/inakizarate25">
          <img src={github} alt="github" />
      </a>

      <a href="https://www.linkedin.com/in/inaki-zarate">
          <img src={linkedin} alt="linkedin" />
      </a>

      <a href="https://www.instagram.com/zarateinaki/">
          <img src={ig} alt="instagram" />
      </a>

      </div>
  </div>
  </footer>
  );
};
export default Footer;
