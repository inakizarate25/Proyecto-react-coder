import './cart.css'
import trash from './imgs/trash-alt.svg'
import trash1 from './imgs/trash-blanco.svg'
import cel from './imgs/m13 - copia.png'
import ItemCount from '../ItemCount/ItemCount'

const Cart = () => {
    return(
        <section className='cart'>

        <div className="cart-title">
            <h2>TU CARRITO</h2>
        </div>

        <div className="cart-content">


            <div className="item-cart">

                <button className="delete tooltip">
                        <img src={trash}/>
                        <span className="tooltiptext">ELIMINAR</span>
                </button>

                <ItemCount/>
		
			    <img className="item-img" src={cel} />

			    <div className="item-name">celular 1</div>

            </div>


        </div>

        <div className="total">
            <span className="total-precio">
                total compra: $10000
            </span>
            <button className="finalizar">Finalizar compra</button>

            <button className="vaciar">
                <img className="img-vaciar" src={trash1} />
                <span className="lable">Vaciar carrito</span>
              </button>
        </div>


    </section>
    )
}

export default Cart