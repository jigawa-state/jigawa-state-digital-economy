"use server"
import { db } from '@/lib/db'
import { Author, createPolicySchema } from '@/lib/schema'
import * as z from 'zod'



export const getAllPolicies = async () => {
    return await db.policies.findMany({
        include: {
            author: true
        }
    })
}

export const getPolcyById = async (id: string) => {
    return await db.policies.findUnique({
        where: {
            id
        }
    })
}

export const createPolicy = async (data: z.infer<typeof createPolicySchema>) => {

    const fieldValidation = createPolicySchema.safeParse(data);

    if (!fieldValidation.success) {
        return { error: "field Validation failed " }
    }

    const {
       author,
       description,
       imageUrl,
       published,
       title,
    } = fieldValidation.data

    const policy = await db.policies.create({
        data: {
            title,
            description,
            imageUrl,
            published,
            author: {
                connect: {
                    id: author
                }
            },
        }
    })

    return { success: "Policy has been created successfully", policy: policy }
}

export const updatePolicy = async (id: string, data: z.infer<typeof createPolicySchema>) => {
    const fieldValidation = createPolicySchema.safeParse(data);

    if (!fieldValidation.success) {
        return { error: "field Validation failed " }
    }

    const {
       author,
       description,
       imageUrl,
       published,
       title,
    } = fieldValidation.data

    const policy = await db.policies.update({
        where: {
            id
        },
        data: {
            author: {
                connect: {
                    id: author
                }
            },
            description,
            imageUrl,
            published,
            title,
        }
    })


    return { success: "Policy has been updated successfully", policy: policy }
}


export const deletePolicy = async (id: string) => {

    if (!id) {
        return { error: "Policy Not Found" }
    }

    const dbPolicy = await getPolcyById(id)

    if (!dbPolicy) {
        return { error: "Author does not exist" }
    }

    await db.policies.delete({
        where: {
            id
        }
    })

    return { success: "Policy has been deleted successfully" }
}


