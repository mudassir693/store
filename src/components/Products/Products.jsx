import React, { useEffect } from 'react'
import { useStore } from '../../context/ProjectContext'
import ProductCard from '../ProductCard/ProductCard'

function Products() {
    const {products, reOrdered} = useStore()
    console.log('dbug: ',products)
    useEffect(()=>{
        console.log('hello')
    },[reOrdered])
  return (
    <div className={`products grid grid-cols-3 gap-4 px-4`}>
        {
            products.map(each=>(
                <div className="">
                    <ProductCard each={each} />
                </div>
            ))
        }
    </div>
  )
}

export default Products