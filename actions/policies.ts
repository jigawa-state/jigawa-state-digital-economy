"use server"
import { db } from '@/lib/db'
import { AuthorSchema, createPolicySchema } from '@/lib/schema'
import { slugify } from '@/lib/utils'
import { revalidatePath } from 'next/cache'
import * as z from 'zod'



export const getAllPolicies = async () => {
    const policies =  await db.policies.findMany({
        include: {
            author: true
        }
    })

    revalidatePath('/user')
    return policies
}

export const getPolcyById = async (id: string) => {
    const policy = await db.policies.findUnique({
        where: {
            id
        }
    })
    revalidatePath('/user')
    return policy
}

export const createPolicy = async (data: z.infer<typeof createPolicySchema>) => {

    const fieldValidation = createPolicySchema.safeParse(data);

    if (!fieldValidation.success) {
        return { error: "field Validation failed " }
    }

    const {
       author,
       description,
       fileUrl,
       published,
       title,
    } = fieldValidation.data

    const policy = await db.policies.create({
        data: {
            title,
            description,
            slug: slugify(title),
            fileUrl,
            published,
            author: {
                connect: {
                    id: author
                }
            },
        }
    })


    revalidatePath('/user')
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
       fileUrl,
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
            fileUrl,
            published,
            title,
        }
    })

    revalidatePath('/user')
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

    revalidatePath('/user')
    return { success: "Policy has been deleted successfully" }
}


