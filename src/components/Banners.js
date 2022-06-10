import React from 'react'

export default function Banners() {
  return (
    <div className='mt-3 px-3'>
        <div>
            <img src="https://via.placeholder.com/1440x350" alt="banner" />
        </div>
        <ul className='md:flex block items-center gap-x-2'>
            <li className="mt-3">
                <img className='w-full' src="https://via.placeholder.com/460x170" alt="banner" />
            </li>
            <li className="mt-3">
                <img className='w-full' src="https://via.placeholder.com/460x170" alt="banner" />
            </li>
            <li className="mt-3">
                <img className='w-full' src="https://via.placeholder.com/460x170" alt="banner" />
            </li>
        </ul>
    </div>
  )
}
