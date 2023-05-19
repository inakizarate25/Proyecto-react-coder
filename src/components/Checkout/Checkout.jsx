import {useCartContext} from '../../context/CartContext'
import { Link } from 'react-router-dom'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { useState } from 'react'
import Orden from '../Orden/Orden'
import './Checkout.css'

const Checkout = () => {
    const {cart, totalPrice , cleanCart} = useCartContext()

        const [order, setOrder] = useState({
                    items: cart.map(products => ({id: products.id, title: products.name, price: products.price, quantity: products.quantity})),
                    total: totalPrice(),
        });


        const handleChange = (event) => {
            const { name, value } = event.target;
            setOrder((prevOrder) => ({
              ...prevOrder,
              [name]: value
            }));
          };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(order); 
      };
    
    const handleClick = () => {
        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))
        cleanCart()
    }

return(
    <div className='container'>
         <form onSubmit={handleSubmit}>
            <h2>TUS DATOS</h2>
            <div className="input-group">
            <label>
      Nombre:
      </label>
      <input className='input' type="text" name="nombre" value={order.nombre} onChange={handleChange} />
   
            </div>
   
<div className="input-group">
<label>
      Email:
      </label>
      <input className='input' type="email" name="email" value={order.email} onChange={handleChange} />
   
</div>
<div className="input-group">
<label>
      Dirección:
      </label>
      <input className='input' type="text" name="direccion" value={order.addres} onChange={handleChange} />

</div>
 

    <Link className='send'  type="submit" onClick={handleClick}>Completar compra</Link>
  </form>
    </div>
   
)
  
}

export default Checkout




