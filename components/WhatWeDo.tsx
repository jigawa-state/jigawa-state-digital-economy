import Link from "next/link"
import { Cpu, Database, GraduationCap, Network } from "lucide-react"

const services = [
  {
    title: "Digital Infrastructure",
    description: "Shared connectivity, platforms, and secure systems for ministries, departments, and agencies.",
    icon: Network,
  },
  {
    title: "E-Government Platforms",
    description: "Service digitization and interoperable systems that improve transparency and public delivery.",
    icon: Cpu,
  },
  {
    title: "Data Systems",
    description: "Reliable data architecture for planning, reporting, performance tracking, and decision support.",
    icon: Database,
  },
  {
    title: "Digital Skills",
    description: "Capacity building for public servants, young people, and communities across Jigawa State.",
    icon: GraduationCap,
  },
]

export const HomeWhatWeDo = () => {
  return (
    <section className="w-full bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">What We Do</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Digital government capabilities for Jigawa State</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">JICTDE supports government institutions with practical technology programmes that improve service delivery and create public value.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-700 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              </article>
            )
          })}
        </div>
        <Link href="/about-us" className="mt-8 inline-flex rounded-md bg-emerald-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800">Learn more</Link>
      </div>
    </section>
  )
}
