import React from 'react'
import style from '../../styles/basicStyle'
import {BiMessageAltDots} from 'react-icons/bi'
import {BsHandbag,BsBell,BsHeadphones} from 'react-icons/bs'
import {IoHeadsetOutline} from 'react-icons/io'

function Header() {
  return (
    <div className="bg-white">
        <div className={`${style.maxWidth} flex items-center justify-between h-[52px] `}>
            <div className="left flex items-center h-full space-x-10">
                <div className={`${style.textMd} ${style.textPrimary} font-medium`}>
                    MD Store
                </div>
                <div className="h-[70%] w-[1px] bg-gray-400"></div>
            </div>
            <div className="right flex items-center space-x-10 h-full">
                <div className="first border-[1px] flex items-center border-gray-200 rounded-[2rem] p-2 space-x-4">
                    <BiMessageAltDots className={`${style.textMd} ${style.textSecondry} cursor-pointer `} />
                    <BsHandbag className={`${style.textMd} ${style.textSecondry} cursor-pointer` } />
                    <BsBell className={`${style.textMd} ${style.textSecondry} cursor-pointer` } />
                    <BsHeadphones className={`${style.textMd} ${style.textSecondry} cursor-pointer` } />
                </div>
                <div className="second flex items-center space-x-1">
                    <div className="w-[30px] h-[30px] border-[1px] border-gray-400 rounded-full flex items-center justify-center">
                        <div className={`w-[23px] h-[23px] rounded-full mb-[1.80px] mx-auto ${style.themeBgColor} ${style.textSm} text-white flex items-center justify-center`}>
                            M
                        </div>
                    </div>
                    <div className={`${style.textSm} ${style.textPrimary} font-medium`}>Muhammad Mud..</div>
                </div>
                <div className={`third w-[1px] h-[70%] bg-gray-400 `}></div>
                <div className={`forth rounded-full text-white bg-[#0F0F0F] ${style.textXs} font-light cursor-pointer px-2`}>Become Merchant</div>
            </div>
        </div>
    </div>

  )
}

export default Header