import { useEffect, useState } from "react"
import { products } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from "react-router"


const ItemListContainer = ({ greeting }) => {
   const [data, setData] = useState([])

   const {categoryId} = useParams()


   useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
    if(categoryId){
        getData.then(res=> setData(res.filter(producto => producto.category === categoryId)) )
    }else {
        getData.then(res=> setData(res) )
    }
   },[categoryId])
 


    return(

        <div className="item-list-container">
            <h2>{greeting}</h2>
 

           
            <ItemList className="item-list" data={data}/>
        </div>

    )
}
export default ItemListContainer