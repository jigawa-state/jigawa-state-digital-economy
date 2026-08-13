"use server"

import { revalidatePath } from "next/cache"
import * as z from "zod"
import { db } from "@/lib/db"
import { TeamMemberSchema } from "@/lib/schema"
import { fallbackTeamMembers } from "@/lib/site-content"
import { slugify } from "@/lib/utils"

const normalize = (value?: string | null) => {
  const trimmed = value?.trim()
  return trimmed ? trimmed : undefined
}

const revalidateTeam = () => {
  revalidatePath("/")
  revalidatePath("/about-us")
  revalidatePath("/user/team-members")
  revalidatePath("/user/home")
}

export const getAllTeamMembers = async () => {
  try {
    return await db.teamMember.findMany({
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    })
  } catch (error) {
    console.error("Unable to load team members", error)
    return []
  }
}

export const getPublishedTeamMembers = async () => {
  try {
    return await db.teamMember.findMany({
      where: { published: true },
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    })
  } catch (error) {
    console.error("Unable to load published team members", error)
    return []
  }
}

export const createTeamMember = async (values: z.infer<typeof TeamMemberSchema>) => {
  const fieldValidation = TeamMemberSchema.safeParse(values)

  if (!fieldValidation.success) {
    return { error: "Field validation failed" }
  }

  const data = fieldValidation.data
  const teamMember = await db.teamMember.create({
    data: {
      name: data.name,
      role: data.role,
      category: data.category,
      bio: normalize(data.bio),
      imageUrl: normalize(data.imageUrl),
      profileUrl: normalize(data.profileUrl),
      facebookUrl: normalize(data.facebookUrl),
      twitterUrl: normalize(data.twitterUrl),
      linkedinUrl: normalize(data.linkedinUrl),
      sortOrder: data.sortOrder,
      published: data.published,
    },
  })

  revalidateTeam()
  return { success: "Team member has been created successfully", teamMember }
}

export const updateTeamMember = async (id: string, values: z.infer<typeof TeamMemberSchema>) => {
  const fieldValidation = TeamMemberSchema.safeParse(values)

  if (!fieldValidation.success) {
    return { error: "Field validation failed" }
  }

  const data = fieldValidation.data
  const teamMember = await db.teamMember.update({
    where: { id },
    data: {
      name: data.name,
      role: data.role,
      category: data.category,
      bio: normalize(data.bio),
      imageUrl: normalize(data.imageUrl),
      profileUrl: normalize(data.profileUrl),
      facebookUrl: normalize(data.facebookUrl),
      twitterUrl: normalize(data.twitterUrl),
      linkedinUrl: normalize(data.linkedinUrl),
      sortOrder: data.sortOrder,
      published: data.published,
    },
  })

  revalidateTeam()
  return { success: "Team member has been updated successfully", teamMember }
}

export const deleteTeamMember = async (id: string) => {
  await db.teamMember.delete({ where: { id } })
  revalidateTeam()
  return { success: "Team member has been deleted successfully" }
}

export const seedDefaultTeamMembers = async () => {
  const seeded = []

  for (const member of fallbackTeamMembers) {
    const imageUrl = typeof member.imageUrl === "string" ? member.imageUrl : member.imageUrl?.src
    const existing = await db.teamMember.findFirst({
      where: {
        name: member.name,
      },
    })

    if (existing) {
      const updated = await db.teamMember.update({
        where: { id: existing.id },
        data: {
          role: member.role,
          category: member.category,
          bio: member.bio,
          imageUrl: imageUrl || existing.imageUrl,
          profileUrl: member.profileUrl,
          facebookUrl: member.facebookUrl,
          twitterUrl: member.twitterUrl,
          linkedinUrl: member.linkedinUrl,
          sortOrder: member.sortOrder,
          published: member.published,
        },
      })
      seeded.push(updated)
      continue
    }

    const teamMember = await db.teamMember.create({
      data: {
        name: member.name,
        role: member.role,
        category: member.category,
        bio: member.bio,
        imageUrl,
        profileUrl: member.profileUrl,
        facebookUrl: member.facebookUrl,
        twitterUrl: member.twitterUrl,
        linkedinUrl: member.linkedinUrl,
        sortOrder: member.sortOrder,
        published: member.published,
      },
    })
    seeded.push(teamMember)
  }

  revalidateTeam()
  return { success: "Default team profiles are ready to edit", teamMembers: seeded }
}



export const getPublishedTeamMemberBySlug = async (slug: string) => {
  const members = await getPublishedTeamMembers()
  return members.find((member) => member.profileUrl?.split("/").filter(Boolean).pop() === slug || slugify(member.name) === slug) || null
}


