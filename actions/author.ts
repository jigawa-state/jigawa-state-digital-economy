"use server"
import { db } from '@/lib/db'
import { AuthorSchema } from '@/lib/schema'
import * as z from 'zod'
import { revalidatePath } from 'next/cache'
import { DatabaseError } from '@/lib/db'



// export async function getAllAuthors() {
//     try {
//       const authors = await db.author.findMany({
//         include: {
//           news: true
//         }
//       })
      
//       // Revalidate the cache for this data
//       revalidatePath('/authors')
//       return authors
      
//     } catch (error) {
//       console.error('Failed to fetch authors:', error)
//       throw new DatabaseError('Failed to fetch authors', error)
//     }
//   }
  
//   export async function createAuthor(data: z.infer<typeof AuthorSchema>) {
//     try {
//       const fieldValidation = AuthorSchema.safeParse(data);
  
//       if (!fieldValidation.success) {
//         return { error: "Field validation failed", details: fieldValidation.error.errors }
//       }
  
//       const { name, designation } = fieldValidation.data
  
//       const author = await db.author.create({
//         data: {
//           name,
//           designation
//         }
//       })
  
//       // Revalidate the cache after creating a new author
//       revalidatePath('/user')
      
//       return { success: "Author has been created successfully", author }
      
//     } catch (error) {
//       console.error('Failed to create author:', error)
      
//       // Check for specific database errors
//       if (error instanceof Error) {
//         if (error.message.includes('duplicate key')) {
//           return { error: "An author with this name already exists" }
//         }
//       }
      
//       throw new DatabaseError('Failed to create author', error)
//     }
//   }


export const getAllAuthors = async () => {
    return await db.author.findMany({
        include: {
            news: true
        }
    })
}

export const getAuthorById = async (id: string) => {
    return await db.author.findUnique({
        where: {
            id
        }
    })
}

export const createAuthor = async (data: z.infer<typeof AuthorSchema>) => {

    const fieldValidation = AuthorSchema.safeParse(data);

    if (!fieldValidation.success) {
        return { error: "field Validation failed " }
    }

    const {
        name,
        designation,
    } = fieldValidation.data

    const author =  await db.author.create({
        data: {
            name,
            designation
        }
    })

    revalidatePath('/user')
    return { success: "Author has been created successfully", author }
}

export const updateAuthor = async (id: string, data: z.infer<typeof AuthorSchema>) => {
    const fieldValidation = AuthorSchema.safeParse(data);

    if (!fieldValidation.success) {
        return { error: "field Validation failed " }
    }

    const {
        name,
        designation,
    } = fieldValidation.data

    const author = await db.author.update({
        where: {
            id
        },
        data: {
            name,
            designation
        }
    })

    revalidatePath('/user')
    return { success: "Author has been updated successfully", author }
}


export const deleteAuthorAction = async (id: string) => {

    if (!id) {
        return { error: "Author Not Found" }
    }

    const dbAuthor = await getAuthorById(id)

    if (!dbAuthor) {
        return { error: "Author does not exist" }
    }

    await db.author.delete({
        where: {
            id
        }
    })

    revalidatePath('/user')

    return { success: "Author has been deleted successfully" }
}


export const getAuthorNews = async (id: string) => {
    return await db.news.findMany({
        where: {
            authorId: id
        }
    })
}

export const getAuthorNewsById = async (id: string) => {
    const author = await db.news.findUnique({
        where: {
            id
        }
    })

    revalidatePath('/user')
    return author

}