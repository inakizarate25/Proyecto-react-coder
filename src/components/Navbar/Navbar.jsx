import CartWidget from "../CartWidget/CartWidget";
import logo from "./assets/logo.png";
import bars from './assets/bars.svg'

const Navbar = () => {
    // const menu = document.querySelector('.menu-icon-img')
    // const navbar = document.querySelector('.navbar')
    // menu.onclick = () => {
    //     menu.classList.toggle('bx-x')
    //     navbar.classList.toggle('open')
    // }
  return (
    <header>
      <a href="#" className="logo">
        <img src={logo} alt=" logo" />
      </a>
      <ul className="navbar">
        <li>
          <a href="#">Celulares</a>
        </li>

        <li>
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
     



        <CartWidget/>
        <div className="bx bx-menu" id="menu-icon" onClick={()  => {
              const menu = document.querySelector('.menu-icon-img')
              const navbar = document.querySelector('.navbar')
            
               menu.classList.toggle('bx-x')
        navbar.classList.toggle('open')}}><img className="menu-icon-img" src={bars} /></div>
      </div>
    </header>
  );
};




export default Navbar;
