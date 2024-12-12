// 
import { getAllAuthors } from '@/actions/author'
import { getAllNews } from '@/actions/news'
import React from 'react'
import { GalleryActionArea } from './_components/GalleryActionArea'
import { getAllGalleries } from '@/actions/galleries'
import { GalleryType } from '@/typings'

const AdminCasePage = async () => {

  const galleries = await getAllGalleries() as GalleryType[]

  return (
    <div className='flex bg-white dark:bg-dark-bg'>
        <GalleryActionArea galleries={galleries} />
    </div>
    )
}

export default AdminCasePage