import React, { createContext, useContext, useState } from 'react'

export const ProductContext = createContext()

function ProjectContext({children}) {
    let [filter,setFilter] = useState(false)
    let [products,setProducts] = useState([])
    let [reOrdered,setReOrdered] = useState(false)
    let [productOrdered,setProductOrdered] = useState("")

  return(
    <ProductContext.Provider value={{productOrdered,setProductOrdered,reOrdered,setReOrdered,filter,setFilter,products,setProducts}}>{children}</ProductContext.Provider>
  )
}

export const useStore = ()=>useContext(ProductContext)


export default ProjectContext