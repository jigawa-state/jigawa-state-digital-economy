import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Facebook, Linkedin, Twitter, UserRound } from "lucide-react"
import { getPublishedTeamMemberBySlug } from "@/actions/team-members"
import { fallbackTeamMembers, PublicTeamMember } from "@/lib/site-content"
import { slugify } from "@/lib/utils"
import type { StaticImageData } from "next/image"
import type { ReactNode } from "react"

const findFallbackMember = (slug: string) => {
  return fallbackTeamMembers.find((member) => slugify(member.name) === slug || member.profileUrl?.split("/").filter(Boolean).pop() === slug) || null
}

const ProfileImage = ({ src, alt }: { src?: string | StaticImageData | null; alt: string }) => {
  if (!src) {
    return (
      <div className="flex aspect-[4/5] w-full items-center justify-center rounded-lg bg-emerald-900 text-white">
        <UserRound className="h-20 w-20" />
      </div>
    )
  }

  if (typeof src === "string") {
    return <img src={src} alt={alt} className="aspect-[4/5] w-full rounded-lg object-cover object-top" />
  }

  return <img src={src.src} alt={alt} className="aspect-[4/5] w-full rounded-lg object-cover object-top" />
}

const SocialLink = ({ href, children, label }: { href?: string | null; children: ReactNode; label: string }) => {
  if (!href) return null

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-900/15 text-emerald-950 transition hover:border-emerald-700 hover:bg-emerald-700 hover:text-white">
      {children}
    </a>
  )
}

const normalizeMember = (member: PublicTeamMember) => {
  const fallback = findFallbackMember(slugify(member.name))

  if (slugify(member.name) === "hashim-h-hashim") {
    return {
      ...member,
      category: "team",
      role: "Special Assistant to the Executive Governor of Jigawa State on ICT II",
      bio: fallback?.bio || member.bio,
    }
  }

  return member
}

const getMember = async (slug: string): Promise<PublicTeamMember | null> => {
  const dbMember = await getPublishedTeamMemberBySlug(slug)
  const member = (dbMember as PublicTeamMember | null) || findFallbackMember(slug)
  return member ? normalizeMember(member) : null
}

export default async function TeamMemberDetails({ params }: { params: { slug: string } }) {
  const member = await getMember(params.slug)

  if (!member) {
    notFound()
  }

  const categoryLabel = member.category === "cto" ? "Chief Technology Officer" : member.category === "team" ? "Delivery Team" : "Government Leadership"

  return (
    <main className="bg-white pt-20">
      <section className="border-b border-emerald-900/10 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/#leadership" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800 hover:text-emerald-950">
            <ArrowLeft className="h-4 w-4" /> Back to team
          </Link>
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[0.45fr_1fr] lg:items-start">
            <div className="rounded-lg border border-emerald-900/10 bg-white p-4 shadow-sm">
              <ProfileImage src={member.imageUrl} alt={member.name} />
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">{categoryLabel}</p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">{member.name}</h1>
                <p className="mt-4 text-xl font-semibold leading-8 text-emerald-800">{member.role}</p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-950">Profile</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {member.bio || `${member.name} serves within the Jigawa State ICT and Digital Economy structure, supporting digital transformation, public-sector technology delivery, and improved government services.`}
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-950">Focus Areas</h2>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {["Digital government delivery", "Public service modernization", "Institutional coordination", "Technology-enabled transparency"].map((item) => (
                    <div key={item} className="rounded-md bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-950">{item}</div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <SocialLink href={member.facebookUrl} label={`${member.name} on Facebook`}><Facebook className="h-4 w-4" /></SocialLink>
                <SocialLink href={member.twitterUrl} label={`${member.name} on X`}><Twitter className="h-4 w-4" /></SocialLink>
                <SocialLink href={member.linkedinUrl} label={`${member.name} on LinkedIn`}><Linkedin className="h-4 w-4" /></SocialLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

