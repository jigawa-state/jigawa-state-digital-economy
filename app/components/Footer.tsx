import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import logo from "@/app/assets/images/gigital-economy-logo.jpg"

const quickLinks = [
  { label: "About", href: "/about-us" },
  { label: "OneAPI", href: "/oneapi" },
  { label: "Policies", href: "/policies" },
  { label: "Progress Report", href: "/progress-report" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
]

export const Footer = () => {
  return (
    <footer className="border-t border-emerald-900/10 bg-emerald-950 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image src={logo} alt="Jigawa State ICT and Digital Economy" className="h-16 w-auto rounded-full bg-white object-contain p-1" />
            <div>
              <p className="text-lg font-bold leading-tight">Jigawa State ICT and Digital Economy</p>
              <p className="text-sm text-emerald-100">Official Government Digital Service Portal</p>
            </div>
          </div>
          <p className="mt-6 max-w-xl text-sm leading-7 text-emerald-50/80">Advancing Jigawa State's digital transformation through ICT policy, secure platforms, service digitization, data systems, innovation, and inclusive digital skills.</p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">Portal Links</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-emerald-50/80 transition hover:text-white hover:underline">{link.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">Contact</h2>
          <div className="mt-5 space-y-4 text-sm text-emerald-50/80">
            <p className="flex gap-3"><MapPin className="h-5 w-5 flex-none text-emerald-200" /> Dutse, Jigawa State, Nigeria</p>
            <p className="flex gap-3"><Mail className="h-5 w-5 flex-none text-emerald-200" /> Official correspondence desk</p>
            <p className="flex gap-3"><Phone className="h-5 w-5 flex-none text-emerald-200" /> Jigawa State Government</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-emerald-50/70">
        Powered by the ICT and Digital Economy Office, Jigawa State Government.
      </div>
    </footer>
  )
}

