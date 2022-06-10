import {NavLink} from 'react-router-dom'

function BottomNav() {

    const items = ['Для женщин', 'Диски', 'Дом и интерьер', 'Для мужчин', 'Здоровье', 'Красота', 'Посуды', 'Канцтовары', 'Книги', 'Продукты питания', 'Парфюмерия', 'Сувениры']

  return (
      <div className='lg:block hidden py-3'>
        <ul className="flex items-center justify-between">
            {items.map((e, i) => (
                <li className="cursor-pointer text-[#273142] font-roboto" key={i}>
                  <NavLink to={'/category/ayollaruchun'}>{e}</NavLink>
                </li>
            ))}
        </ul>
      </div>
  )
}

export default BottomNav