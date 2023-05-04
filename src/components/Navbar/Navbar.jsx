import CartWidget from "../CartWidget/CartWidget";
import DarkMode from "../darkMode/DarkMode";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = (  ) => {

  return (
    <header>
      <div className="logo">
        <Link className="logo-link" to={'/'}>PHONELAND</Link>
      </div>
      <ul className="navbar">
        <li >
          <NavLink className={({isActive}) => isActive ? 'active' : 'link-a'} to={'/category/celulares'}>Celulares</NavLink>
        </li>

        <li >
        <NavLink className={({isActive}) => isActive ? 'active' : 'link-a'} to={'/category/notebooks'}>Notebooks</NavLink>
        </li>

        <li>
        <NavLink className={({isActive}) => isActive ? 'active' : 'link-a'} to={'/category/consolas'}>Consolas</NavLink>
        </li>

        <li>
        <NavLink className={({isActive}) => isActive ? 'active' : 'link-a'} to={'/category/acesorios'}>Accesorios</NavLink>
        </li>
      </ul>

      <div className="right">
        <DarkMode />

        <CartWidget />
        <label className="burger bx bx-menu" htmlFor="burger">
          <input
            type="checkbox"
            id="burger"
            onClick={() => {
              const menu = document.querySelector(".burger");
              const navbar = document.querySelector(".navbar");
              const itemListContainer = document.querySelector(
                ".item-list-container"
              );

              menu.classList.toggle("bx-x");
           
                itemListContainer.classList.toggle('margin')
     

              navbar.classList.toggle("open");
            }}
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
