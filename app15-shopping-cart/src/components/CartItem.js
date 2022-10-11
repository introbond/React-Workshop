import plus from "../image/plus.svg";
import minus from "../image/minus.svg";
import deleteicon from "../image/delete-icn.svg";


const CartItem = ({id, name, image_url, price, quantity}) => {
    return (
        <div className = "item">
            <div className = "product-image">
                <img src = {image_url} alt = ""/>
            </div>  
            <div className = "description">
                <span> {name} </span>
                <span> price : {price} btc</span>
            </div>
            <div className = "quantity">
                <button className = "plus"> 
                    <img src = {plus} alt = ""/>
                </button>
                <input type = "text" value = {quantity} disabled/>
                <button className = "minus"> 
                    <img src = {minus} alt = ""/>
                </button>
            </div>
            <div className = "total-price">
                {quantity * price}
            </div>  
            <div className = "remove">
                <img src = {deleteicon} alt = ""/>
            </div>  
        </div>
    )
}

export default CartItem;