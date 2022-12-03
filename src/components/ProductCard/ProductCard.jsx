import React from 'react'
import style from '../../styles/basicStyle'
import {AiFillStar} from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'

function ProductCard({each}) {
    // console.log('test: ',prop)
  return (
    <div className={`productCardPurchase rounded-md overflow-hidden bg-white shadow-md hover:cursor-pointer hover:scale-[1.05] transition-all`}>
        <div className="img w-full h-[250px] p-2">
            <img className="object-contain w-full h-full" src={each?.image} alt="" />
        </div>
        <div className="flex items-start justify-between px-3">
            <div className={`${style.textSm} ${style.textPrimary} font-bold`}>{each.title.length>15?each.title.slice(0,14)+'...':each.title}</div>
            <div className="flex items-center justify-between gap-1">
                <AiFillStar className={`${style.textMd} text-[#FDCC0D]`} />
                <div className="flex items-center">
                    <div className={`${style.textPrimary} ${style.textXs} font-semibold`}>{each?.rating.rate}</div>
                    <div className={`text-gray-500 ${style.textXs} font-semibold`}>({each?.rating.count})</div>
                </div>
            </div>
        </div>
        <div className="py-3 text-left px-3">
            <div className={`${style.textTheme} ${style.textMd} font-semibold`}>
                $ {each?.price}
            </div>
        </div>
        <div className="px-3 py-3">
            <div className={`${style.themeBgColor} productCardPurchaseBtn text-white rounded-sm py-1 w-full flex items-center gap-2 justify-center ${style.textSm}   `}> <BsHandbag className={`${style.textMd}`} /> <div className=""> Purchase Now </div> </div>
        </div>
    </div>
  )
}

export default ProductCard