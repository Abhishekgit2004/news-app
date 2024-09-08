import React from 'react'
import Navbar from './component/Navbar'
import News from './component/News';
// import Newsitem from './component/Newsitem';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
export default function App () {
  return (
    <div className='bg-dark'>
    <Navbar/>
    <News></News>
  
    </div>
  )
}
