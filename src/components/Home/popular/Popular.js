import next from '../Img/next.svg'
import prev from '../Img/prev.svg'
import SinglePopular from './SinglePopular'
import { useState, useEffect } from 'react'
import book from '../Img/popular/book.svg'
import food from '../Img/popular/food.svg'
import oil from '../Img/popular/oil.svg'
import sofa from '../Img/popular/sofa.svg'
import taqinchoq from '../Img/popular/taqinchoq.svg'

const data = [
  {
      id: 1,
      categ: "Книги",
      image_src: book
  },
  {
      id: 2,
      categ: "Дом и интерьер",
      image_src: sofa
  },
  {
      id: 3,
      categ: "e    изделия",
      image_src: taqinchoq
  },
  {
      id: 4,
      categ: "Натуральные масла",
      image_src: oil
  },
  {
      id: 5,
      categ: "Продукты питания",
      image_src: food
  },
  {
      id: 6,
      categ: "Книги",
      image_src: book
  },
  {
      id: 7,
      categ: "Дом и интерьер",
      image_src: sofa
  },
  {
      id: 8,
      categ: "e    изделия",
      image_src: taqinchoq
  },
  {
      id: 9,
      categ: "Натуральные масла",
      image_src: oil
  },
  {
      id: 10,
      categ: "Продукты питания",
      image_src: food
  },
  {
      id: 1,
      categ: "Книги",
      image_src: book
  },
  {
      id: 2,
      categ: "Дом и интерьер",
      image_src: sofa
  },
  {
      id: 3,
      categ: "e    изделия",
      image_src: taqinchoq
  },
  {
      id: 4,
      categ: "Натуральные масла",
      image_src: oil
  },
  {
      id: 5,
      categ: "Продукты питания",
      image_src: food
  },
  {
      id: 6,
      categ: "Книги",
      image_src: book
  },
  {
      id: 7,
      categ: "Дом и интерьер",
      image_src: sofa
  },
  {
      id: 8,
      categ: "e    изделия",
      image_src: taqinchoq
  },
  {
      id: 9,
      categ: "Натуральные масла",
      image_src: oil
  },
  {
      id: 10,
      categ: "Продукты питания",
      image_src: food
  },
  {
      id: 1,
      categ: "Книги",
      image_src: book
  },
  {
      id: 2,
      categ: "Дом и интерьер",
      image_src: sofa
  },
  {
      id: 3,
      categ: "e    изделия",
      image_src: taqinchoq
  },
  {
      id: 4,
      categ: "Натуральные масла",
      image_src: oil
  },
  {
      id: 5,
      categ: "Продукты питания",
      image_src: food
  },
  {
      id: 6,
      categ: "Книги",
      image_src: book
  },
  {
      id: 7,
      categ: "Дом и интерьер",
      image_src: sofa
  },
  {
      id: 8,
      categ: "e    изделия",
      image_src: taqinchoq
  },
  {
      id: 9,
      categ: "Натуральные масла",
      image_src: oil
  },
  {
      id: 10,
      categ: "Продукты питания",
      image_src: food
  },
]

export default function Popular() {
  
  const [transform, setTransform] = useState(0)

  const click = (e) => {
    if(e.pos === 'next'){
      if(transform >= -300 * (data.length - 6))
        setTransform(p => p - 286)
      else setTransform(0)
    } else {
      if(transform <= -300)
      setTransform(p => p + 286)
    }
  }

  useEffect(() => {
    const slide = setInterval(() => click({pos: 'next'}), 3000)
    return () => clearInterval(slide)
  }, [transform])

  return (
    <div className='px-5 mt-10 mb-12'>
      <div className="flex items-center justify-between border-b border-[#E8EDF1] py-1">
        <h2 className='section-title'>Популярные категории</h2>
        <div className="flex item-center">
          <button onClick={() => click({pos: 'prev'})} className='bg-[#F4F7F8] rounded py-2 px-3 mr-2'>
            <img src={prev} alt="icon" />
          </button>
          <button onClick={() => click({pos: 'next'})} className='bg-[#F4F7F8] rounded py-2 px-3'>
            <img src={next} alt="icon" />
          </button>
        </div>
      </div>
      <SinglePopular data={data} transform={transform} />
    </div>
  )
}
