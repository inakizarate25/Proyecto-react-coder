import { useState } from "react";
import addCart from './assets/addCart.svg'

const itemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock){
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return (
      <div className="counter">
        <div className="controls">
          <button className="button-counter" onClick={decrement}>
            -
          </button>
          <p className="number-counter">{quantity}</p>
          <button className="button-counter" onClick={increment}>
            +
          </button>
        </div>

        <button type="button" className="button"  onClick={() => onAdd(quantity)}
          disabled={!stock}>
          <span className="button__text">Add Item</span>
          <span className="button__icon">
          
              <img src={addCart} alt="" />
          </span>
        </button>
       
      </div>
    );
}

export default itemCount