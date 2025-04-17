import React from 'react'
import PagesBanner from '../../components/PagesBanner'
import { getAllNews } from '@/actions/news'
import { NewsType } from '@/typings'
import PublicNewsCard from './_components/PublicNewsCard'



const page = async () => {


  const publicNews = await getAllNews() as NewsType[]
  
  return (
    <div>
        <PagesBanner subtitle='' message={`There's currently no News on our page`} />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-green-700 mb-8">Latest News</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            { publicNews.length === 0 ? <p className='text-center text-gray-600'>No news available</p> :
            publicNews.map((item) => <PublicNewsCard key={ item.id} news={item} />)}
          </div>
          </div>
        </div>
  )
}

export default page