import { Navigation } from "./Navigation"
import banner from '../assets/banner.jpg'

let surname = 'Bichi'

let name = `Abdulkadir ${surname} `

console.log(name)


export const Banner = () => {
    return (
        <>
        <div className=" h-[500px] w-full  flex flex-col" style={{backgroundImage: `url( ${banner} )`}}>
            <Navigation />
        </div>
        </>
    )
}



