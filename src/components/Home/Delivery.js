import img1 from './Img/delivery/First.svg'
import img2 from './Img/delivery/Second.svg'
import img3 from './Img/delivery/Third.svg'

const data = [
    {title: 'Доставка по всему Узбекистану', type: 'Условия доставки', img: img1},
    {title: 'Установите мобильное приложение', type: 'Установить', img: img2},
    {title: 'Оплата наличными или картой', type: 'Условия оплаты', img: img3},
]

export default function Delivery() {
  return (
    <div className="bg-[#F4F7F8] py-4 mt-10">
        <ul className="flex lg:flex-row flex-col items-center justify-between px-5 gap-x-3">
            {data.map((e,i) => (
                <li key={i} className='border-[0.5px] rounded-md h-[200px] px-8 border-[#D2D2D2] w-full flex items-center justify-between my-3'>
                    <div className=''>
                        <h4 className='text-lg font-semibold'>{e.title}</h4>
                        <a  href="/" className='mt-4 text-lg text-[#8D909B] font-normal'>{e.type}</a>
                    </div>
                    <div>
                        <img src={e.img} alt="titile" />
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}
