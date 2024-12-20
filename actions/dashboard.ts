"use server"
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'



export const getAllRecords = async () => {
    const news = await db.news.findMany({
        include: {
            author: true
        }
    })

    const activities = await db.activities.findMany({
        include: {
            author: true
        }
    })

    const galleries = await db.gallery.findMany()

    const policies = await db.policies.findMany({
        include: {
            author: true
        }
    })


    const authors = await db.author.findMany()

    revalidatePath('/user')

    return { news, activities, galleries, policies, authors }
}