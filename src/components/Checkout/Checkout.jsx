import {useCartContext} from '../../context/CartContext'
import {addDoc, collection, doc, getFirestore, updateDoc, writeBatch} from 'firebase/firestore'
import { useState } from 'react'
import './Checkout.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link, NavLink } from 'react-router-dom'

const Formulario = () => {
    const {cart, totalPrice, cleanCart} = useCartContext()
    const [order, setOrder] = useState({
      buyer: {
        nombre: '',
        email: '',
        direccion: '',
      },
      items: cart.map(products => ({ id: products.id, title: products.name, price: products.price, quantity: products.quantity })),
      total: totalPrice(),
    });

 

    const createOrder = () => {
        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
        .then(({id}) =>{
            const MySwal = withReactContent(Swal)
    
    MySwal.fire({
      text: `N° de orden ${id}`,
      title:<p>Compra realizada con exito</p>,
      icon: 'success',
      showConfirmButton:true,
      confirmButtonText:<button className='listo'>LISTO</button>,
    })  
    })
    cleanCart()
  
}
  
    const handleChange = e => {
      const { name, value } = e.target;
      setOrder(prevOrder => ({
        ...prevOrder,
        buyer: {
          ...prevOrder.buyer,
          [name]: value,
        },
      }));
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      console.log(order);
    };

   
//   
    return (
        <section className="form-container">
            <form onSubmit={handleSubmit}>
                <h2 className='form-title'>Datos de compra</h2>
        <label htmlFor='nombre'>
          Nombre
        </label>
        <input type="text" id='nombre' name="nombre" value={order.buyer.nombre} onChange={handleChange} autoComplete='off' />
        <label htmlFor='email'> 
          Email
        </label>
        <input type="email" id='email' name="email" value={order.buyer.email} onChange={handleChange} autoComplete='off' />
        <label htmlFor='direc'>
          Dirección
        </label>
        <input type="text" id='direc' name="direccion" value={order.buyer.direccion} onChange={handleChange} autoComplete='off' />
        <Link to={`/`} onClick={() => createOrder()} type="submit" className='back enviar'>Enviar</Link>
      </form>
        </section>
      
    );
// 
}
  
  export default Formulario