import React, { useState } from 'react';
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleToggle = () => {
    setIsPressed(prevState => !prevState);
  }


  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex items-center justify-between bg-[#14233c] py-4 px-24 max-sm:p-4 max-[400px]:p-2">
      <div className="flex justify-start items-center z-20">
        {/* <img src="/logo.jpg" alt="Capital Edge logo" className="w-40 min-[2000px]:w-52 max-sm:w-36 bg-transparent h-6" /> */}
        CAPITAL EDGE
      </div>

      <ul className='flex flex-1 justify-center items-center list-none max-md:hidden'>
        <li className='my-0 mx-4 cursor-pointer hover:text-white leading-6 text-xl font-sans font-medium text-[#FEFEFE]'>
          <a href="#home">Home</a>
        </li>
        <li className='my-0 mx-4 cursor-pointer hover:text-white leading-6 text-xl font-sans font-normal text-yarg'>
          <a href="#practice-areas">About Us</a>
        </li>
        <li className='my-0 mx-4 cursor-pointer hover:text-white leading-6 text-xl font-sans font-normal text-yarg'>
          <a href="#about">Services</a>
        </li>
        <li className='my-0 mx-4 cursor-pointer hover:text-white leading-6 text-xl font-sans font-normal text-yarg'>
          <a href="#blog">FAQs</a>
        </li>
        <li className='my-0 mx-4 cursor-pointer hover:text-white leading-6 text-xl font-sans font-normal text-yarg'>
          <a href="#blog">Contact</a>
        </li>
      </ul>

      <div className="gap-4 flex justify-between">

        <a href="/signup"
          className="flex text-[#d2d2d2] text-xl leading-6 items-center max-md:hidden px-6 py-3 focus:outline-none border-solid border border-[#d2d2d2] bg-transparent rounded-2xl outline-none capitalize">
          signup
        </a>

        <a href="/signin"
          className="flex text-[#d2d2d2] text-xl leading-6 items-center max-md:hidden px-6 py-3 focus:outline-none border-solid border border-[#d2d2d2] bg-transparent rounded-2xl outline-none capitalize">
          signup
        </a>
      </div>

      <div className="flex md:hidden">

        <button className={styles.hamburger} onClick={handleToggle} aria-pressed={isPressed}>
          <svg className={styles.svg} aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
            {
              [...Array(3).keys()].map((val, i) => (
                <rect className={styles.rect} width="18" height="1.5" fill="red" ry="0.75" x="3" y={6.25 + 5 * i} />
              ))
            }
            {/* <rect className={styles.rect} width="18" height="1.5" fill="red" ry="0.75" x="3" y="11.25" />
            <rect className={styles.rect} width="18" height="1.5" fill="red" ry="0.75" x="3" y="16.25" /> */}
          </svg>
        </button>


        <div id="mobileMenu"
          className="!hidden top-8 fixed inset-0 w-full h-[100svh] bg-ground transition duration-500 ease-in-out flex-col z-10 flex items-center slide-bottom">
          <ul className='list-none grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8 w-full'>

            <li
              className='text-2xl cursor-pointer leading-7 font-cormorant hover:text-white/90 font-normal text-white capitalize py-2'>
              <h4 className="text-sm leading-[23px] tracking-wider font-rubik text-left text-white font-normal px-4">
                Home
              </h4>
            </li>

            <li
              className='text-2xl cursor-pointer leading-7 font-cormorant hover:text-white/90 font-normal text-white capitalize py-3'>
              <h4 className="text-sm leading-[23px] tracking-wider font-rubik text-lef text-white font-normal px-4">
                About Us
              </h4>
            </li>
            <li
              className='text-2xl cursor-pointer leading-7 font-cormorant hover:text-white/90 font-normal text-white capitalize py-2'>
              <h4 className="text-sm leading-[23px] tracking-wider font-rubik text-left text-white font-normal px-4">
                Services
              </h4>
            </li>
            <li
              className='text-2xl cursor-pointer leading-7 font-cormorant hover:text-white/90 font-normal text-white capitalize py-2'>
              <h4 className="text-sm leading-[23px] tracking-wider font-rubik text-left text-white font-normal px-4">
                FAQs
              </h4>
            </li>
            <li
              className='text-2xl cursor-pointer leading-7 font-cormorant hover:text-white/90 font-normal text-white capitalize py-2'>
              <h4 className="text-sm leading-[23px] -tracking-[4%] font-rubik text-left text-white font-normal px-4">
                Contact Us
              </h4>
            </li>
          </ul>

          <a href="/signup"
            className="my-4 absolute bottom-8 border border-[#FEFEFE] border-solid text-[#FEFEFE] py-4 px-32 rounded-2xl flex text-base leading-5 items-center focus:outline-none bg-transparent outline-none capitalize font-medium font-rubik -tracking-[5%]">
            sign up
          </a>

          <a href="/signin"
            className="my-4 absolute bottom-8 border border-[#FEFEFE] border-solid text-[#FEFEFE] py-4 px-32 rounded-2xl flex text-base leading-5 items-center focus:outline-none bg-transparent outline-none capitalize font-medium font-rubik -tracking-[5%]">
            sign in
          </a>
        </div>
      </div>

    </nav>


  )
}

export default Navbar