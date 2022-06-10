import React from 'react'
import stars from './Home/Img/0.svg'
import star from './Home/Img/icons/star.svg'
import trash from './Home/Img/icons/trash.svg'
import visibility from './Home/Img/icons/visibility.svg'
import { CardCom } from '../styles/global.elements'

const Card = ({img}) => {

  return (
    <CardCom className='mt-5'>
        <div className='relative'>
            <img className='w-1/2 mx-auto' src={img} alt="title" />
            <div className='absolute top-4 left-0 overflow-hidden'>
                <img className='icon mt-2' src={star} alt="icon" />
                <img className='icon mt-2 delay-100' src={trash} alt="icon" />
                <img className='icon mt-2 delay-200' src={visibility} alt="icon" />
            </div>
        </div>
        <div className='mt-3'>
            <h4 className="text-gray-500 fonts-roboto font-semibold">Kitoblar</h4>
            <h5 className='text-lg text-[#273142] mt-1 font-medium'>Ҳадис ва Ҳаёт 4-жуз. Поклик китоби | Шайх Муҳаммад...</h5>
            <img className='mt-2' src={stars} alt="icon" />
            <h3 className='mt-1 text-2xl text-[#32386B] font-semibold font-sans'>325000</h3>
            <p className='text-[#444] line-through decoration-red-500'>сум</p>
            <button className='bg-[#32386B] text-white font-roboto lg:text-xl sm:text-md mt-3 font-light px-4 py-2 rounded-md hover:bg-[#F5921C]'>В корзину</button>
        </div>
    </CardCom>
  )
}

export default Card