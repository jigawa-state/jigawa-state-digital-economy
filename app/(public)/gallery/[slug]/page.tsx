import PagesBanner from '@/app/components/PagesBanner'
import React from 'react'

const page = ( {params}: any ) => {
    console.log(params.slug)
  return (
    <div>
        <PagesBanner subtitle='' message='Gallery' />
    </div>
  )
}

export default page