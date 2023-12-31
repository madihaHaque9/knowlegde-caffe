import Bookmarks from './components/Bookmarks/Bookmarks'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header'
import './App.css'
import { useState } from 'react'


function App() {
  const [bookmarks,setBookmarks]=useState([])
  const [readingTime,setreadingtime]=useState(0)
  const handleAddToBookmarks=blog=>{
    const newBookmarks=[...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead =time=>{
   setreadingtime(readingTime+time)


  }

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmarks={handleAddToBookmarks}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
