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
import { createGallerySchema } from '@/lib/schema'
import { GalleryType } from '@/typings'
import { createGallery } from '@/actions/galleries'
import { useToast } from '@/hooks/use-toast'
import { uploadFileToS3 } from '@/actions/amazon-s3'

interface AddGalleryFormProps {
  onSubmit: (data: GalleryType) => void
  onClose: () => void
}

export function AddGalleryForm({ onSubmit, onClose }: AddGalleryFormProps) {
  const [isPending, setIsPending] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof createGallerySchema>>({
    resolver: zodResolver(createGallerySchema),
    defaultValues: {
      title: '',
      description: '',
      imageUrl: undefined
    },
  })

  async function handleSubmit(values: z.infer<typeof createGallerySchema>) {
    setIsPending(true)
    try {
      let formDataToSubmit: any = { ...values };

      if (values.imageUrl) {
        formDataToSubmit.imageUrl = await uploadFileToS3(values.imageUrl, 'jigawa-state');
      }

      const data = await createGallery(formDataToSubmit)
      onSubmit(data.gallery as GalleryType)
      form.reset()
      onClose()
      toast({
        title: "Gallery Added",
        description: "New gallery has been added successfully",
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      toast({
        title: "Error",
        description: "Failed to add gallery. Please try again.",
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
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea disabled={isPending} {...field} />
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
                <FormLabel>Picture</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    className='border-green-400'
                    type="file"
                    accept="image/*"
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

