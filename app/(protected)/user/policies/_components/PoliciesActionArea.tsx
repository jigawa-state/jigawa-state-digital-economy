'use client'

import React, { useState } from 'react'
import { signOut } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from '@/components/ui/scroll-area'
import { PoliciesItem } from './PoliciesItem'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AddPolicyForm } from './AddPolicyForm'
import { AuthorType, PoliciesType } from '@/typings'
import { useToast } from "@/hooks/use-toast"
import { deletePolicy } from '@/actions/policies'
// import { deletePolicyAction } from '@/actions/policies'



const logout = () => {
  signOut()
}

export function PoliciesActionArea({
  authors,
  policies
}: {
  authors: AuthorType[]
  policies: PoliciesType[]
}) {
  const [policyItems, setPolicyItems] = useState<PoliciesType[]>([...policies])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const itemsPerPage = 20

  const filteredPolicies = policyItems.filter(item =>
    item?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item?.description?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalPages = Math.ceil(filteredPolicies.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPolicies = filteredPolicies.slice(startIndex, endIndex)

  const handleDeletePolicy = async (policyId: string) => {
    try {
      await deletePolicy(policyId)
      setPolicyItems(prevItems => prevItems.filter(item => item.id !== policyId))
      toast({
        title: "Policy Deleted",
        description: "Policy has been deleted successfully",
      })
    } catch (error) {
      console.error("Error deleting policy:", error)
      toast({
        title: "Error",
        description: "Failed to delete policy. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleAddPolicy = (newPolicy: PoliciesType) => {
    setPolicyItems(prevItems => [...prevItems, newPolicy])
    setIsDialogOpen(false)
    toast({
      title: "Policy Added",
      description: "New policy has been added successfully",
    })
  }

  return (
    <div className="flex flex-col w-full h-[calc(100vh-5vh)]">
      <div className="flex flex-col max-h-min py-0 my-0 bg-white dark:bg-dark-bg border-b drop-shadow-sm  w-full">
        <div className="w-full items-center flex px-6 justify-between py-4 rounded-lg">
          <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row w-full md:justify-between md:items-center">
            <div className="flex space-y-2 flex-col">
              <p className='text-lg font-poppins font-semibold'>Policy Management System</p>
              <div className="flex space-x-2">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className='font-poppins text-white dark:bg-green-500'>Add Policy</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[700px] max-h-[80%] md:max-w-xl overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className='py-5 flex text-center bg-green-200 dark:text-green-200 dark:bg-green-900/30 rounded-lg justify-center'>
                        <p className='flex items-start text-center font-poppins text-green-900'>Add Policy</p>
                      </DialogTitle>
                    </DialogHeader>
                    <AddPolicyForm authors={authors} onSubmit={handleAddPolicy} onClose={() => setIsDialogOpen(false)} />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-4 flex flex-col space-y-2">
                <Label htmlFor="search" className='text-base font-poppins font-semibold'>Search Policy</Label>
                <Input
                  id="search"
                  type="text"
                  placeholder="Search by title or description"
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
      <ScrollArea className="flex-grow">
        <div className="p-4">
          <div className="grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-3 gap-3">
            {currentPolicies.map((policy) => (
              <PoliciesItem policy={policy} key={policy.id} onDelete={handleDeletePolicy} />
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

