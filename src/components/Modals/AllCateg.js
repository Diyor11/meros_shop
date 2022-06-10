import {useEffect} from 'react'
import search from './Img/search.svg'
import dress from './Img/dress.svg'
import disc from './Img/disc.svg'
import sofi from './Img/sofi.svg'
import tShirt from './Img/t-shirt.svg'
import drop from './Img/drop.svg'
import krasata from './Img/krasota.svg'
import book from './Img/book.svg'
import bread from './Img/bread.svg'
import child from './Img/child.svg'
import jewelry from './Img/jewelry.svg'
import jug from './Img/jug.svg'
import oil from './Img/oil.svg'
import parfumary from './Img/parfumary.svg'
import posuda from './Img/posuda.svg'
import rulerPen from './Img/ruler-pen.svg'

const left = [
    {icon: dress, name: 'Ayollar uchun'},
    {icon: disc, name: 'Disklar'},
    {icon: sofi, name: 'Uy va interier'},
    {icon: tShirt, name: 'Erkaklar uchun'},
    {icon: drop, name: 'Salomatlik'},
    {icon: krasata, name: 'Go\'zallik'},
    {icon: posuda, name: 'Idishlar'}
]

const right = [
    {icon: rulerPen, name: 'Konstovar'},
    {icon: book, name: 'Kitoblar'},
    {icon: bread, name: 'Oziq-ovqat'},
    {icon: parfumary, name: 'Parfumeriya'},
    {icon: jug, name: 'Suvenirlar'},
    {icon: jug, name: 'Suvenirlar'},
    {icon: jewelry, name: 'Zargarlik'},
    {icon: oil, name: 'Tabiy yog\''},
    {icon: child, name: 'Bolalar uchun'}
]

const Types = ({onClose, show, setCategory}) => {

    useEffect(() => {
        if(show) {
            document.body.classList.add('active-modal')
        } else 
            document.body.classList.remove('active-modal')
    }, [show])

    const clickHandler = (text) => {
        onClose()
        setCategory(text)
    }   
    
    if(!show) return <div></div>;

  return (
    <div className={`lg:flex hidden items-center justify-center fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm z-20 w-full h-[100vh]`}>
        <div data-modal='true' className='w-[655px] p-12 bg-white rounded-md anim-fade-down'>
            <div className="flex items-center justify-between">
                <div className="flex items-center cursor-pointer" onClick={() => clickHandler('Barcha ruknlar')}>
                    <img src={search} alt="icon" />
                    <h4 className='ml-2 text-lg font-medium main-text-color'>Barcha ruknlar</h4>
                </div>
                <div>
                    <button className='text-4xl leading-none main-text-color' onClick={onClose}>&times;</button>
                </div>
            </div>
            <div className="flex mt-3">
                <div className="grow">
                    <ul>
                        {left.map(({name, icon}, i) => (
                            <li key={i} className='flex items-center mt-4 cursor-pointer' onClick={() => clickHandler(name)}>
                                <img src={icon} alt="icon" />
                                <span className='ml-2 text-lg hover:text-[#F5921c]'>{name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="grow">
                    <ul>
                        {right.map(({name, icon}, i) => (
                            <li key={i} className='flex items-center mt-4 cursor-pointer' onClick={() => clickHandler(name)}>
                                <img src={icon} alt="icon" />
                                <span className='ml-2 text-lg hover:text-[#F5921c]'>{name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Types