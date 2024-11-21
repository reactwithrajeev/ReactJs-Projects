import React, { useContext } from 'react'
import {ShopContext} from '../../store/shopContext'
import { assets } from '../../assets/frontend_assets/assets'

const SearchBar = () => {
    const {showSearchBar,setShowSearchBar,search,setSearch} = useContext(ShopContext)
    
  return showSearchBar? (
    <div className='flex items-center justify-center  gap-4 border-t border-b bg-gray-50 text-center p-6 '>
        <div className='inline-flex items-center justify-center border border-gray-400 w-[60%]  rounded-2xl overflow-hidden px-4'>
            <input value={search} onChange={(e)=> setSearch(e.target.value)} type="search" className='w-[100%] p-2 bg-transparent outline-none' placeholder='Find You Items Here'/>
            <img src={assets.search_icon} alt="" className='w-6'/>
        </div>
        <img onClick={()=> setShowSearchBar(false)} src={assets.cross_icon} alt="" className='cursor-pointer w-5' />
    </div>
  ):null
}

export default SearchBar