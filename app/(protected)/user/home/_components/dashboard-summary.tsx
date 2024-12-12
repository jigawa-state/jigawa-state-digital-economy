import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ActivitiesType, GalleryType, NewsType, PoliciesType } from '@/typings'
import Link from 'next/link'
// import { fetchSummary } from '@/app/actions'

// interface DashboardSummaryProps {
//   type: PoliciesType[] | GalleryType[] | NewsType[] | ActivitiesType[]
// }

export async function DashboardSummary({ 
    count,
    title,
 }: {
    count: number
    title: string
}) {
//   const summary = await fetchSummary(type)
  return (
    <Card className=' bg-white space-y-2  dark:bg-black/30'>
      <CardHeader>
        <CardTitle className="capitalize flex items-center justify-between">
            <p className=''>{title}</p>
            <p className='text-3xl font-bold'>{count}</p>
        </CardTitle>
      </CardHeader>
            <Link className='' href={`/user/${title.toLocaleLowerCase()}`}> 
                <CardFooter className=' w-full border-t py-1' >
                    View All
                </CardFooter>
            </Link>
    </Card>
  )
}

