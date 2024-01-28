import Nav from "./Nav"
import { BsFacebook, BsTwitter, BsInstagram, BsPinterest } from "react-icons/bs";
import Heropic from '../assets/girl (2).png'

const Hero = () => {
  return (
   <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
    <div className="lg:w-1/3 ssm:q-fit">
        <p className="text-4xl mb-5 text-slate-300">I'm</p>
        <h2 className="text-6xl">Abhishek Tiwari</h2>
        <p className="mt-10 text-xl text-state-300 font-sans">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>

    </div>
    <div className="w-1/3 items-center ssm:w-fit"><img src={Heropic} width={150} height={150} className="rounded-full w-full border-8 border-white"/></div>
    <div className="w-1/3 ssm:w-fit">
        <p className="text-4xl mb-4">About Me</p>
        <p className="text-slate-300">
            Let's build quality in programming ad design with our services
        </p>
        <button className="bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white" >
            Show More..
        </button>
        <div className="flex mt-5 space-x-4 cursor-pointer">
            <BsFacebook size={40} className="border-4hover:border-indigo-800 rounded-full"/>
            <BsInstagram size={40} className="border-4hover:border-indigo-800 rounded-full"/>
            <BsPinterest size={40} className="border-4hover:border-indigo-800 rounded-full"/>
            <BsTwitter size={40} className="border-4hover:border-indigo-800 rounded-full"/>
        </div>
    </div>
   </section>
  )
}

export default Hero