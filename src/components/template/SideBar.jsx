import React from 'react'
import { NavLink } from 'react-router-dom'

function SideBar() {
  return (
    <div className='w-[20%] h-screen border-r-2 border-zinc-500 p-10'>
      <h1 className='text-2xl text-white font-bold'>
        <i className='text-[#6556CD] ri-tv-fill mr-2'></i> 
          <span className='text-2xl'>Movie-App</span>
      </h1>
      <nav className='flex flex-col text-zinc-400 text-lg gap-2'>
        <h1 className='text-white font-semibold text-xl mt-10 mb-2'>
          New Feeds
        </h1>
        <NavLink className={'hover:bg-[#6556CD] hover:text-white p-2 rounded-lg duration-300'}>
          <i className="mr-2 ri-fire-fill"/>Trending</NavLink>
        <NavLink className={'hover:bg-[#6556CD] hover:text-white p-2 rounded-lg duration-300'}>
        <i className="mr-2 ri-bard-fill"></i>Popular</NavLink>
        <NavLink className={'hover:bg-[#6556CD] hover:text-white p-2 rounded-lg duration-300'}>
        <i className="mr-2 ri-film-line"></i>Movies</NavLink>
        <NavLink className={'hover:bg-[#6556CD] hover:text-white p-2 rounded-lg duration-300'}>
        <i className="mr-2 ri-slideshow-3-fill"></i>TV Shows</NavLink>
        <NavLink className={'hover:bg-[#6556CD] hover:text-white p-2 rounded-lg duration-300'}>
        <i className="mr-2 ri-user-search-fill"></i>People</NavLink>
      </nav>
      <hr className='border-none h-[1px] bg-zinc-400'/>
      <nav className='flex flex-col text-zinc-400 text-lg gap-2'>
        <h1 className='text-white font-semibold text-xl mt-10 mb-5 '>
          Website Information
        </h1>

        <NavLink className={'hover:bg-[#6556CD] hover:text-white p-2 rounded-lg duration-300'}>
          <i className="mr-2 ri-information-fill"/>About</NavLink>
        <NavLink className={'hover:bg-[#6556CD] hover:text-white p-2 rounded-lg duration-300'}>
        <i className="mr-2 ri-phone-fill"></i>Contact Us</NavLink>
      </nav>
    
    </div>

  )
}

export default SideBar