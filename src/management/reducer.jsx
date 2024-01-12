//กำหนด action ใน app

const reducer = (state, action) => { // action = REMOVE_ITEM
    if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload)
        }//cart = state.cart.filter((item) => item.id !== action.payload)
    }
    if (action.type === "TOGGLE_QUANTITY") {
        let newCart = state.cart.map((item) => {
            if (item.id === action.payload.id) {
                if (action.payload.type === "increment") {
                    return {
                        ...item,
                        quantity: item.quantity < 5 ? item.quantity + 1 : item.quantity
                    }
                }
                if (action.payload.type === "decrement") {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                }
            }
            return item
        }).filter((item) => item.quantity !== 0)//filter เอาสินค้าที่เป็น 0 ออกไป
        return {
            ...state, cart: newCart
        }
    }
    if (action.type === "CALCULATE_TOTAL") {
        //reduce((ตัวแปรเก็บค่าเริ่มต้น, สมาชิกแต่ล่ะตัวที่ต้องการ{state.cart}))
        const { total, amount } = state.cart.reduce((cartTotal, item) => {
            //ต้องการเเค่ price กับ quantity เพื่อมาคำนวน
            const { price, quantity } = item
            const itemTotal = price * quantity
            //console.log(`ยอดรวมสินค้า id ที่ ${item.id} = ${itemTotal}`);
            cartTotal.total += itemTotal
            cartTotal.amount += quantity

            return cartTotal
        },
            {//กำหนดค่าเริ่มต้นของ cartTotal
                total: 0,
                amount: 0
            })// ก้อนนี้ต้อง return cartTotal
        return {//retirn ค่าที่ต้องการเปลี่ยนแแปรง
            ...state, total, amount
        }
    }
}

//filter id = 2 =>[1,2,3] => [1,3]

export default reducer