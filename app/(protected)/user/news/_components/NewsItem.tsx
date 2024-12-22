import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsType } from "@/typings"
import Image from "next/image"
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




export function NewsItemCard({ news, onDelete }:{
  news:  NewsType
  onDelete: (newsId: string) => void
}) {


  const handleDelete = () => {
    onDelete(news.id)
  }



  return (
   <div className=" bg-gray-100 dark:bg-zinc-800 flex flex-col hover:bg-gray-200 px-4 py-6 rounded-lg space-y-3">
   <div className=" flex flex-col">
    <div className=" rounded-lg h-[300px] w-full dark:bg-dark-bg overflow-hidden">
        <Image src={news.imageUrl} alt='' className=' object-cover w-full h-full' width={700} height={700} />
      </div>
      <div className="">
        <span className=" text-xs"> Published by: {news?.author?.name}</span>
      <h2 className=" text-xl font-poppins"> { news?.title} </h2>
      </div>
   </div>

    <div className=" flex flex-col space-y-3 ">

      <div className="">
        <p className=" line-clamp-3"> { news?.content} </p>
      </div>
    </div>

    <div className=" flex justify-between items-center">
      <Link href={`/news/${news?.slug}`}   className=" font-poppins font-semibold text-green-500 hover:text-green-400">Read More</Link>
      <AlertDialog>
          <AlertDialogTrigger>
            <p className="dark:text-red-300 px-3 py-2 font-semibold transition-all hover:underline hover:dark:text-red-300 hover:text-red-600">Delete News</p>
          </AlertDialogTrigger>
          <AlertDialogContent className="w-[90%] md:w-[500px] rounded-xl">
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription className="text-stone-700 dark:text-stone-400">
                This action cannot be undone. This will permanently delete <span className="font-semibold dark:text-green-500 text-black">{news.title}</span> from the database
                and remove their data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="dark:text-red-500/30" onClick={handleDelete}>
                <Button className="transition-all hover:no-underline dark:text-black text-white" variant={'link'}>Delete News</Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
    </div>
   </div>
  )
}

