import './ItemCart.css'

const ItemCart = () => {
    return (<div className="itemCart">
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
                <img className="item-imgCart" src={info.img} />
            </div>
            <div className="content-text">
                <div className="item-name">{info.name}</div>
            </div>
        </div>
        <div className="view-more-btn">ELIMINAR</div>
    </div>
</div>)
}