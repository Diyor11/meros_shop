import {useEffect, useState} from 'react'

const types = ['Ayollar uchun', 'Disklar', 'Uy va interier', 'Erkaklar uchun', 'Salomatlik', 'Go\'zallik', 'Idishlar', 'Kanstovar', 'Kitoblar', 'Oziq-ovqat', 'Parfumeriya', 'Suvenirlar', 'Zargarlik', 'Tabiy yog\'', 'Bolalar uchun']

const Katalog = ({show, onClose}) => {

    const [lastSelect, setLastSelect] = useState('Ayollar uchun')
    
    useEffect(() => {
        if(show) {
            document.body.classList.add('active-modal')
        } else 
        document.body.classList.remove('active-modal')
    }, [show])
    
    if(!show) return <div></div>

    const handleClick = (text) => {
        setLastSelect(text)
        onClose()
    }

  return (
    <div className='items-end flex fixed top-0 left-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm w-full h-[100vh] z-10'>
        <div className='bg-white w-full h-[500px] flex items-baseline'>
            <div className='bg-[#F4F7F8] max-h-[500px] overflow-y-auto overflow-x-hidden scrolbar'>
                <ul className="py-10 pl-7 w-[350px]">
                    {types.map((e, i) => (
                        <li onClick={() => handleClick(e)} key={i} className={`cursor-pointer py-3 px-5 rounded-l-md ${lastSelect === e ? 'bg-[#fff]':'bg-[#F4F7F8]'} hover:bg-white hover-text`}>
                            <a href="##" className={`text-lg font-roboto text-${lastSelect === e ? '[#F5921c]':'[#273142]'}`}>
                                {e}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='bg-white'>

            </div>
        </div>
    </div>
  )
}

export default Katalog