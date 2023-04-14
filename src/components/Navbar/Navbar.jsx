import CartWidget from "../CartWidget/CartWidget"



const Navbar = () => {
   
    return (

             <nav>
        <h1>PhoneLand</h1>

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