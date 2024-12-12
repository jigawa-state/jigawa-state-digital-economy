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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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


