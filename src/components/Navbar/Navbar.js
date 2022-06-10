import React from 'react'
import BottomNav from './BottomNav'
import MiddleNav from './MIddleNav'
import TopNav from './TopNav'

const Navbar = () => {
  return (
    <div className='px-5 pb-5 shadow-md'>
      <TopNav />
      <MiddleNav />
      <BottomNav />
    </div>
  )
}

export default Navbar