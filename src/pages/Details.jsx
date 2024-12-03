import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function Details() {
    const coffee = useLoaderData()
    const {_id,name,supplier,chef,details,taste,category,photo}=coffee
  return (
    <div className='w-10/12 mx-auto py-10'>
        <div className='flex gap-2'>
        <Link to='/'><i className="fa-solid fa-arrow-left text-xl"></i></Link>
        <p className='mb-8 text-xl font-bold text-[#374151]'>Back to home</p>
        </div>
        <div className="card bg-base-100 w-full shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={photo}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-2xl">{name}</h2>
    <p className='text-lg text-gray-600 font-semibold'>Category: {category}</p>
    <p className='text-lg text-gray-600 font-semibold'>Details: {details}</p>
    <p className='text-lg text-gray-600 font-semibold'>Taste: {taste}</p>
    <p className='text-lg text-gray-600 font-semibold'>Chef: {chef}</p>
    <p className='text-lg text-gray-600 font-semibold'>Supplier: {supplier}</p>
  </div>
</div>
    </div>
  )
}
