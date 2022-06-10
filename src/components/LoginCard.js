import {useEffect, useState} from 'react'

export default function LoginCard() {

    const [input, setInput] = useState('+998')
    const [error, setError] = useState(false)

    const handleChange = ({target: {value}}) => {
        const write = (text) => {
            if(/\d/.test(parseInt(text[text.length - 1])))
                setInput(text)
        }
        if(value.length < 17 && value.length > 3){
            if(value.length === 7 || value.length === 11 || value.length === 14){
                let arr = value.trim().split('')
                arr.splice(value.length - 1, 0, ' ')
                setInput((arr.join('')))
            }
            else{
                // setInput(value.trim())
                write(value)
            }
        }
    }

    useEffect(() => {
        if(!/.998(97|99|88|93|90|91) \d{3} \d{2} \d{2}/.test(input) && input.length > 4)
            setError(true)
        else 
            setError(false)
    }, [input])

  return (
    <div className='sm:w-[550px] w-full bg-white mx-auto sm:my-7 sm:rounded-md py-12 sm:px-12 px-4'>
        <h3 className='font-bold text-[#273142] font-sans text-[28px]'>Авторизация</h3>
        <label className='block font-[500] text-[#333] text-[17px] mt-3' htmlFor="login-input">Телефон</label>
        <input className={`h-12 w-full px-5 border border-[${error ? '#EF4444':'#D2D2D2'}] font-roboto text-[#273142] rounded mt-3`} type='tel' id="login-input" value={input} onChange={handleChange} />
        <h5 className={`text-red-500 text-sm mt-2 ${!error && 'hidden'}`}>Введите номер телефона правильно</h5>
        <button className='bg-[#32386B] w-full text-center text-xl py-3 rounded-md mt-3 font-sans font-bold text-white'>Получить смс код</button>
        <button className='w-full text-center text-xl py-3 mt-3 font-sans font-bold border border-black rounded-md'>Зарегистрироваться</button>
    </div>
  )
}
