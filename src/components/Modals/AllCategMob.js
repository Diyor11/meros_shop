import {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import close from '../Navbar/Img/times.svg'

const types = ['Ayollar uchun', 'Disklar', 'Uy va interier', 'Erkaklar uchun', 'Salomatlik', 'Go\'zallik', 'Idishlar', 'Kanstovar', 'Kitoblar', 'Oziq-ovqat', 'Parfumeriya', 'Suvenirlar', 'Zargarlik', 'Tabiy yog\'', 'Bolalar uchun']

const AllCategMob = ({show, onClose}) => {

    useEffect(() => {
        if(show) {
            document.body.classList.add('active-modal')
        } else 
            document.body.classList.remove('active-modal')
    }, [show])

  return (
    <div className={`block lg:hidden fixed top-0 left-0 w-full max-h-[100vh] z-10 overflow-y-auto transition-transform bg-white ${show ? 'translate-y-0':'-translate-y-full'}`}>
        <div className="flex items-center justify-between px-5 py-4 shadow-md">
            <div></div>
            <div>
                <h3 className='main-text-color text-xl font-roboto'>Ruknlar</h3>
            </div>
            <button onClick={onClose}>
                <img src={close} alt="icon" />
            </button>
        </div>
        <div className='mt-2'>
            <ul className='px-5'>
                {types.map((e,i) => (
                    <li key={i} className='flex items-center justify-between py-4 border-b border-b-[#E8EDF1] cursor-pointer relative'>
                        <h3 className='text-lg font-san-serif'>{e}</h3>
                        <span className='border border-gray-400 rounded-full w-5 h-5'></span>
                        <NavLink className='absolute top-0 left-0 right-0 bottom-0' to='/category/ayollaruchun'></NavLink>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default AllCategMob