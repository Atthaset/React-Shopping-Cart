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
}

//filter id = 2 =>[1,2,3] => [1,3]

export default reducer