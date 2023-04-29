import { useState } from "react"
import { media } from "../data"
export const Search = () => {

const [imgBtn, setImgBtn] = useState(false)


const searchDrop = ( 
    <div className="bg-white rounded-lg px-3 py-6 flex flex-col top-[40px] absolute right-1 shadow-lg drop-shadow-xl   w-[220px] text-gray-800">
        <a href="" className=" flex items-center hover:bg-gray-200 py-3 px-2 rounded-lg space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 fill-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <p> All Images</p>
        </a>
        <div className="pl-6">
        <a href="" className=" flex items-center hover:bg-gray-200 py-3 px-2 rounded-lg space-x-4">
           {media[0].icon}
            <p> Photos</p>
        </a>

        <a href="" className=" flex items-center hover:bg-gray-200 py-3 px-2 rounded-lg space-x-4">
           {media[1].icon}
            <p> Illustrations</p>
        </a>

        <a href="" className=" flex items-center hover:bg-gray-200 py-3 px-2 rounded-lg space-x-4">
           {media[2].icon}
            <p> Vectors</p>
        </a>
        </div>
        <a href="" className=" flex items-center hover:bg-gray-200 py-3 px-2 rounded-lg space-x-4">
            {media[3].icon}
            <p>Videos </p>
        </a>
    </div>
)

    const updateImages = () => {
        return setImgBtn( (a) => {
            return a = !a
        })
    }
    return (
        <>
        <div className=" b w-[900px] space-y-6 flex flex-col text-gray-50  mx-auto py-20   ">
           <div className="">
                <h2 className="font-banner text-4xl">Stunning royalty-free images & royalty-free stock</h2>
                <p className=" py-2">Over 2.8 million+ high quality stock images, videos and music shared by our talented community.</p>
           </div>
           <div className=" flex relative bg-white text-gray-950 items-center rounded-full">
            <button className="px-5 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 stroke-green-700 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
            <input type="search" name="" id="" placeholder="Search all images on Pixabay" className=" outline-none placeholder:text-gray-400 w-full py-3 px-4" />
           
           
            <button onClick={updateImages} className="px-3 hover:bg-gray-200/50 mx-4 relative rounded-full py-1 cursor-pointer items-center flex space-x-1 flex-none ">
                <p className=" text-md">All images</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            </button>
                 { imgBtn && searchDrop }
           </div>
        </div>
        </>
    )
}