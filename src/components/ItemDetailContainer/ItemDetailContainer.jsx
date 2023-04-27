import { useState, useEffect } from "react";
import {getProductById} from '../../asyncMock'
import ItemDetail from '../ItemDetail'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    useEffect(() => {
        getProductById(1)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className="itemDetaliContainer">
            <ItemDetail {...product}/>
        </div>
    )
}
export default ItemDetailContainer
