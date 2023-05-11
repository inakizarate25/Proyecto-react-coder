import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";




const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

  const [quantityAdded, setQuantityAdded] = useState(0)

  const {addItem} = useContext(CartContext)


  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
        id, name, price, img
    }
    addItem(item, quantity)
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
          quantityAdded > 0 ? (
            <Link to={`/cart`} className="terminar">Terminar Compra</Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
          )
        }
         <p>Stock {stock}</p>
      </div>
    </div>
  );
};

export default ItemDetail;

