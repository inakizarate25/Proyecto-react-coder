import cart from './assets/shopping-bag.svg'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {

    return (
        <Link to={`/Cart`} className='cart-widget'>
             <img src={cart} alt="Cart Widget" />
           0
        </Link>
       
    )
}

export default CartWidget
