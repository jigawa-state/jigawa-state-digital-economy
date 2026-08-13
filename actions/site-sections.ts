"use server"

import { revalidatePath } from "next/cache"
import * as z from "zod"
import { db } from "@/lib/db"
import { SiteSectionSchema } from "@/lib/schema"
import { slugify } from "@/lib/utils"
import { fallbackSiteSections } from "@/lib/site-content"

const normalize = (value?: string | null) => {
  const trimmed = value?.trim()
  return trimmed ? trimmed : undefined
}

const revalidateSite = () => {
  revalidatePath("/")
  revalidatePath("/about-us")
  revalidatePath("/user/site-sections")
  revalidatePath("/user/home")
}

export const getAllSiteSections = async () => {
  try {
    return await db.siteSection.findMany({
      orderBy: [{ sortOrder: "asc" }, { title: "asc" }],
    })
  } catch (error) {
    console.error("Unable to load site sections", error)
    return []
  }
}

export const getPublishedSiteSections = async () => {
  try {
    return await db.siteSection.findMany({
      where: { published: true },
      orderBy: [{ sortOrder: "asc" }, { title: "asc" }],
    })
  } catch (error) {
    console.error("Unable to load published site sections", error)
    return []
  }
}

export const createSiteSection = async (values: z.infer<typeof SiteSectionSchema>) => {
  const fieldValidation = SiteSectionSchema.safeParse(values)

  if (!fieldValidation.success) {
    return { error: "Field validation failed" }
  }

  const data = fieldValidation.data
  const siteSection = await db.siteSection.create({
    data: {
      key: slugify(data.key || data.title),
      eyebrow: normalize(data.eyebrow),
      title: data.title,
      subtitle: normalize(data.subtitle),
      body: normalize(data.body),
      ctaLabel: normalize(data.ctaLabel),
      ctaUrl: normalize(data.ctaUrl),
      imageUrl: normalize(data.imageUrl),
      sectionType: data.sectionType,
      sortOrder: data.sortOrder,
      published: data.published,
    },
  })

  revalidateSite()
  return { success: "Site section has been created successfully", siteSection }
}

export const updateSiteSection = async (id: string, values: z.infer<typeof SiteSectionSchema>) => {
  const fieldValidation = SiteSectionSchema.safeParse(values)

  if (!fieldValidation.success) {
    return { error: "Field validation failed" }
  }

  const data = fieldValidation.data
  const siteSection = await db.siteSection.update({
    where: { id },
    data: {
      key: slugify(data.key || data.title),
      eyebrow: normalize(data.eyebrow),
      title: data.title,
      subtitle: normalize(data.subtitle),
      body: normalize(data.body),
      ctaLabel: normalize(data.ctaLabel),
      ctaUrl: normalize(data.ctaUrl),
      imageUrl: normalize(data.imageUrl),
      sectionType: data.sectionType,
      sortOrder: data.sortOrder,
      published: data.published,
    },
  })

  revalidateSite()
  return { success: "Site section has been updated successfully", siteSection }
}

export const deleteSiteSection = async (id: string) => {
  await db.siteSection.delete({ where: { id } })
  revalidateSite()
  return { success: "Site section has been deleted successfully" }
}

export const seedDefaultSiteSections = async () => {
  const seeded = []

  for (const section of fallbackSiteSections) {
    const siteSection = await db.siteSection.upsert({
      where: { key: section.key },
      update: {},
      create: {
        key: section.key,
        eyebrow: section.eyebrow,
        title: section.title,
        subtitle: section.subtitle,
        body: section.body,
        ctaLabel: section.ctaLabel,
        ctaUrl: section.ctaUrl,
        imageUrl: section.imageUrl,
        sectionType: section.sectionType,
        sortOrder: section.sortOrder,
        published: section.published,
      },
    })
    seeded.push(siteSection)
  }

  revalidateSite()
  return { success: "Default site sections are ready to edit", siteSections: seeded }
}
