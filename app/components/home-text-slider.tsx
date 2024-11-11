'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import JGLogo from '@/app/assets/images/jg-logo-white.png'
import jictde from '@/app/assets/images/jictde.png'
import homeBanner from '@/app/assets/images/home-banner.png'
import Image from 'next/image'


const headlines = [
  {
    title: "Transforming Jigawa State Digital Economy",
    subtitle: "Empowering the future of our state"
  },
  {
    title: "Improving transparency and accountability",
    subtitle: "Innovative solutions for a better tomorrow"
  },
  {
    title: "Educating and empowering the youth",
    subtitle: "Building a brighter future for all"
  }
]

export default function TextBannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length)
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + headlines.length) % headlines.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(goToNext, 8000) // Change headline every 8 seconds

    return () => clearInterval(timer)
  }, [goToNext])

  return (
    <div
    style={{
        backgroundImage: `url(${homeBanner.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}

    className="w-full  h-[100vh] flex md:items-start bg-right items-center justify-center text-center md:text-start mt-10 bg-gradient-to-r from-green-700 to-green-800 text-green-700">
      <div className="container mx-auto px-4 space-y-6 flex flex-col py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 justify-center h-full md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 flex flex-col">
            <div className=" w-full ">
                <Image src={jictde} alt='' className=' h-32 object-center object-contain md:object-left' />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="space-y-2"
              >
                <motion.h1 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                  layoutId="headline-title"
                >
                  {headlines[currentIndex].title}
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-gray-800"
                  layoutId="headline-subtitle"
                >
                  {headlines[currentIndex].subtitle}
                </motion.p>
              </motion.div>
            </AnimatePresence>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center space-x-4"
            >
             
              <div className="flex w-full justify-center md:justify-start space-x-6">
                <button 
                  onClick={goToPrevious}
                  className="p-2 bg-transparent border-green-500 border hover:text-white rounded-full hover:bg-green-500 transition duration-300"
                  aria-label="Previous headline"
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button 
                  onClick={goToNext}
                  className="p-2 bg-transparent border-green-500 border hover:text-white rounded-full hover:bg-green-500 transition duration-300"
                  aria-label="Next headline"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
            <div className="">
            
           </div>

          </div>
          
          <div className="hidden md:block">
           <div className="">
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}