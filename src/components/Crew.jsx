// import React,{useState} from 'react'
// import background from "../assets/c-crew-images/background.png"
// import Header from "./Header"
// import crews from "../data/crewPage"
// // import commanderImg from "../assets/c-crew-images/commander.png"
// export default function Crew() {
// const [activeIndex, setActiveIndex] = useState(0);
// const activeCrew = crews[activeIndex]    
//   return (
//     <div  
//         className="h-screen bg-cover bg-center "
//         style={{ backgroundImage: `url(${background})` }}>
//         <Header />
//         <div className='flex font-barlow text-[25px] tracking-[5px] gap-2 pl-[150px] mt-[40px] uppercase'>
//             <h2 className='text-gray-700 font-extrabold '>02</h2>
//             <h2 className='text-[#ffffff]'>meet your crew</h2>
//         </div>
//         <div  className='flex justify-center gap-[110px]'>
//             <div className='relative right-[40px]'>  
//                 <div className='max-w-sm mt-20 ' >
//                     <h2 className='uppercase  font-bellefair text-gray-700 text-[25px] '>{activeCrew.position}</h2>
//                     <h1 className='uppercase  font-bellefair text-[#ffffff] text-[30px] py-[20px]'>{activeCrew.name}</h1>
//                     <p className='text-[#D0D6F9] font-barlow text-xs tracking-[2.5px] font-light'>{activeCrew.description}
//                     </p>
//                 </div>

               
//                 <div className="flex gap-4 mt-[90px]">
//                     {crews.map((_, index)=>(
//                         <button
//                             key={index}
//                             onClick={() => setActiveIndex(index)}
//                             className= {`h-[10px] w-[10px] rounded-full transition-all ${
//                                 activeIndex === index 
//                                 ? "bg-white" 
//                                 : "bg-gray-800 hover:bg-gray-400"
//                             }`}
//                         ></button>
//                     ))}


//                 </div>
               
//             </div>  
//             <div>
//                 <img 
//                 src={activeCrew.image} 
//                 alt={activeCrew.image} 
//                 className='w-[500px] h-[450px]'
//                 />
//             </div>
//         </div>

        

//     </div>
//   )
// }


// import React, { useState } from 'react'
// import background from "../assets/c-crew-images/background.png"
// import Header from "./Header"
// import crews from "../data/crewPage"

// export default function Crew() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const activeCrew = crews[activeIndex];

//   return (
//     <div
//       className="h-screen bg-cover bg-center flex flex-col"
//       style={{ backgroundImage: `url(${background})` }}
//     >
//       <Header />

//       {/* Title */}
//       <div className="flex font-barlow text-[20px] lg:text-[25px] tracking-[5px] gap-2 
//                       lg:pl-[125px] mt-6 lg:mt-[40px] uppercase md:justify-start md:ml-[35px] justify-center lg:justify-start">
//         <h2 className="text-gray-700 font-extrabold">02</h2>
//         <h2 className="text-white">meet your crew</h2>
//       </div>

//       {/* Content Area */}
//       <div className="flex-1 flex flex-col lg:flex-row justify-between items-center lg:items-start 
//                       lg:gap-[110px] px-6 lg:px-0 md:mt-[7px] mt-6 lg:mt-0 lg:ml-[160px] lg:mr-[30px] ">
        
//         {/* Text + Circles */}
//         <div className="flex flex-col items-center lg:items-start lg:relative lg:right-[40px]">
//           {/* Text */}
//           <div className="max-w-sm md:max-w-md mt-6 lg:mt-20 text-center lg:text-left">
//             <h2 className="uppercase font-bellefair text-gray-700 text-[20px] lg:text-[25px]">
//               {activeCrew.position}
//             </h2>
//             <h1 className="uppercase font-bellefair text-white md:text-[27px] text-[24px] lg:text-[30px] md:py-2 py-3">
//               {activeCrew.name}
//             </h1>
//             <p className="text-[#D0D6F9] font-barlow md:text-[10px] text-xs tracking-[2.5px] font-light">
//               {activeCrew.description}
//             </p>
//           </div>

