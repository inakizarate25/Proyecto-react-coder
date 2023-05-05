import Item from '../Item'
import './ItemList.css'

const ItemList = ({data = []}) => {
    return (
        <div className="listGroup">
            {data.map((producto) => <Item key={producto.id} info={producto} />)}
         
        </div>
        
    )
}

export default ItemList