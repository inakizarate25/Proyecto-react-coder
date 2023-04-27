import CartWidget from "../CartWidget/CartWidget";
import bars from './assets/bars.svg'
import DarkMode from "../darkMode/DarkMode";
import './Navbar.css'


const Navbar = () => {
   
  return (
    <header>
      <a href="#" className="logo">
       <h1>PHONELAND</h1>
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
     

      <DarkMode/>

        <CartWidget/>
        <div className="bx bx-menu" id="menu-icon" onClick={()  => {
              const menu = document.querySelector('.menu-icon-img')
              const navbar = document.querySelector('.navbar')
            
             
               menu.classList.toggle('bx-x')
        navbar.classList.toggle('open')}}>

          <img className="menu-icon-img" src={bars} /></div>
      </div>
    </header>
  );
};




export default Navbar;
