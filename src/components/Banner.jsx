import { Navigation } from "./Navigation"
import banner from '../assets/banner2.jpg'
import { Search } from "./Search"


export const Banner = () => {
    return (
        <>
        <div className=" h-[500px] w-full bg-no-repeat bg-cover bg-center flex flex-col" style={{backgroundImage: `url( ${banner} )`}}>
        <div className=" w-full h-full bg-gradient-to-b from-slate-800/80 flex flex-col items-center">
            <Navigation />
            <Search />
        </div>
        </div>
        </>
    )
}



