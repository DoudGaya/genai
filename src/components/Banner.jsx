import { Navigation } from "./Navigation"
import banner from '../assets/banner.jpg'
import { Search } from "./Search"


export const Banner = () => {
    return (
        <>
        <div className=" h-[500px] w-full  flex flex-col" style={{backgroundImage: `url( ${banner} )`}}>
        <div className=" w-full h-full backdrop-blur-sm flex flex-col items-center">
            <Navigation />
            <Search />
        </div>
        </div>
        </>
    )
}



