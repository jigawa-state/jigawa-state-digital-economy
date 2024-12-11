"use server"
import { db } from '@/lib/db'
import * as z from 'zod'
import { createNewsSchema, createPolicySchema } from '@/lib/schema'


export const createPoliciesAction = async (values: z.infer<typeof createPolicySchema>) => {
    const fieldValidation = createPolicySchema.safeParse(values);
    if (!fieldValidation.success) {
         return { error: "field Validation failed " }
    }
    const { 
        imageUrl, 
        title, 
        description,
        published,

        author  
     } = fieldValidation.data


    await db.policies.create({
        data: {
            title,
            description,
            published: true,
            imageUrl,
            author: {
                connect: {
                    id: author
                }
            }
        }
    })

    return { success: "User has been created successfully"}
}


