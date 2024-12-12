import { getAllAuthors } from '@/actions/author'
import { getAllNews } from '@/actions/news'
import React from 'react'
import { Suspense } from 'react'
// import { DashboardSummary } from '@/'
import { DashboardSummary } from './_components/dashboard-summary'
import { CardSkeleton } from './_components/card-skeleton'
// import { CardSkeleton } from '@/components/card-skeleton'

const HomeDashboard = async () => {
  return (
    <div className="p-6 bg-gray-100 dark:bg-dark-bg min-h-[calc(100vh-5vh)] ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Suspense fallback={<CardSkeleton />}>
          <DashboardSummary type="policies" />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <DashboardSummary type="galleries" />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <DashboardSummary type="news" />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <DashboardSummary type="activities" />
        </Suspense>
      </div>
    </div>
    )
}

export default HomeDashboard