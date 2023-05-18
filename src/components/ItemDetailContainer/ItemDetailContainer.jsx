import { useState, useEffect } from "react";

import ItemDetail from '../ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from "react-router";
import {getFirestore, getDoc, doc} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { itemId } = useParams()
  
    useEffect(() => {
const querydb = getFirestore()
const querydoc = doc(querydb, 'productos', itemId)
getDoc(querydoc)
    .then(res => setProduct({id: res.id, ...res.data()}))
    }, [itemId])

    return (
        <div className="itemDetaliContainer">
            <ItemDetail {...product}/>
        </div>
    )
}
export default ItemDetailContainer
