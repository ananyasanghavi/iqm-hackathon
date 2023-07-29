import React, { useEffect } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { Cards } from './Cards'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Landing() {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
  return (
    <>
        <div className='bg-black flex' >
        <h1 className="w-full text-2xl font-bold ml-3 text-white  my-6">Read your intrest news.</h1>
        <div className='flex'>
        <button className='text-white w-[90px] rounded-md font-medium my-6 mx- px-2 py-2 '>LogIn</button>
        <p className='text-white w-[90px] rounded-md font-medium my-7 mx-4 px-2 py-2 hover:cursor-pointer'>News</p>
        </div>
        </div>
        <div className='flex mt-20' data-aos="fade-down">
            <img src='https://www.landreg.gov.hk/images/lrnews.png'></img>
        <div className='flex-row mx-40 mt-40 '>
        <h1 className='font-bold text-center mt-76 justify-center'>To know about your local News</h1>
        <button className='bg-black text-white w-30 rounded-md p-1.5 mt-10 mx-14'>Click Here</button>
        </div>
        </div> 
        <div className='flex mx-16 float-none' data-aos="fade-right">
                <Cards />
                <Cards />
                 <Cards />
            </div>
    </>
  )
}
