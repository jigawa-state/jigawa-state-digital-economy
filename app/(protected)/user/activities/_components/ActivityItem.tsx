import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ActivitiesType } from "@/typings"
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

    
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>{activity.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600 dark:text-gray-400">{activity?.content}</p>
        {activity?.imageUrl && (
          <img src={activity?.imageUrl} alt={activity?.title} className="mt-4 rounded-md w-full h-40 object-cover" />
        )}
        <p className="mt-4 text-xs text-gray-500">Author: {activity?.author?.name}</p>
      </CardContent>
      <div className="p-4 mt-auto">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" size="sm">Delete</Button>
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
  )
}

