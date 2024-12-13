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
import { createNewsSchema } from '@/lib/schema'
import { createNewsAction } from '@/actions/news'
import { AuthorType, NewsType } from '@/typings'




export function AddNewsForm({ authors, onSubmit }: { authors: AuthorType[], onSubmit: (data: NewsType) => void }) {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const router = useRouter()

  const form = useForm<z.infer<typeof createNewsSchema>>({
    resolver: zodResolver(createNewsSchema),
    defaultValues: {
        author: "",
        title: "",
        content: "",
        imageUrl: "",
    },
  })

  async function handleSubmit(values: z.infer<typeof createNewsSchema>) {
    setError('')
    setSuccess('')

    setIsPending(true)
    try {
    const data = await createNewsAction(values)

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
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <FormField
            control={form.control}
            name="title"
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
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contents</FormLabel>
                <FormControl>
                  <Textarea disabled={isPending} className=' h-[120px]' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Select disabled={isPending} onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Author" />
                      </SelectTrigger>
                      <SelectContent>

                        {
                          authors.map((author) => (
                            <SelectItem key={author.id} value={author.id}>{author.name}</SelectItem>
                          ))
                        }
                      </SelectContent>
                    </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        <FormField
            control={form.control}
            name="imageUrl"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem>
                <FormLabel>Image URL (if any)</FormLabel>
                <FormControl>
                  <Input disabled={isPending} className=' border-green-400'
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => onChange(e.target.files)}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


        </div>
        <Button className={` ${isPending ? " bg-green-500/50" : 'bg-green-500'}`} type="submit" disabled={isPending}>
          {isPending ? 'Submitting...' : 'Publish News'}
        </Button>
      </form>
    </Form>
  )
}