//           {/* Circles (phone: after image, tablet: before image, desktop: left side) */}
//           <div className="hidden md:flex gap-4 mt-8 lg:mt-[90px]">
//             {crews.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 className={`h-[10px] w-[10px] md:h-[7px] md:w-[7px] rounded-full transition-all ${
//                   activeIndex === index
//                     ? "bg-white"
//                     : "bg-gray-800 hover:bg-gray-400"
//                 }`}
//               ></button>
//             ))}
//           </div>
//         </div>

//         {/* Image */}
//         <div className="flex flex-col items-center mt-0">
//           <img
//             src={activeCrew.image}
//             alt={activeCrew.image}
//             className="w-[250px] h-[250px] md:w-[400px] md:h-[280px] lg:w-[470px] lg:h-[443px] object-contain"
//           />
          
//           {/* Phone-only HR + Circles just after image */}
//           <div className="md:hidden w-full flex flex-col items-center">
//             <hr className="w-3/4 border-gray-600 my-4" />
//             <div className="flex gap-4 mt-2">
//               {crews.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveIndex(index)}
//                   className={`h-[10px] w-[10px] rounded-full transition-all ${
//                     activeIndex === index
//                       ? "bg-white"
//                       : "bg-gray-800 hover:bg-gray-400"
//                   }`}
//                 ></button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react'
import background from "../assets/c-crew-images/background.png"
import Header from "./Header"
import crews from "../data/crewPage"

export default function Crew() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCrew = crews[activeIndex];

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Header />

      {/* Title */}
      <div className="flex font-barlow text-[20px] lg:text-[25px] tracking-[5px] gap-2 
                      lg:pl-[80px] mt-6 lg:mt-[40px] uppercase md:justify-start md:ml-[35px] justify-center lg:justify-start">
        <h2 className="text-gray-700 font-extrabold">02</h2>
        <h2 className="text-white">meet your crew</h2>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row justify-between items-center lg:items-start 
                      lg:gap-[110px] px-6 lg:px-0 md:mt-[7px] mt-6 lg:mt-0 lg:ml-[160px] lg:mr-[30px] ">
        
        {/* Text + Circles */}
        <div className="flex flex-col items-center lg:items-start lg:relative lg:right-[40px]">
          {/* Text (hidden on phone, visible on md+) */}
          <div className="hidden md:block lg:max-w-sm md:max-w-md mt-6 lg:mt-20 text-center lg:text-left">
            <h2 className="uppercase font-bellefair text-gray-700 text-[20px] lg:text-[25px]">
              {activeCrew.position}
            </h2>
            <h1 className="uppercase font-bellefair text-white md:text-[27px] lg:text-[33px] md:py-2 py-3">
              {activeCrew.name}
            </h1>
            <p className="text-[#D0D6F9] font-barlow md:text-[10px] lg:text-[12px] tracking-[2.5px] font-light">
              {activeCrew.description}
            </p>
          </div>

          {/* Circles (tablet & desktop only) */}
          <div className="hidden md:flex gap-4 mt-8 lg:mt-[90px]">
            {crews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`lg:h-[10px] lg:w-[10px] md:h-[7px] md:w-[7px]  rounded-full transition-all ${
                  activeIndex === index
                    ? "bg-white"
                    : "bg-gray-800 hover:bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex flex-col items-center mt-0">
          <img
            src={activeCrew.image}
            alt={activeCrew.image}
            className="w-[250px] h-[250px] md:w-[400px] md:h-[280px] lg:w-[470px] lg:h-[450px] object-contain"
          />
          
          {/* Phone-only HR + Circles + Tags */}
          <div className="md:hidden w-full flex flex-col items-center  mb-[35px]">
            <hr className="w-3/4 border-gray-600 my-0" />
            <div className="flex gap-4 mt-2">
              {crews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-[7px] w-[7px] rounded-full transition-all ${
                    activeIndex === index
                      ? "bg-white"
                      : "bg-gray-800 hover:bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>

            {/* Tags (phone only) */}
            <div className="mt-6 max-w-xs text-center">
              <h2 className="uppercase font-bellefair text-gray-700 text-[16px]">
                {activeCrew.position}
              </h2>
              <h1 className="uppercase font-bellefair text-white text-[20px] py-3">
                {activeCrew.name}
              </h1>
              <p className="text-[#D0D6F9] font-barlow text-[12px] tracking-[2.5px] font-light">
                {activeCrew.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
