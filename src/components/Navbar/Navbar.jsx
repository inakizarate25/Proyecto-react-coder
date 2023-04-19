import CartWidget from "../CartWidget/CartWidget"
import logo from './assets/logo.svg'



const Navbar = () => {
   
    return (

             <nav>
        <a href="#">
            <img src={logo} alt="logo" />
        </a>

        <ul>
            <li>Celulares</li>
            <li>Notebooks</li>
            <li>Consolas</li>
            <li>Accesorios</li>
        </ul>

        <CartWidget/>
        

     </nav>




    
  
    )
}

export default Navbar