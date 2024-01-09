//รายการสินค้าแต่ละอย่าง
import plus from '../image/plus.svg'
import minus from '../image/minus.svg'
import deleteicn from '../image/delete-icn.svg'

const CartItem = ({ id, name, image_url, price, quantity }) => {
    return (
        <div className="item">
            <div className="product_image">
                <img src={image_url} />
            </div>
            <div className="description">
                <span>{name}</span>
                <span>ราคา {price}</span>
            </div>
            <div className="quantity">
                <button className='plus-btn'>
                    <img src={plus} alt='' />
                </button>
                <input type="text" value={quantity} disabled></input>
                <button className='minus-btn'>
                    <img src={minus} alt='' />
                </button>
            </div>
            <div className='total-price'>
                {quantity * price}
            </div>
            <div className='remove'>
                <img src={deleteicn} alt=''></img>
            </div>
        </div>
    )
}

export default CartItem