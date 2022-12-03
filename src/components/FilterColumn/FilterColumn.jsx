import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { IoMdPricetags } from 'react-icons/io'
import { useStore } from '../../context/ProjectContext'
import style from '../../styles/basicStyle'

function FilterColumn() {
    const {filter,setFilter,products,setProducts,setReOrdered} = useStore()

    let [price,setPrices] = useState(false)
    let [productOrdered,setProductOrdered] = useState('')

    const sortPriceAsc = ()=>{
        // console.log('hello')
        setProducts((prev)=>prev.sort((a,b)=>a.price-b.price))
        setReOrdered((prev)=>!prev)
        setProductOrdered('asc')
    }
    
    const sortPriceDes = ()=>{
        setProducts((prev)=>products.sort((a,b)=>b.price-a.price))
        setReOrdered((prev)=>!prev)
        setProductOrdered('dec')
    }

  return (
    <div className="filter bg-white rounded-md">
        <div className="px-5 py-4">
            <div className="flex items-center justify-between">
                <div className={`${style.textSm} ${style.textPrimary} font-bold`}>
                    Filter
                </div>
                {filter ? <div className={`border-gray-300 border-[1px] rounded-full px-3 ${style.textXs} cursor-pointer w-[60px] h-[24px] font-light flex items-center justify-center`}>Reset</div>:null }
            </div>
        </div>
        <hr />
        <div className="px-5 py-4">
            <div className="flex items-center justify-between">
                <div className={`${style.textSm} ${style.textPrimary} font-bold`}>
                    Price
                </div>
                <div className={`border-gray-300 border-[1px] rounded-full px-3 ${style.textXs} cursor-pointer h-[24px] w-[60px] font-light flex items-center justify-center`}>
                    {!price && <div onClick={()=>setPrices(true)} className="flex items-center gap-1">
                        <div className="">Show</div>
                        <div className="">
                            <AiOutlineDown />
                        </div>
                    </div>}
                    {price && <div onClick={()=>setPrices(false)} className="flex items-center gap-1">
                        <div className="">Hide</div>
                        <div className="">
                            <AiOutlineUp />
                        </div>
                    </div>}
                </div>
            </div>
            {price && <div className="">
                <div className={`flex  items-center gap-2`}>
                    <div onClick={sortPriceAsc} className={`w-[20px] h-[20px] border-[1px]  flex justify-center cursor-pointer items-center rounded-md ${productOrdered=='asc'?style.themeBgColor:'border-gray-400'}`}>
                        {/* <TiTick className={`text-white`} /> */}
                        <i class="fa-sharp fa-solid fa-check text-[11px] text-white"></i>
                    </div>
                    <div onClick={sortPriceAsc} className={`${style.textXs} ${style.textPrimary} text-white cursor-pointer font-semibold`}>
                        Ascending
                    </div>
                </div>
                <div className={`flex  items-center gap-2 `}>
                    <div onClick={sortPriceDes} className={`w-[20px] h-[20px] border-[1px] cursor-pointer border-gray-400 flex justify-center items-center rounded-md ${productOrdered=='dec'?style.themeBgColor:'border-gray-400'}`}>
                        {/* <TiTick className={`text-white`} /> */}
                        <i class="fa-sharp fa-solid fa-check text-[11px] text-white"></i>
                    </div>
                    <div onClick={sortPriceDes} className={`${style.textXs} ${style.textPrimary} cursor-pointer text-white font-semibold`}>
                        Descending
                    </div>
                </div>
            </div>}
        </div>
    </div>
  )
}

export default FilterColumn