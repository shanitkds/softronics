import { createContext, useState } from "react";

export const AddCartContext=createContext(null)

export default function CartProvider({children}){
   const [cart,setCart]=useState([])
   const [order,setOrder]=useState('')
   const [orders,setOrders]=useState([])

   return(
     <AddCartContext.Provider value={{cart,setCart,order,setOrder,orders,setOrders}}>
        {children}
     </AddCartContext.Provider>
   )
}