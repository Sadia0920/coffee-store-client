import firstIcon from '../assets/icons/1.png'
import secondIcon from '../assets/icons/2.png'
import thirdIcon from '../assets/icons/3.png'
import fourthIcon from '../assets/icons/4.png'

export default function Describes() {
  return (
    <div className='bg-[#ECEAE3]'>
    <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        <div className='p-8'>
            <img src={firstIcon} alt="" />
            <h2 className='text-[#331A15] text-xl font-bold my-2'>Awesome Aroma</h2>
            <p className='text-[#1B1A1A]'>You will definitely be a fan of the design & aroma of your coffee</p>
        </div>
        <div className='p-10'>
            <img src={secondIcon} alt="" />
            <h2 className='text-[#331A15] text-xl font-bold my-2'>High Quality</h2>
            <p className='text-[#1B1A1A]'>We served the coffee to you maintaining the best quality</p>
        </div>
        <div className='p-10'>
            <img src={thirdIcon} alt="" />
            <h2 className='text-[#331A15] text-xl font-bold my-2'>Pure Grades</h2>
            <p className='text-[#1B1A1A]'>The coffee is made of the green coffee beans which you will love</p>
        </div>
        <div className='p-10'>
            <img src={fourthIcon} alt="" />
            <h2 className='text-[#331A15] text-xl font-bold my-2'>Proper Roasting</h2>
            <p className='text-[#1B1A1A]'>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
    </div>
    </div>
  )
}
