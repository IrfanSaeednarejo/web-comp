import { useState } from 'react'
import Logo from './assets/logo.png'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import fb from './assets/facebook.png'
import insta from './assets/instagram.png'
import tw from './assets/twitter.png'
import './App.css'

function App() {
 

  return (
    <>

<header className="w-full ">
    <navbar className="flex justify-between p-5">

      <img src={Logo} alt='Logo Image' className="h-10 w-10" />
              
      <ul className='flex gap-4'>
             <li><a href="#">Home</a></li>
             <li><a href="#">Menu</a></li>
             <li><a href="#">What' New</a></li>
             <li> <a href='#'>About</a></li>
              </ul>
      </navbar>
 </header>
 

 <main className=' flex justify-between'>
      <div className='gap-3'>
      <h2 className='text-4xl'> Its not just a Coffee</h2>
      <h2 className='text-4xl'> Its <span className='text-5xl'>Starbucks</span></h2>
      <p className=''><span className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, 
        quam quae reprehenderit placeat repellendus harum officiis dolores tempora 
        perferendis! Laborum explicabo dolorum ad odio ab rerum accusantium 
        quasi, sunt asperiores.</span></p>
      <button className='bg-emerald-800 p-3 '>Learn More</button>
      </div>

        <div className='flex'>
          <div className=''></div>
        <img src={img1}  className="h-20 w-20"  alt="Vite logo"/>
        <div>
        <img src={fb} alt='facebook' className="h-4 w-4" />
        <img src={insta} alt='instagram' className="h-4 w-4" />
        <img src={tw} alt='twitter' className="h-4 w-4" />
        </div>
        </div>


        
       
 </main>
 <div className=' flex justify-center'>
        <img src={img1}alt='facebook' className="h-4 w-4" />
        <img src={img2} alt='instagram' className="h-4 w-4" />
        <img src={img3} alt='twitter' className="h-4 w-4" />
        </div>
    </>
  )
}

export default App
