import { useEffect, useState } from "react"
import { getProducts} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    })


    return(

        <div className="item-list-container">
            <h2>{greeting}</h2>

            <ItemList className="item-list" products={products}/>
        </div>

    )
}
export default ItemListContainer