import React from 'react'
import background from "../assets/c-crew-images/background.png"
import Header from "./Header"
import commanderImg from "../assets/c-crew-images/commander.png"
export default function Crew() {
   
  return (
    <div  
        className="min-h-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${background})` }}>
        <Header />
        <div className='flex font-barlow text-[25px] tracking-[5px] gap-2 pl-[150px] mt-[40px] uppercase'>
            <h2 className='text-gray-700 font-extrabold '>02</h2>
            <h2 className='text-[#ffffff]'>meet your crew</h2>
        </div>
        <div  className='flex justify-center gap-[110px]'>
            <div>  
                <div className='max-w-sm mt-20 ' >
                    <h2 className='uppercase  font-bellefair text-gray-700 text-[25px] '>commander</h2>
                    <h1 className='uppercase  font-bellefair text-[#ffffff] text-[40px] py-[20px]'>Douglas Hurley</h1>
                    <p className='text-[#ffffff] text-xs tracking-[2.5px] font-light'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. 
                        He launched into space for the third time as commander of Crew Dragon Demo-2.
                    </p>
                </div>

                <div className="flex gap-4 mt-[90px]">
                    <button className="h-[10px] w-[10px] rounded-full bg-white"></button>
                    <button className="h-[10px] w-[10px] rounded-full bg-gray-500"></button>
                    <button className="h-[10px] w-[10px] rounded-full bg-gray-500"></button>
                    <button className="h-[10px] w-[10px] rounded-full bg-gray-500"></button>
                </div>
               
            </div>  
            <div>
                <img 
                src={commanderImg} 
                alt="commander image" 
                className='w-[568.07px] h-[450px]'
                />
            </div>
        </div>

        

    </div>
  )
}
