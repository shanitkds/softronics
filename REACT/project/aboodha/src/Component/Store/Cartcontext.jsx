import { createContext, useState } from "react";

export const AddCartContext=createContext(null)

export default function CartProvider({children}){
   const [cart,setCart]=useState([])

   return(
     <AddCartContext.Provider value={{cart,setCart}}>
        {children}
     </AddCartContext.Provider>
   )
}