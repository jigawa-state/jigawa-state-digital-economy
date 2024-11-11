import React from 'react'
import PagesBanner from '../components/PagesBanner'

const page = () => {
  return (
    <div>
        <PagesBanner message={`There's currently no News on our page`} />
        <div className=" h-[50vh] flex items-center md:text-3xl font-poppins font-semibold text-green-600 bg-gray-200 px-6 text-xl justify-center">
          There is currently no news on this page
        </div>
    </div>
  )
}

export default page