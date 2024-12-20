import { PrismaClient } from '@prisma/client' // import prisma client
declare global { // declare a typescript global variable to be prismaClient or undefined 
    var prisma: PrismaClient | undefined;
}


const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
  }

  
  
export const db = globalThis.prisma || new PrismaClient(); // call the declared 
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;



// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db

// lib/error-handling.ts
export class DatabaseError extends Error {
  constructor(message: string, public readonly cause?: unknown) {
    super(message)
    this.name = 'DatabaseError'
  }
}
