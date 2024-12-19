import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PoliciesType } from "@/typings"
import Link from "next/link"
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

interface PoliciesItemProps {
  policy: PoliciesType
  onDelete: (policyId: string) => void
}

export function PoliciesItem({ policy, onDelete }: PoliciesItemProps) {
  const handleDelete = () => {
    onDelete(policy.id)
  }

  return (
    <div className="flex flex-col bg-white dark:bg-zinc-800 rounded-lg drop-shadow-md px-4 space-y-6 py-6">
      <h1 className="text-m font-poppins font-semibold dark:text-zinc-500 ">{policy?.title}</h1>
      <div className="flex justify-between flex-col">
        <p className="text-sm font-poppins font-normal text-gray-600">{policy?.description}</p>
        <div className="w-full justify-between flex items-center mt-4">
          <Link href={policy?.fileUrl} download className="text-base font-poppins bg-green-500 px-3 py-1 rounded-lg font-normal text-white hover:bg-green-600 transition-colors">
            Download File
          </Link>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="sm">Delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to delete this policy?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the policy
                  "{policy.title}" and remove its data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  )
}

