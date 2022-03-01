import React from 'react'
import { Link } from 'react-scroll'


const NavBar = () => {
  return (
    <div className=' h-[65px] flex items-center sticky inset-0 md:h-[70px] lg:h-[80px] ' >


      <Link to='home' spy={true} smooth={true} offset={-30} duration={400}><img src="./SnapLearnLogo.svg" className=' w-[90px] md:w-[120px] lg:w-[140px] cursor-pointer ' alt="" /></Link>

      <div className='flex-1 flex justify-end' >

        <button className='text-[0.7rem] px-[0.7em] font-medium py-[0.3em] text-[#4f4f4f] mr-[1.25rem] md:mr-[2rem] md:text-[0.85rem] lg:text-[0.9rem] hover:text-black transition-all z-50 ' > <Link to='about' spy={true} smooth={true} offset={-30} duration={500}>About</Link>  </button>

        <button className='text-[0.7rem] hidden  px-[0.7em] font-medium py-[0.3em] text-[#4f4f4f] mr-[1.25rem] md:mr-[2rem] md:text-[0.85rem] lg:text-[0.9rem] md:block lg:block hover:text-black transition-all z-50' > Courses </button>

        <button className='text-[0.7rem] bg-[#F774C5] px-[1.4em] rounded-xl font-medium py-[0.7em] md:text-[0.85rem] text-white lg:text-[0.9rem] lg:px-[1.6em] lg:py-[0.7em] lg:rounded-3xl shadow-md shadow-[#7a7a7a] hover:bg-[#fa5fbf] transition '  > <Link to='signup' spy={true} smooth={true} offset={-30} duration={400}>Join Now</Link>  </button>



      </div>

    </div>

  )
}

export default NavBar



