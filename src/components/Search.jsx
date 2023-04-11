export const Search = () => {
    return (
        <>
        <div className=" w-[900px] space-y-6 flex flex-col  mx-auto py-20  text-white ">
           <div className="">
                <h2 className="font-banner text-4xl">Stunning royalty-free images & royalty-free stock</h2>
                <p className=" py-2">Over 2.8 million+ high quality stock images, videos and music shared by our talented community.</p>
           </div>
           <div className=" flex bg-white text-gray-950 items-center rounded-full">
           
            <button className="px-5 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 stroke-green-700 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

            </button>
            
            
            <input type="text" name="" id="" placeholder="Search all images on Pixabay" className=" outline-none placeholder:text-gray-400 w-full py-3 px-4" />
           
           
            <button className="px-3 hover:bg-gray-200/50 mx-4 rounded-full py-1 cursor-pointer items-center flex space-x-1 flex-none ">
                <p className=" text-md">All images</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            </button>
           </div>
        </div>
        </>
    )
}