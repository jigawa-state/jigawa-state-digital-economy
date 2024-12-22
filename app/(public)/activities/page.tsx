

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon } from 'lucide-react'
import { activities } from './data'
import PagesBanner from '../../components/PagesBanner'
import { getAllActivities } from '@/actions/activities'
import { ActivitiesType } from '@/typings'

export default async function ActivitiesPage() {


  const dbActivities = await getAllActivities() as ActivitiesType[]
  return (
    <div className="min-h-screen bg-gray-50">
      <PagesBanner message='Recent and upcoming events in ICT and Digital Economy' />
      <main className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2">
          {dbActivities.map((activity) => (
            <Card key={activity.id} className="overflow-hidden">
              <div className="relative h-[350px]">
                <Image
                  src={activity.imageUrl}
                  alt={activity.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-green-700 line-clamp-2">
                  {activity.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-gray-600 mb-2">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <span>{activity?.date.toDateString()}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="w-4 h-4 mr-2" />
                  <span>{activity.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {activities.map((activity) => (
            <Card key={activity.id} className="overflow-hidden">
              <div className="relative h-[350px]">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-green-700 line-clamp-2">
                  {activity.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-gray-600 mb-2">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <span>{activity.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="w-4 h-4 mr-2" />
                  <span>{activity.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <footer className="bg-green-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>For more information about our activities, please contact the JICTDE office.</p>
          <p className="mt-2">© 2024 Jigawa State ICT and Digital Economy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
