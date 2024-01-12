// สร้าง context api => ให้บริการข้อมูลแก่ component ใน app

import { createContext, useContext, useReducer, useEffect } from "react";
import CartData from "../data/CartData"
import reducer from "./reducer";

const initState = {
    cart: CartData,
    total: 0,
    amount: 0
}
const CartContext = createContext();

export const MyCartContext = () => {
    return useContext(CartContext)
}//ใช้ MyCartContext เพื่อเรียกใช้ครั้งเดียวไม่ต้องเรียก้ทั้ง CartContext, CartProvider

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState)//dispatch ใช้เรียก reducer

    useEffect(()=>{//ตรวจเช็ตการเปลี่ยนเเปลงภายใน cart
        dispatch({type:"CALCULATE_TOTAL"})
    },[state.cart])//เช็คการเปลี่ยนแปลงที่ state.cart

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })//ใช้ payload อ้างอิงสื่งที่ต้องการ action
    }

    const toggleQuantity = (id, type) => {
        dispatch({ type: "TOGGLE_QUANTITY", payload: { id, type } })
    }

    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <CartContext.Provider value={{ ...state, removeItem, toggleQuantity, formatNumber }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }