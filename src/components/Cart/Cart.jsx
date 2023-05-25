import './cart.css'
import trash1 from './imgs/trash-blanco.svg'
import {useCartContext} from '../../context/CartContext'
import ItemCart from '../ItemCart'
import { Link } from 'react-router-dom'




const Cart = () => {
    
const {cart, totalPrice, cleanCart} = useCartContext()




return cart.length === 0 ?
<section className="cart">
<h2>CARRITO VACIO</h2>
<Link className='back' to={`/`}>Volver</Link>
</section>
:
<section className='cart'>
<div className="cart-title">
    <h2>TU CARRITO</h2>
</div>
<div className="cart-content">
{
    cart.map(product => <ItemCart key={product.id} product={product}/>)
}
</div>
<div className="total">
    <span className="total-precio">
        total compra: ${totalPrice()}
    </span>
    <div className="total1">
    <Link className="finalizar" to={`/checkout`}>Finalizar compra</Link>
    <button className="vaciar">
        <img className="img-vaciar" src={trash1} />
        <span onClick={()=> cleanCart()} className="lable">Vaciar carrito</span>
      </button>
    </div>
    
</div>

</section>
}

export default Cart