//รายการสินค้าแต่ละอย่าง

const CartItem = ({id, name, image_url, price, quantity}) => {
    return (
        <div className="item">
            <div className="product_image">
                <img src={image_url}/>
            </div>
            <div className="description">
                <span>{name}</span>
                <span>ราคา {price}</span>
            </div>
        </div>
    )
}

export default CartItem