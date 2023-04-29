
import pixar from '../assets/pixar.png'
import { useState } from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { IoLogoFacebook } from 'react-icons/io'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import { media } from '../data'

export const Navigation = () => {


  const [explore, setExplore] = useState(false)

  const switchExplore = () => {
    return setExplore((prev) => {
      return prev = !prev
    })
  }

  const mediaLinks = media.map((sin) => {
    return (
      <a href='#' key={sin.id} className='flex py-3 px-3  hover:bg-slate-700/80 rounded-md space-x-3'>
        {sin.icon}
       <p className=' text-sm'>{sin.name}</p>
      </a>
    )
  })

    return (
        <>
        <div className="  w-full flex text-white justify-between px-10 py-4">
            <div className=" text-2xl font-sans">
                <img src={pixar} alt="" className=' bg-white p-2 rounded-xl h-14' srcSet="" />
            </div>
            <div className="">
                <ul className=' flex space-x-3  items-center'>
                  <li>
                    <button onClick={switchExplore} href="" className=' relative space-x-2 flex items-center px-6 py-3 rounded-full hover:bg-gray-400/20'>
                        <p>Explore</p>
                       {
                        explore ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.0} stroke="currentColor" className="w-3 transform rotate-180 stroke-green-500  h-3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    : 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.0} stroke="currentColor" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                      
                      }
                    </button>
                  </li>

                  <li>
                    <a href="" className=' px-6 py-3 rounded-full hover:bg-gray-200/30'>
                        Log In
                    </a>
                  </li>

                  <li>
                    <a href="" className=' px-6 py-3 bg-gray-100/40 rounded-full border border-transparent hover:border-white'>
                        Join
                    </a>
                  </li>

                  <li>
                    <a href="" className=' px-6 bg-green-500 text-white py-3 rounded-full hover:bg-green-400'>
                        Upload
                    </a>
                  </li>
                </ul>
            </div>

        </div>

       {
        explore && 
        <div className="absolute flex flex-col z-10 bg-[rgb(25,27,38)] rounded-lg top-[75px] left-[480px] text-white w-[700px] ">
          <div className=" grid grid-cols-4">
            <div className=" border-r p-4 space-y-2 border-slate-600">
              <h3 className=' text-lg font-bold px-3'>Media</h3>
              {mediaLinks}
            </div>
            <div className=" border-r p-4 border-slate-600">
              hello
            </div>
            <div className=" border-r p-4 border-slate-600">
              hello
            </div>
            <div className="p-4">
              hello
            </div>
          </div>
          <div className=" border-t border-slate-600  py-4 space-x-4 px-10 flex justify-end ">
            <AiOutlineInstagram size={'2em'} className=' hover:cursor-pointer p-2 hover:bg-slate-400/50 rounded-md' />
            <AiOutlineTwitter size={'2em'} className=' hover:cursor-pointer p-2 hover:bg-slate-400/50 rounded-md' />
            <BsPinterest size={'2em'} className=' hover:cursor-pointer p-2 hover:bg-slate-400/50 rounded-md' />
            <IoLogoFacebook size={'2em'} className=' hover:cursor-pointer p-2 hover:bg-slate-400/50 rounded-md' />
          </div>
        </div>
       }


        </>
    )
}