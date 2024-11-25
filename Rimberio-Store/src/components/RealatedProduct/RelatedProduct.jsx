import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../store/shopContext'
import Product from '../Products/Products';
import Title from '../../components/Title/Title';

const RelatedProduct = ({category,subCategory}) => {

    const {products}= useContext(ShopContext)
    const [related,setRelated]= useState([]);
    
    useEffect(()=>{
        console.log('Products from context:', products);
        console.log('Category:', category);
        console.log('SubCategory:', subCategory);
        
        if(products.length > 0){
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item)=> category === item.category);
            console.log('After category filter:', productsCopy);
            
            productsCopy = productsCopy.filter((item)=> subCategory === item.subCategory);
            console.log('After subcategory filter:', productsCopy);
            
            setRelated(productsCopy.slice(0,5))
        }
    },[products,category,subCategory])

    console.log('Final related products:', related);
    
    return (
        <div>
          <div>
            <Title text1={"RELATED"} text2={"PRODUCTS"}/>
          </div>
        <div className='flex items-center gap-5'>
            {related.map((item,index)=> <Product key={index} name={item.name} image={item.image} price={item.price} id={item._id}/>)}
        </div>
        </div>
    )
}

export default RelatedProduct