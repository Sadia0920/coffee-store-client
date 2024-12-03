import bar from '../assets/15.jpg'
import coffee from '../assets/19.png'
import logo from '../assets/logo1.png'
import banner from '../assets/3.png'
import Describes from '../Components/Describes'
import { Link, useLoaderData } from 'react-router-dom'
import CoffeeCard from '../Components/CoffeeCard'
import { useState } from 'react'


export default function Home() {
  const loadedCoffees = useLoaderData()
  const[coffees,setCoffees]=useState(loadedCoffees)
  return (
    <div>
    <div className='relative'>
        <img src={bar} alt="" className='h-28 w-full'/>
        <div className='flex -mt-24 md:ml-[280px] lg:ml-[550px] absolute items-center'>
        <img src={logo} alt="" className='h-20 w-20'/>
        <img src={coffee} alt="" className='h-16 w-36' />
        </div>
    </div>
    <div className='relative'>
    <img src={banner} alt="" className='h-[500px] w-full' />
    <div className='absolute -mt-[350px] md:ml-[100px] lg:ml-[670px]'>
    <div className="hero-content text-neutral-content text-left">
    <div >
      <h1 className="mb-5 text-3xl font-bold w-full">Would you like a Cup of Delicious Coffee?</h1>
      <p className="mb-5 md:w-[550px] w-[300px] ">
      It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
      </p>
      <button className="btn bg-[#E3B577]">Learn More</button>
    </div>
  </div>
  </div>
    </div>
    <Describes></Describes>
    <div className='my-14 text-center'>
        <h2 className='text-[#331A15] text-4xl font-bold'>Our Popular Products</h2>
        <Link to='/addCoffee'><button className="btn mt-6 border-[#331A15] text-[#FFFFFF] bg-[#E3B577]">Add Coffee</button></Link>
    </div>

    <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 w-10/12 mx-auto mb-8'>
      {
        loadedCoffees.map(coffee => <CoffeeCard 
          key={coffee._id} 
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          ></CoffeeCard>)
      }
    </div>
    </div>
  )
}
