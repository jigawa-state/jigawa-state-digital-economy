'use client'

import React, { useState } from 'react'
import { signOut } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from '@/components/ui/scroll-area'
import { AuthorItem } from './AuthorsItem'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AddAuthorForm } from './AddAuthorForm'
import { AuthorType } from '@/typings'
import { useToast } from "@/hooks/use-toast"
import { deleteAuthorAction } from "@/actions/author"

const logout = () => {
  signOut()
}

export function AuthorActionArea({
  authors,
}: {
  authors: AuthorType[]
}) {
  const [authorsItems, setAuthorItems] = useState<AuthorType[]>([...authors])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const itemsPerPage = 20

  const filteredAuthors = authorsItems.filter(item =>
    item?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item?.designation?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalPages = Math.ceil(filteredAuthors.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentAuthorItems = filteredAuthors.slice(startIndex, endIndex)

  const handleDeleteAuthor = async (authorId: string) => {
    try {
      await deleteAuthorAction(authorId)
      setAuthorItems(prevItems => prevItems.filter(item => item.id !== authorId))
      toast({
        title: "Author Deleted",
        description: "Author has been deleted successfully",
      })
    } catch (error) {
      console.error("Error deleting author:", error)
      toast({
        title: "Error",
        description: "Failed to delete author. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleAddAuthor = (newAuthor: AuthorType) => {
    setAuthorItems(prevItems => [...prevItems, newAuthor])
    setIsDialogOpen(false)
    toast({
      title: "Author Added",
      description: "New author has been added successfully",
    })
  }

  return (
    <div className="flex flex-col w-full h-[calc(100vh-5vh)]">
      <div className="flex flex-col max-h-min py-0 my-0 bg-white dark:bg-dark-bg border-b drop-shadow-sm  w-full">
        <div className="w-full items-center flex px-6 justify-between py-4 rounded-lg">
          <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row w-full md:justify-between md:items-center">
            <div className="flex space-y-2 flex-col">
              <p className='text-lg font-poppins font-semibold'>Author Management</p>
              <div className="flex space-x-2">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className='font-poppins text-white dark:bg-green-500'>Add Author</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[700px] max-h-[85%] md:max-w-xl overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className='py-5 flex text-center bg-green-200 dark:bg-green-900/30 rounded-lg justify-center'>
                        <p className='flex items-start text-center font-poppins text-green-800 dark:text-green-300'>Add Author</p>
                      </DialogTitle>
                    </DialogHeader>
                    <AddAuthorForm onSubmit={handleAddAuthor} onClose={() => setIsDialogOpen(false)} />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-4 flex flex-col space-y-2">
                <Label htmlFor="search" className='text-base font-poppins font-semibold'>Search Author</Label>
                <Input
                  id="search"
                  type="text"
                  placeholder="Search by name or designation"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="max-w-sm outline-green-500 border-green-500 placeholder:text-green-700 w-[350px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollArea className="flex-grow ">
        <div className="p-4">
          <div className="grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {currentAuthorItems.map((author) => (
              <AuthorItem 
                key={author.id} 
                author={author} 
                onDelete={handleDeleteAuthor}
              />
            ))}
          </div>
        </div>
      </ScrollArea>
      <div className="flex justify-center py-4 bg-white dark:bg-dark-bg border-t">
        <Button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className='bg-black dark:bg-gray-600'
        >
          Previous
        </Button>
        <span className="mx-4">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className='bg-black dark:bg-gray-600'
        >
          Next
        </Button>
      </div>
    </div>
  )
}

