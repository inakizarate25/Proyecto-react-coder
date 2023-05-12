import { Link } from 'react-router-dom'
import cart from './assets/shopping-bag.svg'
import './CartWidget.css'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
import React from 'react'
import {useCartContext} from '../../context/CartContext'

>>>>>>> context
const CartWidget = () => {
    const {totalProducts} = useCartContext()
    return (
<<<<<<< HEAD
        <Link to={`/cart`} className='cart-widget'>
             <img src={cart} alt="Cart Widget" />
             0
=======
       
        <Link to={`/cart`} className='cart-widget'>
             <img src={cart} alt="Cart Widget" />
             <span>{totalProducts() || ''}</span>
>>>>>>> context
        </Link>
       
    )
}

export default CartWidget