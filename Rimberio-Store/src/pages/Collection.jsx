import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title/Title'
import {ShopContext} from '../store/shopContext'
import Products from '../components/Products/Products'
import SearchBar from '../components/SearchBar/SearchBar'

const Collection = () => {
  const {products,showSearchBar,search} = useContext(ShopContext)
  let [filterProducts,setFilterProducts]= useState([])
  let [category,setCategory] = useState([])
  let [subCategory,setSubCategory] = useState([])
  let [sortType,setSortType]= useState('relavent');
  const toggleCategory = (e) => {
    console.log(e.target.value)
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    console.log(e.target.value)
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = ()=>{
    let productCopy = products.slice();
    if(showSearchBar && search){
      productCopy = productCopy.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))
    }
      if(category.length>0){
        productCopy = productCopy.filter((item)=> category.includes(item.category));
      }
      if(subCategory.length>0){
        productCopy = productCopy.filter((subItem)=>subCategory.includes(subItem.subCategory))
      }
      setFilterProducts(productCopy)
  }
  let sortProduct = ()=>{
    let filterProdCopy = filterProducts.slice();
    switch (sortType) {
      case 'low-high': setFilterProducts(filterProdCopy.sort((a,b)=> (a.price-b.price)));
        break;
        case 'high-low': setFilterProducts(filterProdCopy.sort((a,b)=> (b.price-a.price)));
        break;
      default:applyFilter()
        break;
    }
  }
  useEffect(()=>{
    applyFilter()
  },[category,subCategory,search,showSearchBar])
  useEffect(()=>{
    sortProduct()
  },[sortType])
  useEffect(() => {
    // Action to perform when the `category` state changes
    console.log("Category updated:", subCategory);
  }, [subCategory]);
  return (
    <>
    <SearchBar/>
    <div className='w-full flex gap-5 p-5 px-10'>
      <div >
        <h1>FILTERS BY</h1>
        <div className='border p-5 rounded '>
          <p className='font-semibold mb-3'>Categories</p>
          <div className='flex gap-3 cursor-pointer'>
            <input type="checkbox" value={"Men"} onChange={toggleCategory} />
            <p>Men</p>
          </div>
          <div className='flex gap-3 cursor-pointer'>
            <input type="checkbox" value={"Women"} onChange={toggleCategory} />
            <p>Women</p>
          </div>
          <div className='flex gap-3 cursor-pointer'>
            <input type="checkbox" value={"Kids"} onChange={toggleCategory} />
            <p>Kids</p>
          </div>
        </div>
        <div className='border p-5 rounded mt-6'>
          <p className='font-semibold mb-3'>Type</p>
          <div className='flex gap-3 mt-2 cursor-pointer'>
            <input type="checkbox" value={"Topwear"} onChange={toggleSubCategory} />
            <p className='text-[10px]'>Top Wear</p>
          </div>
          <div className='flex gap-3 mt-2 cursor-pointer'>
            <input type="checkbox" value={"Bottomwear"} onChange={toggleSubCategory} />
            <p className='text-[10px]'>Bottom Wear</p>
          </div>
          <div className='flex gap-3 mt-2 cursor-pointer'>
            <input type="checkbox" value={"Winterwear"} onChange={toggleSubCategory} />
            <p className='text-[10px]'>Winter Wear</p>
          </div>

        </div>
      </div>
      <div className='w-full'>
        <div className='flex p-2 items-center justify-between w-full border'>
          <Title text1={"ALL"} text2={'COLLECTIONS'}/>
          <select className='border p-3 rounded outline-none' onChange={(e)=> {setSortType(e.target.value)}}>
            <option className='bg-black text-white' value="relavent">Sort by : Relavent</option>
            <option className='bg-black text-white' value="low-high">Sort by : Low To High</option>
            <option className='bg-black text-white' value="high-low">Sort by : High To Low</option>
          </select>
        </div>
          <div className='flex gap-5 flex-wrap mt-3 items-center justify-center'>
          {filterProducts.map((item,index) => <Products key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>)}
          </div>
      </div>

    </div>
    </>
  )
}

export default Collection