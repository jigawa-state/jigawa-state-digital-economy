"use server"
import { db } from '@/lib/db'


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

    const policies = await db.policies.findMany({
        include: {
            author: true
        }
    })

    return {news, activities}
}