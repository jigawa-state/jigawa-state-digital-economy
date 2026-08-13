import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import jigawaLogo from "@/app/assets/images/gigital-economy-logo.jpg"
import { auth } from "@/auth"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet"
import { NavComponents } from "./NavComponents"

const navigations = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about-us" },
  { name: "Activities", url: "/activities" },
  { name: "OneAPI", url: "/oneapi" },
  { name: "Policies", url: "/policies" },
  { name: "News", url: "/news" },
  { name: "Progress Report", url: "/progress-report" },
  { name: "Gallery", url: "/gallery" },
  { name: "Impact", url: "/impact" },
  { name: "KPIs", url: "/kpi" },
]

const Topnav = async () => {
  const session = await auth()

  return (
    <header className="fixed top-0 z-40 w-full border-b border-emerald-900/10 bg-white/95 px-4 py-3 shadow-sm backdrop-blur dark:text-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src={jigawaLogo} alt="Jigawa State ICT and Digital Economy" className="h-12 w-auto rounded-full object-contain" width={700} height={700} priority />
          <span className="hidden max-w-48 text-sm font-bold leading-tight text-emerald-950 sm:block">Jigawa State ICT and Digital Economy</span>
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          <NavComponents />
          {session ? (
            <Link href="/user/home" className="rounded-md bg-emerald-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-800">Dashboard</Link>
          ) : (
            <Link href="/login" className="rounded-md bg-emerald-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-800">Admin Login</Link>
          )}
        </div>

        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-emerald-900/15 text-emerald-950" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader className="items-start">
                <Link href="/" className="flex items-center gap-3">
                  <Image src={jigawaLogo} alt="Jigawa State ICT and Digital Economy" className="h-12 w-auto rounded-full object-contain" width={700} height={700} />
                  <span className="text-left text-sm font-bold leading-tight text-emerald-950">Jigawa State ICT and Digital Economy</span>
                </Link>
                <nav className="mt-6 flex w-full flex-col items-start gap-1">
                  {navigations.map((nav) => (
                    <SheetTrigger asChild key={nav.url}>
                      <Link href={nav.url} className="w-full rounded-md px-3 py-2 text-left font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-900">{nav.name}</Link>
                    </SheetTrigger>
                  ))}
                  <SheetTrigger asChild>
                    <Link href={session ? "/user/home" : "/login"} className="mt-3 w-full rounded-md bg-emerald-700 px-3 py-2 text-center font-bold text-white hover:bg-emerald-800">{session ? "Dashboard" : "Admin Login"}</Link>
                  </SheetTrigger>
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Topnav
