import { getAllAuthors } from '@/actions/author'
import { getAllNews } from '@/actions/news'
import React from 'react'
import { AuthorActionArea } from './_components/AuthorActionArea'
import { AuthorType, NewsType } from '@/typings'

const AdminCasePage = async () => {

  const allAuthors = await getAllAuthors() as AuthorType[]
  return (
    <div className='flex bg-white dark:bg-dark-bg'>
        <AuthorActionArea authors={allAuthors} />
    </div>
    )
}

export default AdminCasePage