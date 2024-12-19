'use client'

import { useState } from 'react'
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
import { uploadFileToS3 } from '@/actions/amazon-s3'
import { useToast } from '@/hooks/use-toast'

interface AddPolicyFormProps {
  authors: AuthorType[]
  onSubmit: (policy: PoliciesType) => void
  onClose: () => void
}

export function AddPolicyForm({ authors, onSubmit, onClose }: AddPolicyFormProps) {
  const [isPending, setIsPending] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof createPolicySchema>>({
    resolver: zodResolver(createPolicySchema),
    defaultValues: {
      author: "",
      title: "",
      description: "",
      fileUrl: undefined,
      published: false
    },
  })

  async function handleSubmit(data: z.infer<typeof createPolicySchema>) {
    setIsPending(true)
    try {
      let formDataToSubmit: any = { ...data };

      if (data.fileUrl) {
        formDataToSubmit.fileUrl = await uploadFileToS3(data.fileUrl, 'jigawa-state');
      }

      const records = await createPolicy(formDataToSubmit)
      onSubmit(records.policy as PoliciesType)
      form.reset()
      onClose()
      toast({
        title: "Policy Added",
        description: "New policy has been added successfully",
      })
    } catch (error) {
      console.error('Error processing form submission:', error);
      toast({
        title: "Error",
        description: "Failed to add policy. Please try again.",
        variant: "destructive",
      })
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
                  <Textarea className='h-[120px]' disabled={isPending} {...field} />
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
                      {authors.map((author) => (
                        <SelectItem key={author.id} value={author.id}>{author.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fileUrl"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem>
                <FormLabel>File (if any)</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    className='border-green-400'
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => onChange(e.target.files?.[0])}
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

