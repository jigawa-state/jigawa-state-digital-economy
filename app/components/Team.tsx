import { StaticImageData } from "next/image"
import { ReactNode } from "react"
import Link from "next/link"
import { Linkedin, Quote, ShieldCheck, Twitter, Facebook, ExternalLink, UserRound } from "lucide-react"
import { getPublishedTeamMembers } from "@/actions/team-members"
import { fallbackTeamMembers, PublicTeamMember } from "@/lib/site-content"
import { slugify } from "@/lib/utils"
import jigawaFlag from "@/app/assets/images/ng-flag.png"

const getMembers = async () => {
  const records = await getPublishedTeamMembers()
  return records.length ? (records as PublicTeamMember[]) : fallbackTeamMembers
}

const memberHref = (member: PublicTeamMember) => member.category === "executive" && member.profileUrl ? member.profileUrl : `/team/${slugify(member.name)}`

const ProfileImage = ({ src, alt, className }: { src?: string | StaticImageData | null; alt: string; className: string }) => {
  if (!src) {
    return (
      <div className={`${className} flex items-center justify-center bg-emerald-900 text-white`}>
        <UserRound className="h-10 w-10" />
      </div>
    )
  }

  if (typeof src === "string") {
    return <img src={src} alt={alt} className={className} />
  }

  return <img src={src.src} alt={alt} className={className} />
}

const SocialLink = ({ href, label, children }: { href?: string | null; label: string; children: ReactNode }) => {
  if (!href) return null

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-900/15 bg-white text-emerald-950 transition hover:border-emerald-700 hover:bg-emerald-700 hover:text-white">
      {children}
    </a>
  )
}

const Team = async () => {
  const members = await getMembers()
  const executives = members.filter((member) => member.category === "executive")
  const fallbackCto = fallbackTeamMembers.find((member) => member.category === "cto")
  const cto = members.find((member) => member.name.toLowerCase() === "abdulrahman dauda") || fallbackCto
  const team = members.filter((member) => member.category !== "executive" && member.name.toLowerCase() !== "abdulrahman dauda").map((member) => member.name.toLowerCase() === "hashim h hashim" ? { ...member, category: "team", role: "Special Assistant to the Executive Governor of Jigawa State on ICT II" } : member)

  return (
    <div className="bg-white" id="leadership">
      <section className="relative overflow-hidden border-y border-emerald-900/10 bg-emerald-950 text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${jigawaFlag.src})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "420px" }} />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-50">
              <ShieldCheck className="h-4 w-4" />
              Government leadership
            </div>
            <div className="space-y-4">
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Leadership for Jigawa State ICT and Digital Economy</h2>
              <p className="max-w-2xl text-base leading-7 text-emerald-50/85 sm:text-lg">Coordinating policy, platforms, capacity building, and technology delivery for a modern, transparent, and citizen-centered Jigawa State Government.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {executives.map((executive) => (
                <Link href={memberHref(executive)} key={executive.name} className="group flex h-full items-center gap-4 rounded-lg border border-white/10 bg-white/[0.06] p-4 transition hover:border-white/30 hover:bg-white/[0.1]">
                  <ProfileImage src={executive.imageUrl} alt={executive.name} className="h-24 w-24 flex-none rounded-full border-4 border-white/20 bg-white object-cover" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-emerald-100">{executive.role}</p>
                    <h3 className="mt-1 text-lg font-bold leading-tight text-white">{executive.name}</h3>
                    <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-emerald-100 group-hover:text-white">View details <ExternalLink className="h-3 w-3" /></p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20">
              <Quote className="h-8 w-8 text-emerald-200" />
              <p className="mt-5 text-lg leading-8 text-emerald-50">That we would collaborate with the National Information Technology Development Agency (NITDA) to implement the State ICT Master Plan, promote e-governance, and the gradual emergence of the digital economy.</p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-emerald-200">Digital transformation mandate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Delivery team</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Meet the ICT and Digital Economy Team</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">A focused public-sector technology team supporting strategy, implementation, partnerships, and service modernization across Jigawa State.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Link href={memberHref(member)} key={member.name} className="group rounded-lg border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-emerald-700/30 hover:shadow-md">
                <ProfileImage src={member.imageUrl} alt={member.name} className="mx-auto h-36 w-36 rounded-full border-4 border-emerald-100 object-cover object-top" />
                <h3 className="mt-5 text-lg font-bold text-slate-950">{member.name}</h3>
                <p className="mt-2 min-h-16 text-sm leading-6 text-emerald-800">{member.role}</p>
                <p className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-500 group-hover:text-emerald-800">View details <ExternalLink className="h-3 w-3" /></p>
              </Link>
            ))}
          </div>

          {cto ? (
            <Link href={memberHref(cto)} className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-lg border border-emerald-900/10 bg-slate-50 p-5 text-center shadow-sm transition hover:border-emerald-700/30 hover:bg-white sm:flex-row sm:text-left">
              <ProfileImage src={cto.imageUrl} alt={cto.name} className="h-20 w-20 flex-none rounded-full border-4 border-white object-cover object-top shadow-sm" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Chief Technology Officer</p>
                <h3 className="mt-1 text-xl font-bold text-slate-950">{cto.name}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{cto.role}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald-800">View details <ExternalLink className="h-3 w-3" /></span>
            </Link>
          ) : null}
        </div>
      </section>
    </div>
  )
}

export default Team


