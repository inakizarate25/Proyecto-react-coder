import cart from './assets/shopping-bag.svg'
const CartWidget = () => {
    return (
        <div className='cart-widget'>
             <img src={cart} alt="" />
             0
        </div>
       
    )
}

export default CartWidget