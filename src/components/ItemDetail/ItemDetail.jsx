import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import Loader1 from "../Loader1/Loader1";






const ItemDetail = ({id, img, name, price,stock, category, description}) => {
  const [goToCart, setGoToCart] = useState(false)
  const {addProduct, removeProduct} = useCartContext()

  const onAdd = (quantity) => {
    setGoToCart(true)
    addProduct({
      id,img,name,price, stock
    }, quantity)
  }

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },500)
  })




  return loading ? <Loader1/>
:
<div className="CardItem">
      <div className="left-info">
        <img src={img} alt={name} className="img-info" />
      </div>
      <div className="right-info">
        <h2 className="card-info-title">{name}</h2>
        <span>Decripcion: <strong>{description}</strong></span>
        <p className="prec">Precio: <strong>${price}</strong></p>
        <span className="cate">Categoria: <strong>{category}</strong></span>

        {
          goToCart
              ? <Link className="terminar" to={'/cart'}>Ir al Carrito</Link>
              : <ItemCount
              initial={1}
              stock={stock}
              onAdd={onAdd}
              
            />
        }
         <p>Stock: {stock}
         </p>
      </div>
    </div>
};

export default ItemDetail;
