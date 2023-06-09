import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import DarkMode from '../darkMode'
import { Link, NavLink } from "react-router-dom";


const Navbar = (  ) => {
  const nav = () => {
    const menu = document.querySelector(".burger");
    const navbar = document.querySelector(".navbar");
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
  }

  return (
    <header>
      <div className="logo">
        <Link className="logo-link" to='/'>PHONELAND</Link>
      </div>
      <ul className="navbar">
        <li >
          <NavLink className={({isActive}) => isActive ? 'active' : 'link-a'} to={'/category/celulares'}>Celulares</NavLink>
        </li>

        <li>
        <NavLink className={({isActive}) => isActive ? 'active' : 'link-a'} to={'/category/consolas'}>Consolas</NavLink>
        </li>

        <li>
        <NavLink className={({isActive}) => isActive ? 'active' : 'link-a'} to={'/category/accesorios'}>Accesorios</NavLink>
        </li>
      </ul>

      <div className="right">
        <DarkMode />

        <CartWidget />
        <label className="burger bx bx-menu" htmlFor="burger">
          <input
            type="checkbox"
            id="burger"
            onClick={nav}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </header>
  );
};

export default Navbar;
