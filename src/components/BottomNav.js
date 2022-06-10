import home from './Home/Img/bottom-nav/home.svg'
import cart from './Home/Img/bottom-nav/cart.svg'
import catalog from './Home/Img/bottom-nav/catalog.svg'
import profile from './Home/Img/bottom-nav/profile.svg'
import star from './Home/Img/bottom-nav/star.svg'
import { NavLink } from 'react-router-dom'

const data = [
    {icon: home, title: 'Bosh sahifa', url: '/'},
    {icon: catalog, title: 'Katalog', url: '/users/login'},
    {icon: cart, title: 'Savatcha', url: '/users/login'},
    {icon: star, title: 'Sevimli', url: '/users/login'},
    {icon: profile, title: 'Kabinet', url: '/users/login'},
]

export default function BottomNav() {
  return (
    <div className='fixed bottom-0 left-0 w-full bg-white px-[10px] z-30 shadow-top lg:hidden'>
        <ul className='flex items-start justify-between'>
            {data.map(e => (
                <li key={e.title} className='py-1'>
                    <NavLink className='block' to={e.url}>
                        <div className='mx-auto w-fit'>
                            <img src={e.icon} alt={e.title} />
                        </div>
                        <h5 className='text-center text-[#8D909B] text-sm font-normal mt-1'>{e.title}</h5>
                    </NavLink>
                </li>
            ))}
        </ul>
    </div>
  )
}
