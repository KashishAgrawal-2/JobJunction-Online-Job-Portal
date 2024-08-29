import { Input } from 'postcss'
import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"

const Newsletter = () => {
  return (
    <div>
        <div>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaEnvelopeOpenText/>
                Email me for jobs</h3>
                <p className='text-black/75 text-base mb-4'> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolorum.</p>

                <div className='w-full space-y-4'>
                    <input type="email" name="email" id="email" placeholder="name@gmail.com" 
                    className='w-full block py-2 pl-3 border focus:outline-none'/>
                    <input type="submit" value={"Subscribe"} className='w-full block py-2 pl-3 border focus:outline-none
                    bg-green-600 hover:bg-green-900 rounded-sm text-white cursor-pointer font-semibold '/>
                </div>

              
        </div>

        {/* 2ndprt */}

        <div className='mt-20'>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaRocket/>
                Get noticed faster</h3>
                <p className='text-black/75 text-base mb-4'> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolorum.</p>

                <div className='w-full space-y-4'>
                    
                    <input type="submit" value={"Upload your resume"} className='w-full block py-2 pl-3 border focus:outline-none
                    bg-green-600 hover:bg-green-900 rounded-sm text-white cursor-pointer font-semibold '/>
                </div>

              
        </div>
      
    </div>
  )
}

export default Newsletter
