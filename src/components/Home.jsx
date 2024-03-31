import React from 'react'
import SideBar from './template/SideBar'
import TopNav from './template/TopNav'

function Home() {
  document.title= "Movie-App | Homepage"
  return (
    <>
    <SideBar/>
      <div className='w-[80%] h-full'>
        <TopNav/>
      </div>
    </>
  )
}

export default Home