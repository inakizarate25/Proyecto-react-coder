import { useEffect, useState } from "react"
import { getProducts} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from "react-router"


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()
    useEffect(() => {
        console.log('Categoria: ', categoryId)
    },[categoryId])


    useEffect(() => {
        getProducts(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    },[categoryId])


    return(

        <div className="item-list-container">
            <h2>{greeting}</h2>
 

            <ItemList className="item-list" products={products}/>
        </div>

    )
}
export default ItemListContainer