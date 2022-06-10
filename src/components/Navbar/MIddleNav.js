import {useState} from 'react'
import logo from './Img/brand.svg'
import menu from './Img/catalog.svg'
import menuB from './Img/menuBlack.svg'
import search from './Img/search.svg'
import profile from './Img/profile.svg'
import down from './Img/down.svg'
import close from './Img/timesWhite.svg'
import AllCateg from '../Modals/AllCateg'
import Katalog from '../Modals/Katalog'
import { SearchInpit } from '../../styles/global.elements'
import searchB from './Img/searchBlack.svg'
import AllCategMob from '../Modals/AllCategMob'
import { NavLink } from 'react-router-dom'

function MiddleNav() {

    const [types, setTypes] = useState(false)
    const [category, setCategory] = useState('Barcha rukunlar')
    const [katalog, setKatalog] = useState(false)

  return (
    <div className='flex items-center py-3'>
        <div className='lg:flex hidden'>
            <a href="/">
                <img src={logo} alt="icon" />
            </a>
        </div>
        <button className={`ml-7 ${katalog ?'bg-[#F5921c]':'bg-[#32386B]'} lg:flex hidden px-7 py-2 rounded items-center z-20 katalog-btn-shadow`} onClick={() => setKatalog(p => !p)}>
            <img src={katalog ? close:menu} alt="icon" />
            <span className='text-white ml-3 font-semibold text-lg'>Каталог</span>
        </button>
        <button className='lg:hidden' onClick={() => setTypes(true)}>
            <img src={menuB} alt="icon" />
        </button>
        <form action="#" className='flex items-center grow mr-7 relative'>
            <button className='lg:hidden block absolute top-0 bottom-0 my-auto left-[30px]'>
                <img src={searchB} alt="icon" />
            </button>
            <SearchInpit type='text' placeholder="Tovarlar bo'yicha qidirish" />
            <button data-modal="true" onClick={() => setTypes(true)} className='lg:flex hidden items-center bg-[#F4F7F8] border border-[#E8EDF1] h-11 px-5'>
                <span className='mr-2 text-[#8D909B] text-[17px]'>{category}</span>
                <img src={down} alt="icon" />
            </button>
            <button className='hidden lg:block h-11 bg-[#32386B] rounded-r px-7'>
                <img src={search} alt="icon" />
            </button>
        </form>
        <NavLink to='/users/login' className='lg:flex hidden items-center'>
            <img src={profile} alt="icon" />
            <span className='ml-2 text-[#273142]'>Kirish</span>
        </NavLink>
        <AllCateg setCategory={setCategory} onClose={() => setTypes(false)} show={types} />
        <AllCategMob onClose={() => setTypes(false)} show={types} />
        <Katalog onClose={() => setKatalog(false)} show={katalog} />
    </div>
  )
}

export default MiddleNav