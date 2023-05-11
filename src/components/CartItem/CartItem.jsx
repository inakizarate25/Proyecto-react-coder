const CartItem = ({id, img, name, price, quantity}) => {
    return(
        <div className="itemCart">
		<div className="diamond-container">
			<div className="diamond">
				<div className="diamond-wrapper">
					<div className="diamond-content">{price}</div>
				</div>
			</div>
		</div>
		<div className="item-wrapper">
			<div className="content-wrapper">
				<div className="img-containerCart">
					<img className="item-imgCart" src={img}/>
				</div>
				<div className="content-text">
					<div className="item-name">{name}</div>
                    <p className='item-name cantidad'>{quantity}</p>
				</div>
			</div>
			<div className="view-more-btn">ELIMINAR</div>
		</div>
	</div> 
    )
}

export default CartItem
