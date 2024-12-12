"use server"
import { db } from '@/lib/db'
import { createActivitySchema } from '@/lib/schema'
import * as z from 'zod'


export const createActivities = async (values: z.infer<typeof createActivitySchema >) => {
    const fieldValidation = createActivitySchema.safeParse(values);
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

     const activities = await db.activities.create({
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


     return { success: "Activity has been created successfully", activities: activities}

}

export const getAllActivities = async () => {
    const activities =  await db.activities.findMany({
        include: {
            author: true
        }
    })

    return activities
}


export const getActivityById = async (id: string) => {
    const activity = await db.activities.findUnique({
        where: {
            id
        },
        include: {
            author: true
        }
    })
    return activity
}


export const deleteActivity = async (id: string) => {
    await db.activities.delete({
        where: {
            id
        }
    })
    return {success: "Activity has been deleted successfully"}
}


export const updateActivity = async (id: string, values: z.infer<typeof createActivitySchema>) => {
    const fieldValidation = createActivitySchema.safeParse(values);
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

    const activity = await db.activities.update({
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

    return { success: "Activity has been updated successfully", acticity: activity}
}