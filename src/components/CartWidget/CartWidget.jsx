import cart from './assets/shopping-bag.svg'
import './CartWidget.css'
import { Link } from 'react-router-dom'
const CartWidget = () => {
    return (
        <Link to={`/cart`} className='cart-widget'>
             <img src={cart} alt="Cart Widget" />
             0
        </Link>
       
    )
}

export default CartWidget