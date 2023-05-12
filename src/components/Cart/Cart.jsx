import './cart.css'
import trash from './imgs/trash-alt.svg'
import trash1 from './imgs/trash-blanco.svg'
import cel from './imgs/m13 - copia.png'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'

const Cart = () => {



    return(
        <section className='cart'>

        <div className="cart-title">
            <h2>TU CARRITO</h2>
        </div>

        <div className="cart-content">


        <div className="itemCart">
		<div className="diamond-container">
			<div className="diamond">
				<div className="diamond-wrapper">
					<div className="diamond-content">$10000</div>
				</div>
			</div>
		</div>
		<div className="item-wrapper">
			<div className="content-wrapper">
				<div className="img-containerCart">
					<img className="item-imgCart" src={cel} />
				</div>
				<div className="content-text">
					<div className="item-name">nombre celular</div>
                    <p className='item-name cantidad'>5 UNIDADES</p>
				</div>
			</div>
			<div className="view-more-btn">ELIMINAR</div>
		</div>
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