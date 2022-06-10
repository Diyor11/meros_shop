import React from 'react'
import dress from './Img/dress.png'
import disc from './Img/color-disc.png'
import soft from './Img/sofa.png'
import man from './Img/man.png'
import health from './Img/ambulance.png'
import parfum from './Img/parfum.png'
import boiler from './Img/boiler.png'
import scissors from './Img/scissors.png'
import book from './Img/book.png'
import food from './Img/food.png'
import atir from './Img/atir.png'
import suviner from './Img/suviner.png'

const data = [
  {name: 'Ayollar uchun', img: dress},
  {name: 'Disklar', img: disc},
  {name: 'Uy va internier', img: soft},
  {name: 'Erkaklar uchun', img: man},
  {name: 'Salomatlik uchun', img: health},
  {name: 'Go\'zallik uchun', img: parfum},
  {name: 'Idishlar', img: boiler},
  {name: 'Kanstovar', img: scissors},
  {name: 'KItoblar', img: book},
  {name: 'Oziq-ovqat', img: food},
  {name: 'Parfumeriya', img: atir},
  {name: 'Suvenirlar', img: suviner},
]

export default function PreviewProducts() {

  return (
    <div className='lg:hidden py-3'>
        <ul className='grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-3'>
            {data.map((e, i) => (
              <li key={i} className='cursor-pointer relative'>
                <div className='w-1/2 mx-auto'>
                    <img src={e.img} alt="img" />
                </div>
                <h4 className='text-center sm:text-sm text-xs'>{e.name}</h4>
                <a href="/" className='absolute top-0 left-0 right-0 bottom-0 opacity-0'>.</a>
              </li>
            ))}
        </ul>
    </div>
  )
}
