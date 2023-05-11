import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({info}) => {
    return (

	<div className="item">
		<div className="diamond-container">
			<div className="diamond">
				<div className="diamond-wrapper">
					<div className="diamond-content">${info.price}</div>
				</div>
			</div>
		</div>
		<div className="item-wrapper">
			<div className="content-wrapper">
				<div className="img-container">
					<div className="bg-square"></div>
					<img className="item-img" src={info.img} />
				</div>
				<div className="content-text">
					<div className="item-name">{info.name}</div>
				</div>
			</div>
			<Link to={`/item/${info.id}`} className="view-more-btn">Ver Mas +</Link>
		</div>
	</div>


    )
}

export default Item