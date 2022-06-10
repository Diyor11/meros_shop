import React from 'react'
import one from './Img/banners/1.jpg'
import two from './Img/banners/2.png'
import three from './Img/banners/3.jpg'
import best from './Img/banners/best-gift.svg'
import diskont from './Img/banners/meros-diskont.svg'
import merch from './Img/banners/meros-merch.svg'
import { SpecialItem } from '../../styles/global.elements'

const data = [
    {text: 'Meros Мерч Бренд', icon: best, bg: one},
    {text: 'Meros Дисконт', icon: diskont, bg: two},
    {text: 'Лучший Подарок', icon: merch, bg: three},
]

export default function Special() {
  return (
    <div className='px-3 mt-4'>
        <h2 className='section-title'>Специально для вас</h2>
        <ul className='flex lg:flex-row flex-col items-center gap-2'>
            {data.map((e,i) => (
                <SpecialItem key={i} img={e.bg} className='w-full rounded-md'>
                    <div className='flex items-center m-auto w-fit h-[inherit]'>
                        <img src={e.icon} alt="banner" />
                        <h3 className='font-semibold lg:text-2xl sm:text-4xl text-xl text-white ml-2'>{e.text}</h3>
                    </div>
                </SpecialItem>
            ))}
        </ul>
    </div>
  )
}
