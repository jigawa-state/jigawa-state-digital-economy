'use client'

import { startTransition, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { useTransition } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

import { useRouter } from 'next/navigation'
import { createNewsSchema } from '@/lib/schema'
import { createNewsAction } from '@/actions/news'
import { AuthorType, NewsType } from '@/typings'



type NewsTypeInterface = {
  onSubmit: (data: NewsType) => void
}

// export function AddNewsForm({ onSubmit }: NewsTypeInterface) {
export function AddNewsForm({ authors, onSubmit }: { authors: AuthorType[], onSubmit: (data: NewsType) => void }) {
  const [isPending, setIsPending] = useState(false)
  // const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const router = useRouter()

  const form = useForm<z.infer<typeof createNewsSchema>>({
    resolver: zodResolver(createNewsSchema),
    defaultValues: {
        author: "",
        title: "",
        content: "",
        // category: "",
        imageUrl: "",
    },
  })

  async function handleSubmit(values: z.infer<typeof createNewsSchema>) {
    setError('')
    setSuccess('')

    setIsPending(true)
    try {
    const data = await createNewsAction(values)
    console.log(data.news)
      await new Promise(resolve => setTimeout(resolve, 1000))
      onSubmit(data.news as NewsType)
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
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Driver Name</FormLabel>
                <FormControl>
                  <Input disabled={isPending} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Driver Phone Number</FormLabel>
                <FormControl>
                  <Textarea disabled={isPending} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* THE AUTHOR SELECT INPUT HERE */}
         
          {/* <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vehicle Type</FormLabel>
                <FormControl>
                  <Input disabled={isPending} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
         


        </div>
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </Form>
  )
}


