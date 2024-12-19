'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage
 } from "@/components/ui/form"
import { useRouter } from 'next/navigation'
import { AuthorSchema } from '@/lib/schema'
import { AuthorType } from '@/typings'
import { createAuthor } from '@/actions/author'

interface AddAuthorFormProps {
  onSubmit: (author: AuthorType) => void;
  onClose: () => void;
}

export function AddAuthorForm({ onSubmit, onClose }: AddAuthorFormProps) {
  const [isPending, setIsPending] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof AuthorSchema>>({
    resolver: zodResolver(AuthorSchema),
    defaultValues: {
      name: '',
      designation: '',
    },
  })

  async function handleSubmit(values: z.infer<typeof AuthorSchema>) {
    setIsPending(true)
    try {
      const data = await createAuthor(values)
      await new Promise(resolve => setTimeout(resolve, 1000))
      onSubmit(data.author as AuthorType)
      form.reset()
      onClose() // Close the modal after successful submission
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsPending(false)
      router.refresh()
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input disabled={isPending} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="designation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Designation</FormLabel>
                <FormControl>
                  <Input disabled={isPending} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className={`${isPending ? "bg-green-500/50" : 'bg-green-500'}`} type="submit" disabled={isPending}>
          {isPending ? 'Submitting...' : 'Add Author'}
        </Button>
      </form>
    </Form>
  )
}

