"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronLeftIcon, ChevronRightIcon, Landmark, ShieldCheck } from "lucide-react"
import jictde from "@/app/assets/images/jictde.png"
import homeBanner from "@/app/assets/images/banner.png"
import Image from "next/image"
import Link from "next/link"

const headlines = [
  {
    title: "Jigawa State ICT and Digital Economy",
    subtitle: "Building trusted digital public services, modern infrastructure, and inclusive technology-driven growth for Jigawa State.",
  },
  {
    title: "One Government, Connected Services",
    subtitle: "Improving transparency, accountability, and service delivery through secure platforms and shared government systems.",
  },
  {
    title: "Digital Skills for Public Value",
    subtitle: "Equipping institutions, public servants, young people, and communities with the tools to participate in the digital economy.",
  },
]

export default function TextBannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length)
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + headlines.length) % headlines.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(goToNext, 8000)
    return () => clearInterval(timer)
  }, [goToNext])

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(2, 44, 34, 0.96) 0%, rgba(2, 44, 34, 0.82) 45%, rgba(2, 44, 34, 0.25) 100%), url(${homeBanner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative mt-16 flex min-h-[calc(100vh-4rem)] w-full items-center overflow-hidden text-white"
    >
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_0.55fr] lg:px-8">
        <div className="max-w-4xl space-y-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-50">
              <Landmark className="h-4 w-4" />
              Official Government Portal
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-50">
              <ShieldCheck className="h-4 w-4" />
              JICTDE
            </span>
          </div>

          <Image src={jictde} alt="Jigawa State ICT and Digital Economy" className="h-20 w-auto rounded-md bg-white/95 p-3 object-contain shadow-sm sm:h-24" priority />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              className="space-y-5"
            >
              <motion.h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl" layoutId="headline-title">
                {headlines[currentIndex].title}
              </motion.h1>
              <motion.p className="max-w-2xl text-lg leading-8 text-emerald-50/90 sm:text-xl" layoutId="headline-subtitle">
                {headlines[currentIndex].subtitle}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/about-us" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-bold text-emerald-950 transition hover:bg-emerald-50">
              Learn About JICTDE <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/oneapi" className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              Explore OneAPI
            </Link>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <button onClick={goToPrevious} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20" aria-label="Previous headline">
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button onClick={goToNext} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20" aria-label="Next headline">
              <ChevronRightIcon className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {headlines.map((headline, index) => (
                <button key={headline.title} aria-label={`Show slide ${index + 1}`} onClick={() => setCurrentIndex(index)} className={`h-2.5 rounded-full transition-all ${index === currentIndex ? "w-8 bg-white" : "w-2.5 bg-white/35 hover:bg-white/60"}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden items-end justify-end lg:flex">
          <div className="mb-6 max-w-xs rounded-lg border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-100">Digital mandate</p>
            <p className="mt-3 text-sm leading-6 text-emerald-50/85">ICT policy, digital platforms, service modernization, data systems, innovation, and skills development for Jigawa State.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
