
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// import blackImg from './components/photo/black.jpg';
import'./Mainsection.css'
import MyPhoto from "./black.jpg"




function Mainsection() {
  
  return (
    <div className="bg-[#0067CC] flex h-dvh">
      <div className='w-1/2 mt-20 ml-15' data-aos="fade-right">
        <div className='text-[25px] font-[700] '>Hi,Myself</div>
        <div className='text-[45px] font-[900] leading-none'>Mohammed Shanith</div>
        <div className='text-[25px] font-[700] '>And I'm a Python Developer</div>
        <div className='mb-4 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, commodi,
             voluptates nobis aperiam, explicabo quisquam consequatur error excepturi illum 
             officiis amet a temporibus! Nihil maiores voluptatem, suscipit dolores 
             explicabo rerum.
        </div>
        <div className='flex ml-3'>
          <a href="" className='icon'><FaGithub className='icons'/></a>
          <a href="" className='icon'><FaInstagramSquare className='icons' /></a>
          <a href="http://www.linkedin.com/in/mohammed-shanith-m-0377a327a" className='icon'>
          <FaLinkedinIn className='icons'/></a>
        </div>
        <div><button className='btn mt-4'>Download CV</button></div>
      </div>
      
      <div data-aos="fade-left" >
        <img src={MyPhoto} alt="efrerf" className='br'/>
      </div>
    </div>
  )
}

export default Mainsection
