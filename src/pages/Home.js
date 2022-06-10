import PreviewProducts from '../components/Home/PreviewProducts'
import Products from '../components/Home/Products'
import Section from '../components/Home/Section'
import Section2 from '../components/Home/Section2'
import Showcase from '../components/Home/Showcase'
import Special from '../components/Home/Special'
import book from '../components/Home/Img/hadis.jpeg'
import Delivery from '../components/Home/Delivery'
import Popular from '../components/Home/popular/Popular'

const data = [
  {img: book, title: 'Kitob', desc: 'Ҳадис ва Ҳаёт 4-жуз. Поклик китоби | Шайх Муҳаммад...', price: 32500},
  {img: book, title: 'Kitob', desc: 'Ҳадис ва Ҳаёт 4-жуз. Поклик китоби | Шайх Муҳаммад...', price: 32500},
  {img: book, title: 'Kitob', desc: 'Ҳадис ва Ҳаёт 4-жуз. Поклик китоби | Шайх Муҳаммад...', price: 32500},
]

const data2 = [
  {img: book, title: 'Kitob', desc: 'Ҳадис ва Ҳаёт 4-жуз. Поклик китоби | Шайх Муҳаммад...', price: 32500},
  {img: book, title: 'Kitob', desc: 'Ҳадис ва Ҳаёт 4-жуз. Поклик китоби | Шайх Муҳаммад...', price: 32500},
  {img: book, title: 'Kitob', desc: 'Ҳадис ва Ҳаёт 4-жуз. Поклик китоби | Шайх Муҳаммад...', price: 32500},
  {img: book, title: 'Kitob', desc: 'Ҳадис ва Ҳаёт 4-жуз. Поклик китоби | Шайх Муҳаммад...', price: 32500},
  {img: book, title: 'Kitob', desc: 'Ҳадис ва Ҳаёт 4-жуз. Поклик китоби | Шайх Муҳаммад...', price: 32500},
  {img: book, title: 'Kitob', desc: 'Ҳадис ва Ҳаёт 4-жуз. Поклик китоби | Шайх Муҳаммад...', price: 32500},
  {img: book, title: 'Kitob', desc: 'Ҳадис ва Ҳаёт 4-жуз. Поклик китоби | Шайх Муҳаммад...', price: 32500},
  {img: book, title: 'Kitob', desc: 'Ҳадис ва Ҳаёт 4-жуз. Поклик китоби | Шайх Муҳаммад...', price: 32500},
]
function Home() {
  return (
    <div>
      <Showcase />
      <PreviewProducts />
      <Section />
      <Special />
      <Products title='Лучшие предложения!' data={data} />
      <Section2 />
      <Products title='Лучшие предложения!' data={data2} />
      <Delivery />
      <Popular />
    </div>
  )
}

export default Home