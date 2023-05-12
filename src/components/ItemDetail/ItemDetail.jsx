import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";




const ItemDetail = ({id, img, name, price,stock, category, description}) => {
  const [goToCart, setGoToCart] = useState(false)
  const {addProduct} = useCartContext()

  const onAdd = (quantity) => {
    setGoToCart(true)
    addProduct({
      id,img,name,price
    }, quantity)
  }





  return (
    <div className="CardItem">
      <div className="left-info">
        <img src={img} alt={name} className="img-info" />
      </div>
      <div className="right-info">
        <h2 className="card-info-title">{name}</h2>
        <span>Decripcion: <strong>{description}</strong></span>
        <p>Precio: <strong>${price}</strong></p>
        <span>Categoria: <strong>{category}</strong></span>

        {
          goToCart
              ? <Link className="back" to={'/cart'}>Ir al Carrito</Link>
              : <ItemCount
              initial={1}
              stock={stock}
              onAdd={onAdd}
            />
        }
         <p>Stock {stock}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
