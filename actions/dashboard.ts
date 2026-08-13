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

    const galleries = await db.gallery.findMany()

    const policies = await db.policies.findMany({
        include: {
            author: true
        }
    })

    const authors = await db.author.findMany()
    const siteSections = await db.siteSection.findMany()
    const teamMembers = await db.teamMember.findMany()

    return { news, activities, galleries, policies, authors, siteSections, teamMembers }
}
