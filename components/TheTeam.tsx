import { fallbackTeamMembers } from "@/lib/site-content"

export const TheTeam = () => {
  const visibleMembers = fallbackTeamMembers.filter((member) => member.category !== "executive")

  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">JICTDE Team</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">ICT and Digital Economy Leadership</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {visibleMembers.map((member) => (
            <div key={member.name} className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-center">
              <p className="font-bold text-slate-950">{member.name}</p>
              <p className="mt-2 text-sm leading-6 text-emerald-800">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
