// 
import { getAllAuthors } from '@/actions/author'
import { getAllNews } from '@/actions/news'
import React from 'react'
import { NewsActionArea } from './_components/NewsActionArea'

const AdminCasePage = async () => {

  const allNews = await getAllNews() as NewsType[]

  const allAuthors = await getAllAuthors() as AuthorType[]

  return (
    <div className='flex bg-white dark:bg-dark-bg'>
        <NewsActionArea authors={allAuthors} news={allNews} />
    </div>
    )
}

export default AdminCasePage