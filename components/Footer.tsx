import Link from "next/link"

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Activities", href: "/activities" },
  { label: "Policies", href: "/policies" },
]

export const Footer = () => {
  return (
    <footer className="bg-emerald-950 py-8 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold">Jigawa State ICT and Digital Economy</h3>
            <p className="mt-4 text-sm leading-7 text-emerald-50/80">Official digital transformation service portal for Jigawa State Government.</p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">Explore</h4>
            <ul className="mt-4 space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-emerald-50/80 transition hover:text-white hover:underline">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">Government Office</h4>
            <p className="mt-4 text-sm text-emerald-50/80">ICT and Digital Economy Office</p>
            <p className="mt-2 text-sm text-emerald-50/80">Dutse, Jigawa State, Nigeria</p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-emerald-50/70">Powered by the ICT and Digital Economy Office, Jigawa State Government.</div>
      </div>
    </footer>
  )
}
