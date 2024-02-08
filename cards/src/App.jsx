import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <nav className="bg-white shadow-md">
            <div className="flex items-center justify-between p-3 nav-container">
              <div className="flex items-center">
                <a className="font-bold text-2xl " href="#">N i k e</a>
              </div>
              <div className="flex item-center nav-links">
                <ul className="flex flex-row items-center">
                  <li className="p-2 "><a className="hover:underline decoration-1" href="">Log In</a></li>
                  <li className="p-2 "><a className="hover:underline decoration-1" href="">Books</a></li>
                  <li className="p-2 "><a className="hover:underline decoration-1" href="">Contact Us</a></li>
                  <li className="p-2 "><a className="hover:underline decoration-1" href="">About Us</a></li>
                </ul>
              </div>
              <div className="hidden p-2 menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                </svg>

              </div>

            </div>
            
        </nav>
      </div>











      <div className="bg-slate-100">
      <div className="flex justify-center text-3xl">
        <h1>Cards</h1>
      </div>
      <div className="m-6 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 xl:grid-cols-4">
        <div className="flex flex-col w-full rounded shadow-lg aspect-auto bg-white mt-6 bg-white-400 hover:cursor-pointer">
          <div className="rounded-full ">
            <img className="rounded custom-position p-2 object-cover" src="./images/shoes2.png" alt="p1"/>
          </div>
          <div className="text-xl ml-2 text-amber-800">
            <h1>Just In</h1>
          </div>
          <div className="text-xl ml-2">
            <h1>Air Jordan Legacy 312</h1>
          </div>
          <div className="flex ml-2 text-md text-slate-600">
            <h1>Men's Shoes</h1>
          </div>
          <div className="ml-2 mb-4 text-2xl">
            <h1>MRP : $67</h1>
          </div>
        </div>
        <div className="flex flex-col w-full rounded shadow-lg aspect-auto bg-white mt-6 bg-white-400 hover:cursor-pointer">
          <div className="rounded-full ">
            <img className="rounded custom-position p-2 object-cover" src="./images/shoes3.png" alt="p1"/>
          </div>
          <div className="text-xl ml-2 text-amber-800">
            <h1>Just In</h1>
          </div>
          <div className="text-xl ml-2">
            <h1>Air Jordan Legacy 312</h1>
          </div>
          <div className="flex ml-2 text-md text-slate-600">
            <h1>Men's Shoes</h1>
          </div>
          <div className="ml-2 mb-4 text-2xl">
            <h1>MRP : $67</h1>
          </div>
        </div>
        <div className="flex flex-col w-full rounded shadow-lg aspect-auto bg-white mt-6 bg-white-400 hover:cursor-pointer">
          <div className="rounded-full ">
            <img className="rounded custom-position p-2 object-cover" src="./images/shoes4.png" alt="p1"/>
          </div>
          <div className="text-xl ml-2 text-amber-800">
            <h1>Just In</h1>
          </div>
          <div className="text-xl ml-2">
            <h1>Air Jordan Legacy 312</h1>
          </div>
          <div className="flex ml-2 text-md text-slate-600">
            <h1>Men's Shoes</h1>
          </div>
          <div className="ml-2 mb-4 text-2xl">
            <h1>MRP : $67</h1>
          </div>
        </div>
        <div className="flex flex-col w-full rounded shadow-lg aspect-auto bg-white mt-6 bg-white-400 hover:cursor-pointer">
          <div className="rounded-full ">
            <img className="rounded custom-position p-2 object-cover" src="./images/shoes5.png" alt="p1"/>
          </div>
          <div className="text-xl ml-2 text-amber-800">
            <h1>Just In</h1>
          </div>
          <div className="text-xl ml-2">
            <h1>Air Jordan Legacy 312</h1>
          </div>
          <div className="flex ml-2 text-md text-slate-600">
            <h1>Men's Shoes</h1>
          </div>
          <div className="ml-2 mb-4 text-2xl">
            <h1>MRP : $67</h1>
          </div>
        </div>
        <div className="flex flex-col w-full rounded shadow-lg aspect-auto bg-white mt-6 bg-white-400 hover:cursor-pointer">
          <div className="rounded-full ">
            <img className="rounded custom-position p-2 object-cover" src="./images/shoes6.png" alt="p1"/>
          </div>
          <div className="text-xl ml-2 text-amber-800">
            <h1>Just In</h1>
          </div>
          <div className="text-xl ml-2">
            <h1>Air Jordan Legacy 312</h1>
          </div>
          <div className="flex ml-2 text-md text-slate-600">
            <h1>Men's Shoes</h1>
          </div>
          <div className="ml-2 mb-4 text-2xl">
            <h1>MRP : $67</h1>
          </div>
        </div>
        <div className="flex flex-col w-full rounded shadow-lg aspect-auto bg-white mt-6 bg-white-400 hover:cursor-pointer">
          <div className="rounded-full ">
            <img className="rounded custom-position p-2 object-cover" src="./images/shoes7.png" alt="p1"/>
          </div>
          <div className="text-xl ml-2 text-amber-800">
            <h1>Just In</h1>
          </div>
          <div className="text-xl ml-2">
            <h1>Air Jordan Legacy 312</h1>
          </div>
          <div className="flex ml-2 text-md text-slate-600">
            <h1>Men's Shoes</h1>
          </div>
          <div className="ml-2 mb-4 text-2xl">
            <h1>MRP : $67</h1>
          </div>
        </div>

        
        
        
        
      </div>

      






      <div className="flex justify-center text-3xl">
        <h1>Out Testinomials</h1>
      </div>

      <div className="m-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 xl:grid-cols-3">
        <div className="flex flex-col items-center justify-center w-full rounded shadow-lg aspect-auto bg-white mt-6 bg-white-400 hover:cursor-pointer">
          <div className="rounded-full h-36 w-36 ">
            <img className="rounded-full object-none w-36 h-36 -mt-6 rounded-full custom-position border-4 p-2 border-rose-600 object-cover" src="./images/person1.jpeg" alt="p1"/>
          </div>
          <div className="text-2xl ">
            <h1>Robert Smith</h1>
          </div>
          <div className="text-rose-600 text-lg">
            <h1>Web Designer</h1>
          </div>
          <div className="flex justify-center items-center m-8 text-md">
            <h1>Excellent problem-solving skills, confidence to achieve, and a can-do attitude toward any challenge</h1>
          </div>
          
        </div>
        <div className="flex flex-col items-center justify-center w-full rounded shadow-lg aspect-auto bg-white mt-6 bg-white-400 hover:cursor-pointer">
          <div className="rounded-full h-36 w-36 ">
            <img className="rounded-full object-none w-36 h-36 -mt-6 rounded-full custom-position border-4 p-2 border-rose-600 object-cover" src="./images/person2.jpeg" alt="p1"/>
          </div>
          <div className="text-2xl ">
            <h1>Robert Smith</h1>
          </div>
          <div className="text-rose-600 text-lg">
            <h1>Web Designer</h1>
          </div>
          <div className="flex justify-center items-center m-8 text-md">
            <h1>Excellent problem-solving skills, confidence to achieve, and a can-do attitude toward any challenge</h1>
          </div>
          
        </div>
        <div className="flex flex-col items-center justify-center w-full rounded shadow-lg aspect-auto bg-white mt-6 bg-white-400 hover:cursor-pointer">
          <div className="rounded-full h-36 w-36 ">
            <img className="rounded-full object-none w-36 h-36 -mt-6 rounded-full custom-position border-4 p-2 border-rose-600 object-cover" src="./images/person3.jpeg" alt="p1"/>
          </div>
          <div className="text-2xl ">
            <h1>Robert Smith</h1>
          </div>
          <div className="text-rose-600 text-lg">
            <h1>Web Designer</h1>
          </div>
          <div className="flex justify-center items-center m-8 text-md">
            <h1>Excellent problem-solving skills, confidence to achieve, and a can-do attitude toward any challenge</h1>
          </div>
          
        </div>
        <div className="flex flex-col items-center justify-center w-full rounded shadow-lg aspect-auto bg-white mt-6 bg-white-400 hover:cursor-pointer">
          <div className="rounded-full h-36 w-36 ">
            <img className="rounded-full object-none w-36 h-36 -mt-6 rounded-full custom-position border-4 p-2 border-rose-600 object-cover" src="./images/person2.jpeg" alt="p1"/>
          </div>
          <div className="text-2xl ">
            <h1>Robert Smith</h1>
          </div>
          <div className="text-rose-600 text-lg">
            <h1>Web Designer</h1>
          </div>
          <div className="flex justify-center items-center m-8 text-md">
            <h1>Excellent problem-solving skills, confidence to achieve, and a can-do attitude toward any challenge</h1>
          </div>
          
        </div>
        <div className="flex flex-col items-center justify-center w-full rounded shadow-lg aspect-auto bg-white mt-6 bg-white-400 hover:cursor-pointer">
          <div className="rounded-full h-36 w-36 ">
            <img className="rounded-full object-none w-36 h-36 -mt-6 rounded-full custom-position border-4 p-2 border-rose-600 object-cover" src="./images/person5.jpeg" alt="p1"/>
          </div>
          <div className="text-2xl ">
            <h1>Robert Smith</h1>
          </div>
          <div className="text-rose-600 text-lg">
            <h1>Web Designer</h1>
          </div>
          <div className="flex justify-center items-center m-8 text-md">
            <h1>Excellent problem-solving skills, confidence to achieve, and a can-do attitude toward any challenge</h1>
          </div>
          
        </div>
        <div className="flex flex-col items-center justify-center w-full rounded shadow-lg aspect-auto bg-white mt-6 bg-white-400 hover:cursor-pointer">
          <div className="rounded-full h-36 w-36 ">
            <img className="rounded-full object-none w-36 h-36 -mt-6 rounded-full custom-position border-4 p-2 border-rose-600 object-cover" src="./images/person6.jpeg" alt="p1"/>
          </div>
          <div className="text-2xl ">
            <h1>Robert Smith</h1>
          </div>
          <div className="text-rose-600 text-lg">
            <h1>Web Designer</h1>
          </div>
          <div className="flex justify-center items-center m-8 text-md">
            <h1>Excellent problem-solving skills, confidence to achieve, and a can-do attitude toward any challenge</h1>
          </div>
          
        </div>
        
      </div>
      </div>

    </>
  )
}

export default App
