import React from 'react'
import Image from "next/image"
// import logo from '@/public/banner.jpg'
import jigawaLogo from '@/app/assets/images/jg-logo-white.png'
import logo from '@/app/assets/images/banner.png'

const PagesBanner = ( {message}: {message: string}) => {
  return (
    <section style={{
      backgroundImage: `url(${logo.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }} className=" bg-green-50 grid grid-cols-2 bg-blend-multiply py-20 md:h-[80vh] bg-cover bg-center w-full flex-col md:items-start justify-center pt-20 px-4 sm:px-6 lg:px-8">
    <div className="relative max-w-7xl bg-green-800/70 space-y-4 py-10 px-6 mx-auto">
        <Image src={jigawaLogo} alt='' className=' h-32 object-contain max-w-max object-left' width={700} height={700} />
        <h1 className="text-xl font-semibold  font-poppins tracking-tight text-green-200 sm:text-2xl md:text-3xl"><span className="text-white">Jigawa State</span> ICT and Digital Economy
        </h1>
        <p className="mt-6 max-w-3xl md:text-5xl text-2xl font-bold font-poppins text-white">
            {message}
        </p>
    </div>
  </section>
  )
}

export default PagesBanner