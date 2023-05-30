import './ItemDetailContainer.css'
import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail'
import Footer from '../Footer/Footer';
import { useParams } from "react-router";
import { getDoc, doc} from 'firebase/firestore'
import { db } from "../../firebase/getFirestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { itemId } = useParams()
  
    useEffect(() => {
        const prodDesc = async () => {
            try {
                const querydoc = doc(db, 'productos', itemId)
            getDoc(querydoc)
                .then(res => setProduct({id: res.id, ...res.data()}))
            } catch (error) {
                console.log(error)
            }
        }
        prodDesc()
    }, [itemId])

    return (
        <div className="itemDetaliContainer">
            <ItemDetail {...product}/>
        </div>
    )
}
export default ItemDetailContainer
