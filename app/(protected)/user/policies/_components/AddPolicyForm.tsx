'use client'

import { startTransition, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Textarea } from '@/components/ui/textarea'
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useRouter } from 'next/navigation'
import { createPolicySchema } from '@/lib/schema'
import { createPolicy } from '@/actions/policies'
import { AuthorType, PoliciesType } from '@/typings'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"




type PolicyInterface = {
  onSubmit: (data: PoliciesType) => void
}

export function AddPolicyForm({ authors, onSubmit }: { authors: AuthorType[], onSubmit: (data: PoliciesType) => void }) {
  
  const [isPending, setIsPending] = useState(false)
  // const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const router = useRouter()


  console.log(authors)

  const form = useForm<z.infer<typeof createPolicySchema>>({
    resolver: zodResolver(createPolicySchema),
    defaultValues: {
        author: "",
        title: "",
        description: "",
        imageUrl: "",
        published: false
    },
  })

  async function handleSubmit(values: z.infer<typeof createPolicySchema>) {
    setError('')
    setSuccess('')
    setIsPending(true)


    try {
    const data = await createPolicy(values)
    
      await new Promise(resolve => setTimeout(resolve, 1000))
      onSubmit(data.policy as PoliciesType)
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
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Policy Description</FormLabel>
                <FormControl>
                  <Textarea className=' h-[120px]' disabled={isPending} {...field} />
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
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </Form>
  )
}


