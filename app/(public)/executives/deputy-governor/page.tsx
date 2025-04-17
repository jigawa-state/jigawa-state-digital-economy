import PagesBanner from '@/app/components/PagesBanner'
import React from 'react'
import deputy from '@/app/assets/team/deputy.png'
import Image from 'next/image'
import DeputyGovernorBiography from '../_components/deputy-governor-bio'

const page = ( { params }: any ) => {
   
  return (
    <div className=' w-full'>
      <PagesBanner  subtitle='' message='The Executive Governor of Jigawa State ' />
      <div className=" max-w-6xl px-10 flex flex-col justify-center text-center md:text-start mx-auto w-full md:px-0">
       <div className=" flex md:flex-row w-full flex-col space-x-3  justify-center">
            <div className=" h-[150px] md:h-[250px] flex-none w-[150px] md:w-[250px] overflow-hidden rounded-full border-green-200 border-4 -mt-20 bg-white">
            <Image src={deputy}  className=' w-full h-full object-cover object-center' alt='Jigawa State Governor' height={500} width={500} />
            </div>
            <div className=" w-full h-full flex flex-col md:py-6 py-4">
              <h1 className=' font-poppins text-lg'>Deputy Governor of Jigawa State</h1>
              <p className=' font-bold text-xl md:text-4xl'>H.E Engr. Aminu Usman</p>
            </div>
       </div>
       <DeputyGovernorBiography />
      </div>
    </div>
  )
}

export default page