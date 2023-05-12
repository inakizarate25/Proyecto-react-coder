import { Link } from 'react-router-dom'
import cart from './assets/shopping-bag.svg'
import './CartWidget.css'

import { Link } from 'react-router-dom'

import React from 'react'
import {useCartContext} from '../../context/CartContext'


const CartWidget = () => {
    const {totalProducts} = useCartContext()
    return (

       
        <Link to={`/cart`} className='cart-widget'>
             <img src={cart} alt="Cart Widget" />
             <span>{totalProducts() || ''}</span>

        </Link>
       
    )
}

export default CartWidget