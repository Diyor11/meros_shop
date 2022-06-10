import playMarket from './Home/Img/logo/playmarket.svg'
import appStore from './Home/Img/logo/appstore.svg'

export default function Footer() {
  return (
    <div className='mt-10 bg-[#F4F7F8] '>
      <ul className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between py-4 px-2 border-gray-300 border-b">
        <li className='mt-3'>
          <h4 className='text-[#273142] font-sans text-lg font-bold' >Наши предложения</h4>
          <ul className='mt-4'>
            <li className='footer-item'>Meros Дисконт</li>
            <li className='footer-item'>Meros Мерч Бренд</li>
            <li className='footer-item'>Cкидки</li>
            <li className='footer-item'>Новинки</li>
            <li className='footer-item'>Коллекции</li>
            <li className='footer-item'>Распродажа</li>
            <li className='footer-item'>НовПопулярные товарыинки</li>
            <li className='footer-item'>Рекомендуемые товары</li>
          </ul>
        </li>
        <li className='mt-3'>
          <h4 className='text-[#273142] font-sans text-lg font-bold'>Сервис и поддержка</h4>
          <ul className='mt-4'>
            <li className='footer-item'>Бренды</li>
            <li className='footer-item'>Услуги</li>
            <li className='footer-item'>Оплата</li>
            <li className='footer-item'>Доставка</li>
            <li>Обратная связь</li>
            <li className='footer-item'>Вопросы и ответы</li>
            <li className='footer-item'>Публичная оферта</li>
          </ul>
        </li>
        <li className='mt-3'>
          <h4 className='text-[#273142] font-sans text-lg font-bold'>О компании</h4>
          <ul className='mt-4'>
            <li className='footer-item'>О нас</li>
            <li className='footer-item'>Отзывы</li>
            <li className='footer-item'>Как пройти</li>
            <li className='footer-item'>Вакансии и карьера</li>
            <li className='footer-item'>Почему нам доверяют</li>
          </ul>
        </li>
        <li className='mt-3'>
          <h4 className='text-[#273142] font-sans text-lg font-bold'>Для связи</h4>
          <ul className='mt-4'>
            <li className='footer-item'>+998 97 992 48 78</li>
            <li className='footer-item'>+998 71 123 48 78</li>
            <li className='footer-item'>merosshop@gmail.com</li>
          </ul>
        </li>
        <li className='mt-3'>
          <h4 className='text-[#273142] font-sans text-lg font-bold'>Мы в соцсетях</h4>
          <ul className='mt-4'>
            <li className='flex items-center gap-x-2 my-1'>
              <a href="https://instagram.com" className="bg-gray-400 hover:bg-[#F5921C] rounded-full text-white text-xl w-8 h-8 flex items-center justify-center"><i className="fab fa-instagram"></i></a>
              <a href="https://telegram.org" className="bg-gray-400 hover:bg-[#F5921C] rounded-full text-white text-xl w-8 h-8 flex items-center justify-center"><i className="fab fa-telegram"></i></a>
              <a href="https://facebook.com" className="bg-gray-400 hover:bg-[#F5921C] rounded-full text-white text-xl w-8 h-8 flex items-center justify-center"><i className="fa-brands fa-facebook-f"></i></a>
            </li>
            <li className='mt-5'>
              <div className='mt-2'>
                <img src={playMarket} alt="icon" />
              </div>
              <div className='mt-2'>
                <img src={appStore} alt="icon" />
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <h4 className='text-center text-[#8D909B] py-3 text-lg'>Meros Shop © 2022. Все права защищены.</h4>
    </div>
  )
}
