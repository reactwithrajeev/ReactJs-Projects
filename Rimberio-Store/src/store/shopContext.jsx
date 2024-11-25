import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



export const ShopContext = createContext();

const ShopContextProvider = ({children})=>{
    const currency = "₹"
    const delivery_Fee = 10
    const [search , setSearch]= useState('')
    const [showSearchBar,setShowSearchBar] = useState(false)
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate()
    const addToCart = async (itemsId,size)=>{
        if(!size){
            toast.error("Select Product Size");
            return;
        }
            let cartData = structuredClone(cartItems);
            if (cartData[itemsId]){
                if(cartData[itemsId][size]){
                    cartData[itemsId][size]+=1;
                }
                else{
                    cartData[itemsId][size]= 1;
                }
                   
            }else{
                cartData[itemsId]= {};
                cartData[itemsId][size] = 1;
            }
            setCartItems(cartData)
            
    }

    let getCartCount = () => {
        let totalCount = 0;
        console.log("cartItes:" + cartItems);
        for (const items in cartItems) {
            console.log("items:" + items);
            for (const item in cartItems[items]) {
                console.log("item:" + item);
                try {
                    if (cartItems[items][item] > 0) {
                        console.log(cartItems);
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {}
            }
        }
        return totalCount;
    };

    const updateQuantity = async (itemId,size,quantity)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;

        setCartItems(cartData);

    }
    
    const getCartAmount = async ()=>{
        let totalAmount = 0;
        for(let items in cartItems){
            let itemInfo = products.find((prod)=>prod._id===items);
            if (itemInfo) {
                for(let item in cartItems[items]){
                    try {
                        if(cartItems[items][item]>0){
                            totalAmount += itemInfo.price * cartItems[items][item]
                        }
                        
                    } catch (error) {
                        console.error('Error calculating item total:', error);
                    }
                }
            }
        }
        console.log('Total Amount:', totalAmount);
        return totalAmount
    }
    const value = {
        products,
        currency,
        delivery_Fee,
        search,
        setSearch,
        showSearchBar,
        setShowSearchBar,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate
    }

    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider