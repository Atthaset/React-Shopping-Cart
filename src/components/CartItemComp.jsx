//ควบคุมแสดงสินค้าใน cart
import plus from '../image/plus.svg'
import minus from '../image/minus.svg'
import deleteicon from '../image/delete-icn.svg'

const CartItemComp = ({ name, image_url, price, quantity }) => {
    return (
        <div className="item">
            <div className="product_image">
                <img src={image_url} />
            </div>
            <div className="description">
                <span>{name}</span>
                <span>price {price} Baht</span>
            </div>
            <div className="quantity">
                <button className='plus-btn'>
                    <img src={plus} alt="" />
                </button>
                <input type="text" value={quantity} disabled />
                <button className='minus-btn'>
                    <img src={minus} alt="" />
                </button>
            </div>
            <div className='total-price'>
                {quantity*price}
            </div>
            <div className='remove'>
                <img src={deleteicon} alt="" />
            </div>
        </div>
    )
}

export default CartItemComp