import NavBar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'
import Error from './components/Error/error'
import Banner from './components/Banner/Banner'
import Cart from './components/Cart/Cart'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'





const App = () => {

    return (
        <main>
            <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route path='/' element={<ItemListContainer greeting={<Banner/>} />}/>
                        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='*' element={<Error/>}/>
                    </Routes>

            </BrowserRouter>
            <Footer/>
      </main>

    )
}

export default App


