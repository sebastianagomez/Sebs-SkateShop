import {Link} from 'react-router-dom'

export const Item = ({ prod }) => {
    return (
        <div className="myCustomCard">            
            <img className="myCustomCard-photo" src={prod.photo} alt="skate" />
            <h3 className="myCustomCard-title">{prod.title}</h3>
            <h4 className="myCustomCard-price">${prod.price}</h4>
            <Link to={`/detalle/${prod.id}`}>
                <button className="myCustomCard-button">See Product</button>
            </Link>
            <span>Stock available: {prod.stock}</span>
        </div>
    );
};