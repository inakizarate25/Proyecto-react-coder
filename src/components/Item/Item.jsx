import './Item.css'

const Item = ({id, name, img, price, stock}) => {
    return (

	<div className="item">
		<div className="diamond-container">
			<div className="diamond">
				<div className="diamond-wrapper">
					<div className="diamond-content">${price}</div>
				</div>
			</div>
		</div>
		<div className="item-wrapper">
			<div className="content-wrapper">
				<div className="img-container">
					<div className="bg-square"></div>
					<img className="item-img" src={img} />
				</div>
				<div className="content-text">
					<div className="item-name">{name}</div>
				</div>
			</div>
			<div className="view-more-btn">Ver Mas +</div>
		</div>
	</div>


    )
}

export default Item