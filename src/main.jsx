import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Loader from './components/Loader/Loader'

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 <main>
    <NavBar/>
    <ItemListContainer greeting={'BIENVENIDOS'}/>
    <Loader/>
    <ItemDetailContainer/>

 </main>
 
)
