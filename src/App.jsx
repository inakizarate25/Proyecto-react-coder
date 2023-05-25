import './index.css'
import NavBar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error from './components/Error/error'
import Banner from './components/Banner'
import Cart from './components/Cart/Cart'
import CartProvider from './context/CartContext'
import Top from './components/Top'
import Formulario from './components/Checkout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {

    return (
    <main>
            <BrowserRouter>
            <CartProvider>
                    <NavBar/>
                    <Routes>
                        <Route path='/' element={<ItemListContainer greeting={<Banner/>} />}/>
                        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='/checkout' element={<Formulario/>}/>
                        <Route path='*' element={<Error/>}/>
                    </Routes>
            </CartProvider>
            </BrowserRouter>
        <Top/> 
    </main>
    )
}

export default App


