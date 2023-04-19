import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 <main>
 <Navbar/>
 <ItemListContainer greeting={'BIENVENIDOS'}/>
 <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>

 </main>
 
)
