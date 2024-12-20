import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ActivitiesType } from "@/typings"
import Image from 'next/image'
import { CalendarIcon, MapPinIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface ActivityItemProps {
  activity: ActivitiesType
  onDelete: (activityId: string) => void
}

export function ActivityItem({ activity, onDelete }: ActivityItemProps) {
  const handleDelete = () => {
    onDelete(activity.id)
  }

  return (

    <Card className="overflow-hidden">
    <div className="relative h-[350px]">
      <Image
        src={activity?.imageUrl}
        alt={activity?.title}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <CardHeader>
      <CardTitle className="text-xl py-0 font-semibold text-green-700 line-clamp-2">
       <div className=" flex flex-col">
        <p> {activity.title}</p>
        <span className=" text-xs"> Published by: {activity?.author?.name}</span>
       </div>
      </CardTitle>
    </CardHeader>
    <CardContent>
          <p className=" line-clamp-5"> { activity.content} </p>
    </CardContent>
    <div className=" flex justify-between items-center p-4">
      <div className=" flex space-x-3 items-center">
          <div className="flex items-center text-gray-600">
            <CalendarIcon className="w-4 h-4 mr-2" />
            <span>{activity?.date.toDateString()}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPinIcon className="w-4 h-4 mr-2" />
            <span className=" ">{activity?.location}</span>
          </div>
      </div>
        <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={'link'} className=" text-red-500 px-3 py-0.5 bg-red-300/50" >Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete this activity?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the activity
            "{activity.title}" and remove its data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
         </AlertDialog>
    </div>
  </Card>
    
    // <Card className="flex flex-col h-full">
    //   <CardHeader>
    //     <CardTitle>{activity.title}</CardTitle>
    //   </CardHeader>
    //   <CardContent className="flex-grow">
    //     {activity?.imageUrl && (
    //       <img src={activity?.imageUrl} alt={activity?.title} className="mt-4 rounded-md w-full h-40 object-cover" />
    //     )}
    //     <p className="mt-4 text-xs text-gray-500">Author: {activity?.author?.name}</p>
    //     <p className="text-sm text-gray-600 dark:text-gray-400">{activity?.content}</p>
    //   </CardContent>
    //   <div className="p-4 mt-auto">
    //     <AlertDialog>
    //       <AlertDialogTrigger asChild>
    //         <Button variant="destructive" size="sm">Delete</Button>
    //       </AlertDialogTrigger>
    //       <AlertDialogContent>
    //         <AlertDialogHeader>
    //           <AlertDialogTitle>Are you sure you want to delete this activity?</AlertDialogTitle>
    //           <AlertDialogDescription>
    //             This action cannot be undone. This will permanently delete the activity
    //             "{activity.title}" and remove its data from our servers.
    //           </AlertDialogDescription>
    //         </AlertDialogHeader>
    //         <AlertDialogFooter>
    //           <AlertDialogCancel>Cancel</AlertDialogCancel>
    //           <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
    //         </AlertDialogFooter>
    //       </AlertDialogContent>
    //     </AlertDialog>
    //   </div>
    // </Card>
  )
}

