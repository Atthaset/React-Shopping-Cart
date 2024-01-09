//จัดการภาพรวมตะกร้าสินค้า
import { MyCartContext } from "../management/context"
import CartItem from "./CartItem"

const Cart = () => {
    const {cart} = MyCartContext()
    return (
        <div className="shopping-cart">
            <div className="title">สินค้าในตะกร้า</div>
            {cart.map((data ) => {
                return <CartItem key={data.id} {...data}/>
            })}
            <div className="footer">ยอดรวม 5 บาท</div>
        </div>
    )
}

export default Cart