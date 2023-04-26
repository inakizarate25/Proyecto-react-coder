import ItemCount from "../ItemCount/ItemCount";




const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
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

        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}
        />
         <p>Stock {stock}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
