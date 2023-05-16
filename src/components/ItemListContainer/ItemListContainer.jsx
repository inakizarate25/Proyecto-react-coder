import { useEffect, useState } from "react"
import { products } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import Loader from "../Loader/Loader"
import Loader1 from "../Loader1/Loader1"
import './ItemListContainer.css'
import { useParams } from "react-router"


const ItemListContainer = ({greeting}) => {
   const [data, setData] = useState([])

   const {categoryId} = useParams()


   useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(products)
        },1000)
    })
    {categoryId ?
        getData.then(res=> setData(res.filter(producto => producto.category === categoryId)))
        :
        getData.then(res=> setData(res))}
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
 </div>) : 
 <Loader1/>
    )
}
export default ItemListContainer
