import Image from "next/image";
import { LuAudioLines } from "react-icons/lu";
import { IoVideocamOutline } from "react-icons/io5";
import { CiTextAlignCenter } from "react-icons/ci";
import { IoImageOutline } from "react-icons/io5";

const ais = [
  {
    title: "Text",
    Icon: CiTextAlignCenter,
    color: 'text-green-500',
  },
  {
    title: "Image",
    Icon: IoImageOutline,
    color: 'text-orange-500',
  },
  {
    title: "Audio",
    Icon: LuAudioLines,
    color: 'text-purple-500',
  },
  {
    title: "Video",
    Icon: IoVideocamOutline,
    color: 'text-yellow-500',
  },
]


export default function Home() {
  return (
   <div className=" h-screen flex justify-center items-center">
   <div className=" flex flex-col items-center justify-center space-y-4">
    <div className=" w-full flex flex-col items-center justify-center py-6">
      <Image src="/images/genai-logo-white.png" width={1000} height={1000} className=" h-14 md:h-24 object-contain object-center" alt="logo" />
    </div>
      <div className=" max-w-4xl gap-4 grid grid-cols-2 md:grid-cols-4 px-6">
        {ais.map((ai) => (
          <div key={ai.title} className=" flex px-8 border border-gray-600 py-4 space-y-2 rounded-lg flex-col items-center">
            <ai.Icon className={`text-4xl ${ai.color} `} />
            <p className={` text-sm tracking-wider`}>{ai.title}</p>
          </div>
        ))}
        </div>
        <div className=" flex items-center pt-10 justify-center">
          <button className="border border-gray-600 px-6 py-3 rounded-full font-semibold ">Get Started</button>
        </div>
   </div>
   </div>
  );
}
