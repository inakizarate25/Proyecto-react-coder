import CartWidget from "../CartWidget/CartWidget";
import bars from "./assets/bars.svg";
import DarkMode from "../darkMode/DarkMode";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <h1>PHONELAND</h1>
      </div>
      <ul className="navbar">
        <li >
          <a href="#">Celulares</a>
        </li>

        <li >
          <a href="#">Notebooks</a>
        </li>

        <li>
          <a href="#">Consolas</a>
        </li>

        <li>
          <a href="#">Accesorios</a>
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
