import { useCartContext } from '../../context/CartContext'
import './ItemCart.css'


const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext()


    return ( <div className="itemCart">
    <div className="diamond-container">
        <div className="diamond">
            <div className="diamond-wrapper">
                <div className="diamond-content">{product.price}</div>
            </div>
        </div>
    </div>
    <div className="item-wrapper">
        <div className="content-wrapper">
            <div className="img-containerCart">
                <img className="item-imgCart" src={product.img} />
            </div>
            <div className="content-text">
                <div className="item-name">{product.name}</div>
                <p className='item-name cantidad'>{product.quantity}</p>
                <p className='item-name cantidad'>${product.quantity*product.price}</p>
            </div>
        </div>
        <div onClick={() => removeProduct(product.id)} className="view-more-btn">ELIMINAR</div>
    </div>
</div>)
}
export default ItemCart