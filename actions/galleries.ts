"use server"
import { db } from '@/lib/db'
import { createGallerySchema } from '@/lib/schema'
import { revalidatePath } from 'next/cache'
import * as z from 'zod'


export const createGallery = async (values: z.infer<typeof createGallerySchema >) => {
    const fieldValidation = createGallerySchema.safeParse(values);
    if (!fieldValidation.success) {
         return { error: "field Validation failed " }
    }
    const { 
        description,
        imageUrl,
        title,
     } = fieldValidation.data

     const gallery = await db.gallery.create({
        data: {
            published: true,
            description,
            imageUrl,
            title,
        }
     })

     revalidatePath('/user')
     return { success: "Gallery has been created successfully", gallery: gallery}

}

export const getAllGalleries  = async () => {
    const gallery =  await db.gallery.findMany()
    return gallery
}


export const getGalleryById = async (id: string) => {
    const gallery = await db.gallery.findUnique({
        where: {
            id
        },
    })

    revalidatePath('/user')
    return gallery
}


export const deleteGallery = async (id: string) => {
    await db.gallery.delete({
        where: {
            id
        }
    })
    return {success: "Gallery has been deleted successfully"}
}


export const updateGallery = async (id: string, values: z.infer<typeof createGallerySchema>) => {
    const fieldValidation = createGallerySchema.safeParse(values);
    if (!fieldValidation.success) {
         return { error: "field Validation failed " }
    }
    const { 
        description,
        imageUrl,
        title,
     } = fieldValidation.data

    const gallery = await db.gallery.update({
        where: {
            id
        },
        data: {
            published: true,
            description,
            imageUrl,
            title,

        }
    })

    revalidatePath('/user')

    return { success: "Gallery has been updated successfully", gallery: gallery}
}