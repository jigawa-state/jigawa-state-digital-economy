// 
import { getAllAuthors } from '@/actions/author'
import { getAllNews } from '@/actions/news'
import React from 'react'
import { ActivityActionArea } from './_components/ActivityActionArea'
import { getAllActivities } from '@/actions/activities'
import { ActivitiesType, AuthorType } from '@/typings'

const AdminCasePage = async () => {

  const activities = await getAllActivities() as ActivitiesType[]

  const allAuthors = await getAllAuthors() as AuthorType[]

  return (
    <div className='flex bg-white dark:bg-dark-bg'>
        <ActivityActionArea authors={allAuthors} activities={activities} />
    </div>
    )
}

export default AdminCasePage