import cart from './assets/shopping-bag.svg'
import './CartWidget.css'
const CartWidget = () => {
    return (
        <div className='cart-widget'>
             <img src={cart} alt="Cart Widget" />
             0
        </div>
       
    )
}

export default CartWidget