import React from 'react'
import location from './Img/location.svg'

function TopNav() {
  return (
    <div>
      <div className='flex items-center justify-between border-b border-b-[#E8EDF1] py-3'>
          <ul className='flex items-center gap-x-2'>
              <li>
                <a href='/' className='text-[#F5921c] font-medium'>
                  Русский
                </a>
                <span className='pl-3 text-[#e8edf1]'>|</span>
              </li>
              <li>
                <a href='/' className='font-medium  text-[#273142]'>
                  O'zbekcha
                </a>
                <span className='pl-3 text-[#e8edf1]'>|</span>
              </li>
          </ul>
          <ul className='lg:flex hidden items-center gap-x-7'>
            <li className='flex items-center cursor-pointer'>
              <img src={location} alt="icon" className='mr-2' />
              <span className='text-[#273142]'>Ташкент</span>
            </li>
            <li className='text-[#273142] cursor-pointer'>Мобильное приложение</li>
            <li className='text-[#273142] cursor-pointer'>Скидки</li>
            <li className='text-[#273142] cursor-pointer'>Скидки</li>
            <li className='text-[#273142] cursor-pointer'>Доставка</li>
          </ul>
      </div>
    </div>
  )
}

export default TopNav