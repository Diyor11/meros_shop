import React from 'react'
import img from './loader.svg'
import { LoaderCom } from './style'

function Loader() {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-[#F4F7F8]">
      <LoaderCom>
        <div className="loader-item"></div>
        <div className="loader-item"></div>
        <div className="loader-item"></div>
        <img src={img} alt="icon" className='absolute top-5 left-6 w-24 h-24' />
      </LoaderCom>
    </div>
  )
}

export default Loader