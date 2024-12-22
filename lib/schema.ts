import { auth } from "@/auth"
import { stat } from "fs"
import { date, z } from "zod"


const isBrowser = typeof window !== 'undefined';

// Custom file validation function
const fileValidation = (maxSize: number, allowedTypes: string[]) =>
    z.any()
      .refine(
        (file) => {
          if (!isBrowser) return true; // Skip validation on server
          return file instanceof File;
        },
        "Expected a file."
      )
      .refine(
        (file) => {
          if (!isBrowser) return true; // Skip validation on server
          return file.size <= maxSize;
        },
        `Max file size is ${maxSize / 1000000}MB.`
      )
      .refine(
        (file) => {
          if (!isBrowser) return true; // Skip validation on server
          return allowedTypes.includes(file.type);
        },
        `Only ${allowedTypes.join(', ')} files are allowed.`
      );




export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  email: z.optional(z.string()),
  phone: z.optional(z.string()),
  image: z.optional(z.any())
}) 

export const settingsSecurityDetailsSchema = z.object({
  oldPassword: z.optional(z.string()),
  newPassword: z.optional(z.string()),
  newPasswordConfirmation: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
}) 


export const loginSchema = z.object({
    email: z.string().email({
      message: "Email must be of type email"
    }),
    password: z.string().min(1, {
      message: "Password is required"
    }),
  })
  

  export const newPasswordSchema = z.object({
    password: z.string().min(6, {
      message: "Min of 6 Characters required"
    }),
    passwordConfirmation: z.string().min(6, {
    message: "Min of 6 Characters required"
    }),
  })

  export const ResetSchema = z.object({
    email: z.string().email({
      message: "Email must be of type email"
    }),
  })

  
  

  export const signUpSchema = z.object({
    fullName: z.string().min(2, {
      message: "Please provide your Full Name",
    }),
    email: z.string().min(3, {
      message: "Email address must be less than 2 characters",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
    phone: z.string().min(2, {
      message: "Password confirmation must match characters.",
    }),
    passwordConfirmation: z.string().min(6, {
      message: "Password confirmation must match",
    }),
  })


  const senderSchema = z.object({
    senderAccountName: z.string(),
    senderCompany: z.string(),
    senderAccountNumber: z.string(),
    senderBankName: z.string(),
  })

  const receiverSchema = z.object({
    receiverAccountName: z.string(),
    receiverAccountNumber: z.string(),
    receiverBankName: z.string(),
    receiverCompany: z.string(),
  })




  export const AuthorSchema = z.object({
    name: z.string(),
    designation: z.string(),
  })


  export const createNewsSchema = z.object({
    title: z.string().min(3, {
      message: "Title is required"
    }),
    imageUrl: fileValidation(5000000, ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']).optional(),
    content: z.string().min(3, {
      message: "Content is required"
    }),

    published: z.boolean().default(false),
    author: z.string().min(3, {
      message: "Author is required"
    }),
  })


  export const createGallerySchema = z.object({
    title: z.string(),
    imageUrl: fileValidation(5000000, ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']).optional(),
    description: z.string().optional(),
  })

  export const createActivitySchema = z.object({
    title: z.string(),
    imageUrl: fileValidation(5000000, ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']).optional(),
    content: z.string(),
    location: z.string(),
    date: z.string(),
    published: z.boolean().default(false),
    author: z.string().min(3, {
      message: "Please select or create an Author"
    })
  })

  export const createPolicySchema = z.object({
    title: z.string(),
    // imageUrl: z.string(),
    fileUrl: fileValidation(5000000, ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']).optional(),
    description: z.string(),
    published: z.boolean(),
    author: z.string().min(3, {
      message: "Please select or create an Author"
    }),
  })

