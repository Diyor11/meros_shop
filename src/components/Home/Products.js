import React from 'react'
import Card from '../Card'

export default function Products({title, data}) {
  return (
    <div className='px-5 mt-3'>
        <h2 className="section-title">{title}</h2>
        <ul className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-x-7 gap-y-3'>
            {data.map((e, i) => (
              <li key={i} className="">
                <Card {...e} />
              </li>
            ))}
        </ul>
    </div>
  )
}
