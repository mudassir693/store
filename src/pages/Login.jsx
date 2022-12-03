import React, { useState } from 'react'
import style from '../styles/basicStyle'
import baseUrl from '../url/baseUrl'
import { toast } from 'react-toastify';

let errorAlert = (msg)=>{  
  toast.error(msg)
}
function Login() {
  let [name,setname] = useState('')
  let [password,setPassword] = useState('')
  let createrequest = async(e)=>{
    e.preventDefault()
    if(!name || !password){
      console.log('what')
      return errorAlert("fields are required.")
    }
    let body = {
      username:name,
      password
    }
    try {
      const resp = await baseUrl.post('/auth/login',body)
      console.log(resp)
      localStorage.setItem('token',resp.data.token)
    } catch (error) {
      console.log(error)
      return errorAlert(error.response.data)
    }

    console.log(body)
  }
  return (
    <div className={`${style.bgColor} ${style.minHeight} flex justify-center items-center`}>
      <div className={`${style.loginCard}`}>
        <div className={`${style.themeBgColor}`}>
          <div className="flex items-center justify-center h-[100%]">
            <div className={`${style.textLg} text-white font-bold`}>
              MD Store
            </div>
          </div>
        </div>
        <div className={`text-center py-3`}>
          <div className={`${style.textLg} ${style.textPrimary} font-semibold`}>Login</div>
          <div className={`${style.textSm} ${style.textSecondry} font-light leading-4 py-3 max-w-[80%] mx-auto`}>
            Good To See You Here, lets login and orderwhat you love
          </div>
          <form onSubmit={createrequest} className={`max-w-[90%] mx-auto`}>
            <div className=" my-3">
              <input className={`${style.inputFeildLg}`} onChange={(e)=>setname(e.target.value)} type="text" placeholder="Enter your Name"/>
            </div>
            <div className=" my-3">
              <input className={`${style.inputFeildLg}`} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Enter your Password"/>
            </div>

            <div className=" my-3 mt-5">
              <button type="submit" className={`${style.loginBtn}`} placeholder="Enter your Password">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


export default Login