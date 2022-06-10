import React from 'react'
import Banners from '../components/Banners'
import PreviewProducts from '../components/Home/PreviewProducts'
import book from '../components/Home/Img/hadis.jpeg'
import Products from '../components/Home/Products'
import Popular from '../components/Home/popular/Popular'

const data = [
  {img: book, title: 'Kitob', desc: 'Ҳадис ва Ҳаёт 4-жуз. Поклик китоби | Шайх Муҳаммад...', price: 32500},
  {img: book, title: 'Kitob', desc: 'Ҳадис ва Ҳаёт 4-жуз. Поклик китоби | Шайх Муҳаммад...', price: 32500},
  {img: book, title: 'Kitob', desc: 'Ҳадис ва Ҳаёт 4-жуз. Поклик китоби | Шайх Муҳаммад...', price: 32500},
]

export default function Category() {
  return (
    <div>
      <Banners />
      <PreviewProducts />
      <Products title='Лучшие предложения!' data={data} />
      <Popular />
    </div>
  )
}
