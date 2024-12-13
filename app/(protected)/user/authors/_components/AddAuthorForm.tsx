'use client'

import { startTransition, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { useTransition } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Input } from "@/components/ui/input"
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage
 } from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useRouter } from 'next/navigation'
import { AuthorSchema, createNewsSchema } from '@/lib/schema'
import { AuthorType } from '@/typings'
import { createAuthor } from '@/actions/author'




interface AddAuthorFormProps {
  onSubmit: (author: AuthorType) => void;
}

export function AddAuthorForm({ onSubmit }: AddAuthorFormProps) {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const router = useRouter()

  const form = useForm<z.infer<typeof AuthorSchema>>({
    resolver: zodResolver(AuthorSchema),
    defaultValues: {
      name: '',
      designation: '',
    },
  })

  async function handleSubmit(values: z.infer<typeof AuthorSchema>) {
    setError('')
    setSuccess('')
    setIsPending(true)
    try {
    const data = await createAuthor(values)
      await new Promise(resolve => setTimeout(resolve, 1000))
      onSubmit(data.author as AuthorType)
      form.reset()
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
                <FormLabel>Title</FormLabel>
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
        <Button className={` ${isPending ? " bg-green-500/50" : 'bg-green-500'}`} type="submit" disabled={isPending}>
          {isPending ? 'Submitting...' : 'Add Author'}
        </Button>
      </form>
    </Form>
  )
}


