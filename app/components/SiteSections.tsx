import Link from "next/link"
import { BarChart3, Cpu, Globe2, Landmark, Network, ShieldCheck, Smartphone } from "lucide-react"
import { getPublishedSiteSections } from "@/actions/site-sections"
import { fallbackSiteSections, PublicSiteSection } from "@/lib/site-content"

const cardIcons = [Globe2, Cpu, Smartphone, ShieldCheck, Network, Landmark]

const getSections = async () => {
  const records = await getPublishedSiteSections()
  return records.length ? (records as PublicSiteSection[]) : fallbackSiteSections
}

const parseRows = (body?: string | null) => {
  return (body || "")
    .split("\n")
    .map((row) => row.trim())
    .filter(Boolean)
    .map((row) => {
      const [heading, ...rest] = row.split("|")
      return {
        heading: heading?.trim() || "",
        text: rest.join("|").trim(),
      }
    })
}

const SectionHeader = ({ section, align = "center" }: { section: PublicSiteSection; align?: "center" | "left" }) => (
  <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
    {section.eyebrow ? <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">{section.eyebrow}</p> : null}
    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{section.title}</h2>
    {section.subtitle ? <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{section.subtitle}</p> : null}
  </div>
)

const CardsSection = ({ section }: { section: PublicSiteSection }) => {
  const rows = parseRows(section.body)

  return (
    <section className="bg-white py-16 sm:py-20" id={section.key}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader section={section} />
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {rows.map((item, index) => {
            const Icon = cardIcons[index % cardIcons.length]
            return (
              <article key={`${section.key}-${item.heading}`} className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-700/30 hover:bg-white hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-700 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{item.heading}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const StatsSection = ({ section }: { section: PublicSiteSection }) => {
  const rows = parseRows(section.body)

  return (
    <section className="border-y border-emerald-900/10 bg-emerald-950 py-16 text-white sm:py-20" id={section.key}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            {section.eyebrow ? <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">{section.eyebrow}</p> : null}
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{section.title}</h2>
            {section.subtitle ? <p className="mt-4 text-base leading-7 text-emerald-50/80">{section.subtitle}</p> : null}
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {rows.map((item) => (
              <div key={item.heading} className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
                <BarChart3 className="h-7 w-7 text-emerald-200" />
                <p className="mt-4 text-4xl font-bold tracking-tight">{item.heading}</p>
                <p className="mt-2 text-sm leading-6 text-emerald-50/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const FeatureSection = ({ section, index }: { section: PublicSiteSection; index: number }) => (
  <section className={index % 2 === 0 ? "bg-slate-50 py-16 sm:py-20" : "bg-white py-16 sm:py-20"} id={section.key}>
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:items-center">
      <div className="rounded-lg border border-emerald-900/10 bg-white p-6 shadow-sm">
        <div className="flex h-14 w-14 items-center justify-center rounded-md bg-emerald-700 text-white">
          <Landmark className="h-7 w-7" />
        </div>
        <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">{section.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{section.title}</h2>
      </div>
      <div className="space-y-5">
        {section.subtitle ? <p className="text-xl font-semibold leading-8 text-slate-800">{section.subtitle}</p> : null}
        {section.body ? <p className="text-base leading-7 text-slate-600">{section.body}</p> : null}
        {section.ctaLabel && section.ctaUrl ? (
          <Link href={section.ctaUrl} className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800">
            {section.ctaLabel}
          </Link>
        ) : null}
      </div>
    </div>
  </section>
)

const GenericSection = ({ section }: { section: PublicSiteSection }) => (
  <section className="bg-white py-16 sm:py-20" id={section.key}>
    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
      <SectionHeader section={section} />
      {section.body ? <p className="mt-6 text-base leading-7 text-slate-600">{section.body}</p> : null}
      {section.ctaLabel && section.ctaUrl ? (
        <Link href={section.ctaUrl} className="mt-8 inline-flex items-center justify-center rounded-md bg-emerald-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800">
          {section.ctaLabel}
        </Link>
      ) : null}
    </div>
  </section>
)

export default async function SiteSections() {
  const sections = await getSections()

  return (
    <>
      {sections.map((section, index) => {
        if (section.sectionType === "cards") return <CardsSection key={section.key} section={section} />
        if (section.sectionType === "stats") return <StatsSection key={section.key} section={section} />
        if (section.sectionType === "feature") return <FeatureSection key={section.key} section={section} index={index} />
        return <GenericSection key={section.key} section={section} />
      })}
    </>
  )
}
