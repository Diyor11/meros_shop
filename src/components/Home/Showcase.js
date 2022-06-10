import {useState, useEffect} from 'react'
import bigAd from './Img/big.svg'
import {Slide} from '../../styles/global.elements.js'

const data = [bigAd, bigAd, bigAd]

export default function Showcase() {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const slide = setInterval(() => setIndex(p => ++p), 5000)
    return () => clearInterval(slide)
  }, [index])

  useEffect(() => {
    if(data.length === index)
      setIndex(0)
  }, [index])

  return (
    <div className='mt-4'>
      <div style={{height: window.innerWidth / 3}} className={`relative w-full flex items-center max-w-full overflow-x-scroll scrolbar-none`}>
        {data.map((e, i) => {

          return(
            <Slide index={index} key={i} i={i} className={`min-w-full h-full absolute top-0 left-0`}>
              <img src={bigAd} alt="icon" className='w-full h-full' />
            </Slide>
          )
        })}
        <ul className="md:flex hidden gap-x-2 items-center absolute bottom-10 left-0 right-0 mx-auto w-fit">
          {data.map((e,i) => (
            <li key={i} onClick={() => setIndex(i)} className={`rounded-full cursor-pointer ${index === i ? 'bg-[#F5921c] w-4 h-4':'bg-white w-3 h-3'}`}></li>
          ))}
        </ul>
      </div>
    </div>
  )
}
