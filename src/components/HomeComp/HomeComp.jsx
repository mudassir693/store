import React,{useState,useEffect, useMemo} from 'react'
import Header from '../Header/Header'
import style from '../../styles/basicStyle'
import { BsChevronDown, BsSearch } from 'react-icons/bs'
import {RxCross2 } from 'react-icons/rx'
import MainGrid from '../MainGrid/MainGrid'
import baseUrl from '../../url/baseUrl'
import { useStore } from '../../context/ProjectContext'

function GetInitialProducts(){
    const [products,setProducts,reOrdered] = useState([])

    useEffect( ()=>{
        getProducts()
    },[products])

    let getProducts = async()=>{
        try {
            const resp = await baseUrl.get('/products')
            console.log(resp)
            setProducts(resp.data)
        } catch (error) {
            console.log(error)
        }
    }
    return products
}

function HomeComp() {
    // let [products,setProducts] = useState([])
    const {setProducts} = useStore()

    useEffect(()=>{
        getProducts()
    },[])

    let getProducts = async()=>{
        try {
            const resp = await baseUrl.get('/products')
            console.log(resp)
            setProducts(resp.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <Header />
        <div className={`${style.themeBgColor} relative h-[62px] flex items-center justify-center`}>
            <div className={`w-[90%] md:w-[70%] xl:w-[40%] h-[80%] bg-white ${style.shadowLg} rounded-md flex items-center px-8 py-2 absolute top-[70%] space-x-4`}>
                <BsSearch className={`${style.textMd} ${style.textPrimary}`} />
                <input className={`border-none outline-none flex-grow ${style.textSm} ${style.textPrimary}`} type="text" placeholder="type here to search" />
                <div className={`w-[16px] h-[16px] rounded-full cursor-pointer flex items-center justify-center bg-gray-400`}>
                <RxCross2 className={`${style.textXs} text-white  font-bold` } />
                </div>
                <div className={`third w-[1px] h-[90%] bg-gray-400 `}></div>
                <div className="flex items-center gap-5">
                    <div className={`${style.textSecondry} ${style.textSm} font-light`}>
                        Category
                    </div>
                    <div className="">
                        <BsChevronDown className={`${style.textMd} ${style.textSecondry} cursor-pointer` } />
                    </div>
                </div>

            </div>
        </div>
        <div className="bg-white shadow-md">
            <div className={`${style.textXl} ${style.textPrimary} pt-[4rem] pb-[2rem] font-bold`}>
                Title
            </div>
        </div>

        <MainGrid />
    </div>
  )
}

export default HomeComp