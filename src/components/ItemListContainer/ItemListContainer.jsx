import { useEffect, useState } from "react"
import { products } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import Loader from "../Loader/Loader"
import './ItemListContainer.css'
import { useParams } from "react-router"


const ItemListContainer = () => {
   const [data, setData] = useState([])

   const {categoryId} = useParams()


   useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(products)
        },1000)
    })
    if(categoryId){
        getData.then(res=> setData(res.filter(producto => producto.category === categoryId)) )
    }else {
        getData.then(res=> setData(res) )
    }
   },[categoryId])
 


    return(

        <div className="item-list-container">
           
 
            <Loader/>
           
            <ItemList className="item-list" data={data}/>
        </div>

    )
}
export default ItemListContainer
