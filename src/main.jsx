import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 <>
 <Navbar/>
 <ItemListContainer greeting={'BIENVENIDOS'}/>
 </>
 
)
