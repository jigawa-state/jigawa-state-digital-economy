"use client"

import { Button } from "@/components/ui/button"
import { AuthorType } from "@/typings"
import { User } from 'lucide-react'
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

export function AuthorItem({ 
  author, 
  onDelete 
}: {
  author: AuthorType
  onDelete: (authorId: string) => void
}) {
  const handleDelete = () => {
    onDelete(author.id)
  }

  return (
    <div className="flex border border-green-700/50 flex-col items-center justify-center space-y-3 text-center pt-6 pb-3 bg-white dark:bg-black/40 rounded-lg shadow-md">
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="flex flex-col items-center h-[50px] w-[50px] justify-center rounded-full bg-green-200 dark:bg-green-900/30 p-4">
          <User className="text-green-500 dark:text-green-200" size={20} />
        </div>
        <div className="flex flex-col">
          <div className="text-stone-900 dark:text-green-200 text-sm">{author.name}</div>
          <p className="text-stone-900 font-poppins text-sm dark:text-green-200">{author.designation}</p>
        </div>
      </div>
      <div className="flex justify-end w-full">
        <AlertDialog>
          <AlertDialogTrigger>
            <p className="dark:text-red-500/30 px-3 py-2 transition-all hover:no-underline hover:text-red-600">Delete Author</p>
          </AlertDialogTrigger>
          <AlertDialogContent className="w-[90%] md:w-[500px] rounded-xl">
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription className="text-stone-700">
                This action cannot be undone. This will permanently delete <span className="font-semibold text-black">{author.name}</span> from the database
                and remove their data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="dark:text-red-500/30" onClick={handleDelete}>
                <Button className="transition-all hover:no-underline dark:text-black text-white" variant={'link'}>Delete Author</Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  )
}

