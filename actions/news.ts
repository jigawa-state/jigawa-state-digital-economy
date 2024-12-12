"use server"
import { db } from '@/lib/db'
import { createNewsSchema } from '@/lib/schema'
import * as z from 'zod'


export const createNewsAction = async (values: z.infer<typeof createNewsSchema >) => {
    const fieldValidation = createNewsSchema.safeParse(values);
    if (!fieldValidation.success) {
         return { error: "field Validation failed " }
    }
    const { 
        author,
        content,
        published,
        imageUrl,
        title,
     } = fieldValidation.data

     const news = await db.news.create({
        data: {
            content,
            imageUrl,
            published,
            title,
            author: {
                 connect: {
                        id: author
                 }
            },

        }
     })


     return { success: "News has been created successfully", news: news}

}

export const getAllNews = async () => {
    const news =  await db.news.findMany({
        include: {
            author: true
        }
    })

    return news
}


export const getNewsById = async (id: string) => {
    const news = await db.news.findUnique({
        where: {
            id
        },
        include: {
            author: true
        }
    })
    return news
}


export const deleteNews = async (id: string) => {
    const news = await db.news.delete({
        where: {
            id
        }
    })
    return {success: "News has been deleted successfully"}
}


export const updateNews = async (id: string, values: z.infer<typeof createNewsSchema>) => {
    const fieldValidation = createNewsSchema.safeParse(values);
    if (!fieldValidation.success) {
         return { error: "field Validation failed " }
    }
    const { 
        author,
        content,
        published,
        imageUrl,
        title,
     } = fieldValidation.data

    const news = await db.news.update({
        where: {
            id
        },
        data: {
            content,
            imageUrl,
            published,
            title,
        }
    })

    return { success: "News has been updated successfully", news: news}
}