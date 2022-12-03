import React from 'react'
import style from '../../styles/basicStyle'
import FilterColumn from '../FilterColumn/FilterColumn'
import Products from '../Products/Products'
function MainGrid() {
  return (
    <div className={` py-[2rem] ${style.maxWidth}`}>
        <div className="grid grid-cols-4">
            <div className="col-span-1">
                <FilterColumn />
            </div>
            <div className="col-span-3 ">
                <Products  />
            </div>
        </div>
    </div>
  )
}

export default MainGrid