import governor from "@/app/assets/team/governor.png"
import deputy from "@/app/assets/team/deputy.png"
import rislan from "@/app/assets/team/rislan.jpg"
import hashim from "@/app/assets/team/hashim.jpg"
import murtala from "@/app/assets/team/murtala.jpg"
import habib from "@/app/assets/team/habib.jpg"
import type { StaticImageData } from "next/image"

export type PublicSiteSection = {
  id?: string
  key: string
  eyebrow?: string | null
  title: string
  subtitle?: string | null
  body?: string | null
  ctaLabel?: string | null
  ctaUrl?: string | null
  imageUrl?: string | null
  sectionType: string
  sortOrder: number
  published: boolean
}

export type PublicTeamMember = {
  id?: string
  name: string
  role: string
  category: "executive" | "cto" | "team" | string
  bio?: string | null
  imageUrl?: string | StaticImageData | null
  profileUrl?: string | null
  facebookUrl?: string | null
  twitterUrl?: string | null
  linkedinUrl?: string | null
  sortOrder: number
  published: boolean
}

export const fallbackSiteSections: PublicSiteSection[] = [
  {
    key: "mandate",
    eyebrow: "Government Digital Service",
    title: "Jigawa State ICT and Digital Economy",
    subtitle: "A modern public service platform for digital transformation, e-government delivery, innovation, and inclusive economic growth across Jigawa State.",
    body: "The ICT and Digital Economy Office coordinates technology policy, service digitization, digital skills, data systems, and the infrastructure required for transparent, citizen-centered governance.",
    ctaLabel: "Explore OneAPI",
    ctaUrl: "/oneapi",
    sectionType: "feature",
    sortOrder: 1,
    published: true,
  },
  {
    key: "initiatives",
    eyebrow: "Priority Programmes",
    title: "Strategic Digital Initiatives",
    subtitle: "Focused programmes designed to strengthen public institutions and expand access to technology-enabled services.",
    body: "Digital Infrastructure|Expanding reliable connectivity and shared digital infrastructure across the state.\nTech Education|Equipping public servants, youth, and communities with practical digital skills.\nE-Government|Digitizing government services to improve efficiency, transparency, and accountability.",
    sectionType: "cards",
    sortOrder: 2,
    published: true,
  },
  {
    key: "impact",
    eyebrow: "Measured Progress",
    title: "Public Sector Impact",
    subtitle: "Clear indicators from Jigawa State's digital transformation journey.",
    body: "50%|Increase in ICT adoption\n250+|Public servants trained in digital skills\n70+|Government services digitized",
    sectionType: "stats",
    sortOrder: 3,
    published: true,
  },
  {
    key: "mda-digitalization",
    eyebrow: "One Government",
    title: "Jigawa State MDA Digitalization",
    subtitle: "A centralized approach for onboarding ministries, departments, and agencies into secure, interoperable government systems.",
    body: "Through the Jigawa State One Government platform, MDAs can connect services, improve data exchange, and deliver faster digital public services to citizens and businesses.",
    ctaLabel: "See the Docs",
    ctaUrl: "/oneapi",
    sectionType: "feature",
    sortOrder: 4,
    published: true,
  },
]

export const fallbackTeamMembers: PublicTeamMember[] = [
  {
    name: "H.E Malam Umar A. Namadi, FCA",
    role: "Executive Governor of Jigawa State",
    category: "executive",
    bio: "Providing executive leadership for Jigawa State's digital transformation agenda and the expansion of citizen-centered public services.",
    imageUrl: governor,
    profileUrl: "/executives/governor",
    sortOrder: 1,
    published: true,
  },
  {
    name: "H.E Engr. Aminu Usman",
    role: "Deputy Governor of Jigawa State",
    category: "executive",
    bio: "Supporting the state's transformation priorities and the implementation of strategic development programmes.",
    imageUrl: deputy,
    profileUrl: "/executives/deputy-governor",
    sortOrder: 2,
    published: true,
  },
  {
    name: "Hashim H Hashim",
    role: "Special Assistant to the Executive Governor of Jigawa State on ICT II",
    category: "team",
    bio: "Supporting digital government implementation, technical coordination, and public service modernization across Jigawa State ICT and Digital Economy programmes.",
    imageUrl: hashim,
    linkedinUrl: "https://www.linkedin.com/in/hashim-h-hashim/",
    sortOrder: 3,
    published: true,
  },
  {
    name: "Abdulrahman Dauda",
    role: "Chief Technology Officer (CTO), Jigawa State ICT and Digital Economy",
    category: "cto",
    bio: "Providing technology leadership for platform delivery, systems architecture, and digital service execution across the Jigawa State ICT and Digital Economy agenda.",
    sortOrder: 7,
    published: true,
  },
  {
    name: "Dr. Rislan Abdulazeez Kanya",
    role: "Technical Advisor to the Executive Governor on ICT and Digital Economy",
    category: "team",
    imageUrl: rislan,
    linkedinUrl: "https://www.linkedin.com/in/dr-rislan-kanya/",
    sortOrder: 4,
    published: true,
  },
  {
    name: "Murtala Lawan",
    role: "Senior Special Assistant to the Executive Governor on ICT and Digital Economy",
    category: "team",
    imageUrl: murtala,
    sortOrder: 5,
    published: true,
  },
  {
    name: "Habib Kani",
    role: "Special Advisor to the Executive Governor on Technology and Innovation",
    category: "team",
    imageUrl: habib,
    linkedinUrl: "https://www.linkedin.com/in/habib-kani-60b4088a/",
    sortOrder: 6,
    published: true,
  },
]

