export const Item = ({ prod }) => {
    return (
        <div className="myCustomCard">            
            <img className="myCustomCard-photo" src={prod.photo} alt="skate" />
            <h3 className="myCustomCard-title">{prod.title}</h3>
            <h4 className="myCustomCard-price">${prod.price}</h4>
            <button className="myCustomCard-button">See Product</button>
            <span>Stock available: {prod.stock}</span>
        </div>
    );
};