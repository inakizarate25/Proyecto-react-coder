import './ItemList.css'
import Item from '../Item'


const ItemList = ({data = []}) => {
    return (
        <div className="listGroup">
            {data.map((producto) => <Item key={producto.id} info={producto} />)}
         
        </div>
        
    )
}

export default ItemList
