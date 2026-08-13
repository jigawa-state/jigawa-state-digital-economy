export const dynamic = "force-dynamic"

import { Suspense } from 'react'

import { DashboardSummary } from './_components/dashboard-summary'
import { CardSkeleton } from './_components/card-skeleton'
import { getAllRecords } from '@/actions/dashboard'

const HomeDashboard = async () => {
  const {
    policies,
    galleries,
    news,
    activities,
    authors,
    siteSections,
    teamMembers,
  } = await getAllRecords()

  type CardType = {
    id: number
    title: string
    count: number
  }

  const cards: CardType[] = [
    { id: 1, title: "Policies", count: policies.length },
    { id: 2, title: "Galleries", count: galleries.length },
    { id: 3, title: "News", count: news.length },
    { id: 4, title: "Activities", count: activities.length },
    { id: 5, title: "Authors", count: authors.length },
    { id: 6, title: "Site Sections", count: siteSections.length },
    { id: 7, title: "Team Profiles", count: teamMembers.length },
  ]

  return (
    <div className="min-h-[calc(100vh-5vh)] border-t bg-gray-100 p-6 dark:bg-dark-bg">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-7">
        {cards.map((card) => (
          <Suspense key={card.id} fallback={<CardSkeleton />}>
            <DashboardSummary count={card.count} title={card.title} />
          </Suspense>
        ))}
      </div>
    </div>
  )
}

export default HomeDashboard
