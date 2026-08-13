import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ArrowUpRight, Building2 } from "lucide-react"
import "../styles.css"
import { ministries } from "@/lib/exports"
import Team from "../components/Team"
import TextBannerSlider from "../components/home-text-slider"
import SiteSections from "../components/SiteSections"

interface Card {
  id: number
  url: string
  name: string
  image: StaticImageData
}

export default function Home() {
  return (
    <main className="flex w-full flex-col bg-white">
      <TextBannerSlider />
      <SiteSections />
      <Team />

      <section className="bg-slate-50 py-16 sm:py-20" id="mda-services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Connected government</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Jigawa State MDA Digital Services</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">Ministries, departments, and agencies are being onboarded into a shared digital ecosystem for faster service delivery, better reporting, and improved accountability.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="inline-flex items-center justify-center rounded-md border border-emerald-700 px-5 py-3 text-sm font-bold text-emerald-800 transition hover:bg-emerald-50" href="/oneapi">
                OneAPI Documentation
              </Link>
              <Link href="https://oneapi.api.jg.gov.ng" className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800" target="_blank">
                Get Started <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ministries.map((item: Card) => {
              const isEnabled = item.url && item.url !== "#"
              const card = (
                <div className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-700/30 hover:shadow-md">
                  <div className="flex h-28 items-center justify-center rounded-md bg-slate-50 p-4">
                    <Image width={1000} height={1000} className="h-20 w-20 object-contain" src={item.image} alt={item.name} />
                  </div>
                  <div className="mt-5 flex flex-1 flex-col">
                    <h3 className="text-base font-bold leading-6 text-slate-950">{item.name}</h3>
                    <p className="mt-2 text-sm text-slate-500">Jigawa State Government</p>
                    <span className="mt-5 inline-flex items-center text-sm font-bold text-emerald-800">
                      {isEnabled ? "Visit service" : "Service onboarding"}
                      {isEnabled ? <ArrowUpRight className="ml-1 h-4 w-4" /> : <Building2 className="ml-1 h-4 w-4" />}
                    </span>
                  </div>
                </div>
              )

              return isEnabled ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer" key={item.id}>
                  {card}
                </a>
              ) : (
                <div key={item.id}>{card}</div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
