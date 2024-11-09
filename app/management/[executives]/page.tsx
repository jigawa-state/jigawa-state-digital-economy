import PagesBanner from '@/app/components/PagesBanner'
import React from 'react'

const page = ( { params }: any ) => {
    console.log(params)
  return (
    <div>
      <PagesBanner message='The Exucutive Governor of Jigawa State ' />
    </div>
  )
}

export default page