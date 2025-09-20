// import React from 'react'
// import spaceLogo from "../assets/a-home-page-images/spaceLogo.png"
// export default function Header() {
//   return (
//     <div>
//       <header className='flex items-center pl-6 pt-8'>
//         <div className=" h-10 w-10 mr-2 ml-4">
//           <
//             img src={spaceLogo} 
//             alt="logo" 
//             className="h-11 w-11 rounded-full" 
//           />
//         </div>
//         <div className='flex-1 pl-8'>
//           <hr className='border-gray-600 border-t' />
//         </div>
//         <nav className='flex text-white w-1/2 h-20 items-center justify-center backdrop-blur-lg shadow-lg'>
//           <ul className='flex gap-[50px] uppercase cursor-pointer font-barlow text-xs tracking-[2.5px] h-full '>
//             <li className=' flex items-center border-b-2 border-white'> 00 home</li>
//             <li className='flex items-center'> 01 destination</li>
//             <li className='flex items-center'> 02 crew</li>
//             <li className='flex items-center'> 03 technology</li>
//           </ul>
//         </nav>
//       </header>
//     </div>
//   )
// }






// import React,{useState} from 'react'
// import background from "../assets/d-technology-images/background.jpg"
// import Header from "./Header"
// import technologies from "../data/technologyPage"
// import croppedVehicle from "../assets/d-technology-images/launchVehicle1.jpg"
// import croppedPort from "../assets/d-technology-images/spacePort2.png"
// import croppedCapsule from "../assets/d-technology-images/spaceCapsule.png"

// export default function Technology() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const activeTechnology = technologies[activeIndex];    

//   // Cropped images for phone + tablet only
//   const croppedImages = [croppedVehicle, croppedPort, croppedCapsule];

//   return (
//     <div
//       className="h-screen bg-cover bg-center flex flex-col"
//       style={{ backgroundImage: `url(${background})` }}
//     >
//       <Header />

//       {/* Title */}
//       <div className="flex font-barlow text-[18px] md:text-[20px] lg:text-[25px] tracking-[4px] gap-2 
//                       mt-6 lg:mt-[40px] uppercase justify-center md:justify-start md:ml-[35px] lg:ml-[120px]">
//         <h2 className="text-gray-700 font-extrabold">03</h2>
//         <h2 className="text-white">space launch 101</h2>
//       </div>

//       {/* === Tablet Image Full Width === */}
//         <div className="hidden md:block lg:hidden w-full mt-4">
//             <img 
//             src={croppedImages[activeIndex]} 
//             alt={activeTechnology.name}
//             className="w-full h-[170px] object-cover object-center"
//             />
//         </div>

//       {/* === Phone Image Full Width === */}
//       <div className="w-full md:hidden mt-4">
//         <img 
//           src={croppedImages[activeIndex]} 
//           alt={activeTechnology.name}
//           className="w-full h-[200px] object-cover object-center"
//         />
//       </div>

//       {/* Content Area */}
//       <div className="flex-1 flex flex-col-reverse md:flex-col lg:flex-row justify-center items-center lg:items-start 
//                       gap-8 lg:gap-[110px] mt-6 lg:mt-0 px-6 lg:px-0">
        
//         {/* Left: Circles + Text (desktop) */}
//         <div className="flex flex-col lg:flex-row gap-2 mb-12 md:gap-[50px] lg:ml-[220px] lg:mt-[70px] lg:relative lg:right-[120px]">

//           {/* Circles */}
//           <div className="flex lg:order-none md:flex-row lg:flex-col justify-center md:justify-center gap-4 md:gap-6 lg:gap-[25px] mt-0 md:mt-2 lg:mt-0">
//             {technologies.map((tech, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 className={`h-[40px] w-[40px] md:h-[40px] md:w-[40px] lg:h-[55px] lg:w-[55px] rounded-full font-bellefair text-[18px] md:text-[20px] lg:text-[30px] flex items-center justify-center transition-all duration-300
//                 ${
//                   activeIndex === index
//                     ? "bg-white text-black border border-white"
//                     : "bg-transparent text-white border border-gray-700 hover:border-white"
//                 }
//                 `}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>

//           {/* Text */}
//           <div className="max-w-sm md:mb-10 text-center md:text-center lg:text-left mt-2 md:mt-0 lg:mt-8 ">
//             <h4 className="uppercase font-barlow text-[#D0D6F9] text-[9px] md:text-[10px] tracking-[2.5px]">
//               {activeTechnology.title}
//             </h4>
//             <h1 className="uppercase font-bellefair text-white text-[28px] md:text-[28px] lg:text-[40px] mt-0">
//               {activeTechnology.name}
//             </h1>
//             <p className="text-[#D0D6F9] mt-1 lg:leading-[20px]  font-barlow text-[13px] md:text-xs tracking-[2.5px] font-light">
//               {activeTechnology.description}
//             </p>
//           </div>
//         </div>

//         {/* Desktop Image */}
//         <div className="hidden lg:flex lg:justify-end w-full lg:w-auto">
//           <img 
//             src={activeTechnology.image} 
//             alt={activeTechnology.name}
//             className="lg:w-[350px] lg:h-[375px] object-cover object-bottom"
//           />
//         </div>
//       </div> 
//     </div>
//   )
// }




import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ useLocation for active route
import spaceLogo from "../assets/a-home-page-images/spaceLogo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // current path

  // Helper function to determine if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <header className="flex items-center pl-6 pt-8 lg:pt-8 md:pt-0 justify-between relative z-50">
        {/* Logo  */}
        <div className="h-8 w-8 md:h-10 md:w-10 mr-2 ml-4">
          <img
            src={spaceLogo}
            alt="logo"
            className="h-8 w-8 md:h-11 md:w-11 rounded-full"
          />
        </div>

        {/* Horizontal line (desktop only) */}
        <div className="flex-1 pl-8 hidden lg:block">
          <hr className="border-gray-600 border-t" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex text-white h-20 items-center justify-center backdrop-blur-lg shadow-lg px-6">
          <ul className="flex gap-[30px] lg:gap-[50px] uppercase cursor-pointer font-barlow text-xs tracking-[2.5px] h-full">
            <li className={`flex items-center border-b-2 ${
              isActive("/") ? "border-white" : "border-transparent hover:border-gray-500"
            }`}>
              <Link to="/">00 Home</Link>
            </li>
            <li className={`flex items-center border-b-2 ${
              isActive("/destination") ? "border-white" : "border-transparent hover:border-gray-500"
            }`}>
              <Link to="/destination">01 Destination</Link>
            </li>
            <li className={`flex items-center border-b-2 ${
              isActive("/crew") ? "border-white" : "border-transparent hover:border-gray-500"
            }`}>
              <Link to="/crew">02 Crew</Link>
            </li>
            <li className={`flex items-center border-b-2 ${
              isActive("/technology") ? "border-white" : "border-transparent hover:border-gray-500"
            }`}>
              <Link to="/technology">03 Technology</Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger button (phone only) */}
        <div className="md:hidden ml-auto pr-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-lg shadow-lg text-white uppercase font-barlow text-sm tracking-[2.5px] absolute right-0 top-20 w-2/3 h-screen p-6">
          <ul className="flex flex-col gap-6">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>00 Home</Link>
            </li>
            <li>
              <Link to="/destination" onClick={() => setIsOpen(false)}>01 Destination</Link>
            </li>
            <li>
              <Link to="/crew" onClick={() => setIsOpen(false)}>02 Crew</Link>
            </li>
            <li>
              <Link to="/technology" onClick={() => setIsOpen(false)}>03 Technology</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
