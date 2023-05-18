import { useEffect, useState } from "react"
import ItemList from '../ItemList/ItemList'
import Loader1 from "../Loader1/Loader1"
import './ItemListContainer.css'
import { useParams } from "react-router"
import {getFirestore, getDocs, collection, query , where} from 'firebase/firestore'
import Footer from '../Footer/Footer'


const ItemListContainer = ({greeting}) => {
   const [data, setData] = useState([])

   const {categoryId} = useParams()


   useEffect(() => {
    const querydb = getFirestore()
    const querycollection = collection(querydb, 'productos')

    if(categoryId){
        const queryfilter = query(querycollection, where('category', '==', categoryId), )
        getDocs(queryfilter)
        .then(res=> setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
    }else{
       getDocs(querycollection)
        .then(res=> setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
    }
    
       

   },[categoryId])
 
   const [loading, setLoading] = useState(true)

   useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    },1000)
   })

    return(
    data.length > 0 ?
     (<div className="item-list-container">
    <div className="banner">{greeting}</div>
     <ItemList className="item-list" data={data}/>
     <Footer/>
 </div>) : 
 <Loader1/>
    )
}
export default ItemListContainer
