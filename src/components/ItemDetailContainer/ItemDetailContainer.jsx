import { useState, useEffect } from "react";
import {getProductById} from '../../asyncMock'
import ItemDetail from '../ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()
  
    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error)
            })
            
    }, [itemId])

    return (
        <div className="itemDetaliContainer">
            <ItemDetail {...product}/>
        </div>
    )
}
export default ItemDetailContainer

