'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import img1 from '@/public/img/250-staff-training.jpg'
import img2 from '@/public/img/250-staff-training2.jpg'
import img3 from '@/public/img/250-staff-training3.jpg'
import PagesBanner from '../../components/PagesBanner'



const galleries = [
  {
    id: 1,
    title: "Capacity Building Workshop for 250 staffs",
    imageUrl: img1,
    date: "2023-03-15",
    fullDescription: "This is a more detailed description of Event 1. It provides comprehensive information about the event, including its purpose, participants, outcomes, and impact on the ICT and Digital Economy initiatives in Jigawa State. The event showcased the latest technological advancements and their potential applications in various sectors of the state's economy.",
    moreInfoLink: "/gallery/event-1",
    caption: "This is a brief description of what happened at this JICTDE event."
  },
  {
    id: 2,
    title: "Capacity Building Workshop for 250 staffs",
    imageUrl: img2,
    date: "2023-03-15",
    fullDescription: "This is a more detailed description of Event 1. It provides comprehensive information about the event, including its purpose, participants, outcomes, and impact on the ICT and Digital Economy initiatives in Jigawa State. The event showcased the latest technological advancements and their potential applications in various sectors of the state's economy.",
    moreInfoLink: "/gallery/event-2",
    caption: "This is a brief description of what happened at this JICTDE event."
  },
  {
    id: 3,
    title: "Capacity Building Workshop for 250 staffs",
    imageUrl: img3,
    date: "2023-03-15",
    fullDescription: "This is a more detailed description of Event 1. It provides comprehensive information about the event, including its purpose, participants, outcomes, and impact on the ICT and Digital Economy initiatives in Jigawa State. The event showcased the latest technological advancements and their potential applications in various sectors of the state's economy.",
    moreInfoLink: "/gallery/event-3",
    caption: "This is a brief description of what happened at this JICTDE event."
  },
]

// Mock data for gallery items
// const galleries = Array(50).fill(null).map((_, i) => ({
//   id: i + 1,
//   imageUrl: `/placeholder.svg?height=300&width=400&text=Event+${i + 1}`,
//   caption: `Caption for Event ${i + 1}: This is a brief description of what happened at this JICTDE event.`,
//   date: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString(),
//   fullDescription: `This is a more detailed description of Event ${i + 1}. It provides comprehensive information about the event, including its purpose, participants, outcomes, and impact on the ICT and Digital Economy initiatives in Jigawa State. The event showcased the latest technological advancements and their potential applications in various sectors of the state's economy.`,
//   moreInfoLink: `/gallery/event-1",{i + 1}`
// }))

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 40
  const totalPages = Math.ceil(galleries.length / itemsPerPage)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = galleries.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <header className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">JICTDE Event Gallery</h1>
          <p className="text-xl">Capturing moments from our ICT and Digital Economy initiatives</p>
        </div>
      </header> */}
      <PagesBanner message='Gallery' />

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardContent className="p-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="w-full p-0 h-auto hover:opacity-90 transition-opacity">
                      <Image
                        src={item.imageUrl}
                        alt={`Event ${item.id}`}
                        width={400}
                        height={300}
                        className="w-full h-[250px] object-cover"
                      />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl w-full px-0 border-0">
                    <DialogHeader className=' px-6'>
                      <DialogTitle>Event {item.title}</DialogTitle>
                      {/* <DialogDescription>{item.date.toLocaleLowerCase()}</DialogDescription> */}
                    </DialogHeader>
                    <Image
                      src={item.imageUrl}
                      alt={`Event ${item.id}`}
                      width={800}
                      height={600}
                      className="w-full object-cover  h-[60vh]"
                    />
                    <p className="mt-4 line-clamp-2 px-6">{item.fullDescription}</p>
                    <div className="mt-4 flex justify-end px-6">
                      <Button asChild>
                        <Link href={item.moreInfoLink}>
                          More Info <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <div className="p-4">
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <p className="mt-2 text-sm line-clamp-2">{item.caption}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center space-x-2">
            <Button
              variant="outline"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </main>

     
    </div>
  )
}