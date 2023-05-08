import NavBar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



const App = () => {

    return (
        <main>
        <BrowserRouter className="browser">
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        </Routes>
     </BrowserRouter>
      </main>

    )
}

export default App


