import { Item } from "./Item";

export const ItemList = ({ product }) => {
    return (
        <div className="myCustomItemList">
            {product.map((prod) => (
                <Item key={prod.id} prod={prod}/>
            ))}
        </div>
    );
};