import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Loader from './components/Loader'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
 <main>
   
    <NavBar/>
    <ItemListContainer greeting={'BIENVENIDOS'}/>
    <Loader/>
    <ItemDetailContainer/>
    <Footer/>

 </main>
 
)
