
import pixar from '../assets/pixar.png'


export const Navigation = () => {
    return (
        <>
        <div className=" w-full flex text-white justify-between px-10 py-4">
            <div className=" text-2xl font-sans">
                <img src={pixar} alt="" className=' bg-white p-2 rounded-xl h-14' srcSet="" />
            </div>
            <div className="">
                <ul className=' flex space-x-3  items-center'>
                  <li>
                    <button href="" className=' space-x-2 flex items-center px-6 py-3 rounded-full hover:bg-gray-200/30'>
                        <p>Explore</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
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
        </>
    )
}