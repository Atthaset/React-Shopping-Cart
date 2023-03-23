//จัดการตะกร้าสินค้า

import CartData from "../Data/CartData"
import CartItemComp from "./CartItemComp"

const CartComp = () => {
    return (
        <div className="shopping-cart">
            <div className="title">Item in Cart</div>
            {CartData.map((data) => {
                return (
                    <CartItemComp key={data.id} {...data}/>
                )
            })}
            <div className="footer">Total 1000 Baht</div>
        </div>
    )
}

export default CartComp