import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { fetchSummary } from '@/app/actions'

interface DashboardSummaryProps {
  type: 'policies' | 'galleries' | 'news' | 'activities'
}

export async function DashboardSummary({ type }: DashboardSummaryProps) {
//   const summary = await fetchSummary(type)
  return (
    <Card className=' bg-white dark:bg-black/30'>
      <CardHeader>
        <CardTitle className="capitalize">
            {/* {type} */}
        </CardTitle>
      </CardHeader>
      <CardContent>
       
      </CardContent>
    </Card>
  )
}

