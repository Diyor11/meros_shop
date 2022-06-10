import { SliderItem, GrogSlider } from '../../../styles/global.elements'


export default function SinglePopular({transform, data}) {

  return (
    <GrogSlider
        className={`flex items-center overflow-x-hidden mt-4`} 
    >
        {data.map((e,i) => (
            <SliderItem key={i} style={{transform: `translateX(${transform}px)`}}  className="slider-item">
                <div className='bg-[#F4F7F8] h-full flex flex-col justify-center pb-5 rounded-md px-4 relative'>
                    <img src={e.image_src} alt={e.categ} className='w-full grow p-3' />
                    <h3 className='text-center text-lg text-[#273142] font-semibold font-roboto'>{e.categ}</h3>
                    <a href="/#" className='text-transparent absolute top-0 left-0 right-0 bottom-0'>.</a>
                </div>
            </SliderItem>
        ))}
    </GrogSlider>
  )
}
