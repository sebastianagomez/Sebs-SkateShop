import { Item } from "./Item";

export const ItemList = ({ product }) => {
    return (
        <div>
            {product.map((prod) => (
                <Item key={prod.id} prod={prod}/>
            ))}
        </div>
    );
};