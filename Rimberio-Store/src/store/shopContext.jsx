import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";



export const ShopContext = createContext();

const ShopContextProvider = ({children})=>{
    const currency = "₹"
    const delivery_Fee = 10
    const [search , setSearch]= useState('')
    const [showSearchBar,setShowSearchBar] = useState(false)
    
    const value = {
        products,
        currency,
        delivery_Fee,
        search,
        setSearch,
        showSearchBar,
        setShowSearchBar,
    }

    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider