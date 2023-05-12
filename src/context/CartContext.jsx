import React, {useState, useContext} from "react";
const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)


const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    // VACIAR CARRITO
    const cleanCart = () => setCart([])

    // DETECTAR SI EL PRODUCTO ESTA EN EL CARRITO
    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false
    }

    // BORRAR PRODUCTO DEL CARRITO
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))

    // AGREGAR PRODUCTO AL CARRITO
    const addProduct = (item, quantity) => {
        if(isInCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }))
        }else{
            setCart([...cart, {...item, quantity}])
        }
    }

    // TOTAL DE PRODUCTOS
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)

  // PRECIO TOTAL
    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }


    console.log('CARRITO ', cart)
   return(
        <CartContext.Provider value={{
            cleanCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider