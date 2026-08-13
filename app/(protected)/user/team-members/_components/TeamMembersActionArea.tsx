"use client"

import { FormEvent, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Edit, Plus, Search, Sparkles, Trash2, UserRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { createTeamMember, deleteTeamMember, seedDefaultTeamMembers, updateTeamMember } from "@/actions/team-members"
import { PublicTeamMember } from "@/lib/site-content"

type TeamForm = {
  name: string
  role: string
  category: string
  bio?: string | null
  imageUrl?: string | null
  profileUrl?: string | null
  facebookUrl?: string | null
  twitterUrl?: string | null
  linkedinUrl?: string | null
  sortOrder: number
  published: boolean
}

const emptyMember: TeamForm = {
  name: "",
  role: "",
  category: "team",
  bio: "",
  imageUrl: "",
  profileUrl: "",
  facebookUrl: "",
  twitterUrl: "",
  linkedinUrl: "",
  sortOrder: 0,
  published: true,
}

export function TeamMembersActionArea({ members }: { members: PublicTeamMember[] }) {
  const [items, setItems] = useState<PublicTeamMember[]>(members)
  const [searchTerm, setSearchTerm] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editing, setEditing] = useState<PublicTeamMember | null>(null)
  const [form, setForm] = useState<TeamForm>(emptyMember)
  const [isPending, setIsPending] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const filteredMembers = useMemo(() => {
    return items.filter((item) => {
      const haystack = `${item.name} ${item.role} ${item.category}`.toLowerCase()
      return haystack.includes(searchTerm.toLowerCase())
    })
  }, [items, searchTerm])

  const openCreate = () => {
    setEditing(null)
    setForm(emptyMember)
    setIsDialogOpen(true)
  }

  const openEdit = (member: PublicTeamMember) => {
    setEditing(member)
    setForm({
      name: member.name,
      role: member.role,
      category: member.category,
      bio: member.bio || "",
      imageUrl: typeof member.imageUrl === "string" ? member.imageUrl : "",
      profileUrl: member.profileUrl || "",
      facebookUrl: member.facebookUrl || "",
      twitterUrl: member.twitterUrl || "",
      linkedinUrl: member.linkedinUrl || "",
      sortOrder: member.sortOrder,
      published: member.published,
    })
    setIsDialogOpen(true)
  }

  const updateField = (field: keyof TeamForm, value: string | number | boolean) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsPending(true)

    try {
      const result = editing?.id ? await updateTeamMember(editing.id, form) : await createTeamMember(form)

      if (result?.error) {
        toast({ title: "Unable to save profile", description: result.error, variant: "destructive" })
        return
      }

      const saved = result.teamMember as PublicTeamMember
      setItems((current) => {
        const next = editing?.id ? current.map((item) => (item.id === editing.id ? saved : item)) : [...current, saved]
        return next.sort((a, b) => a.sortOrder - b.sortOrder)
      })
      toast({ title: editing ? "Profile updated" : "Profile created", description: "The public leadership section has been refreshed." })
      setIsDialogOpen(false)
      router.refresh()
    } catch (error) {
      console.error(error)
      toast({ title: "Unable to save profile", description: "Please check the form and try again.", variant: "destructive" })
    } finally {
      setIsPending(false)
    }
  }

  const handleDelete = async (member: PublicTeamMember) => {
    if (!member.id || !window.confirm(`Delete ${member.name}?`)) return

    await deleteTeamMember(member.id)
    setItems((current) => current.filter((item) => item.id !== member.id))
    toast({ title: "Profile deleted", description: "The profile was removed from the website." })
    router.refresh()
  }

  const handleSeed = async () => {
    setIsPending(true)
    try {
      const result = await seedDefaultTeamMembers()
      setItems((result.teamMembers as PublicTeamMember[]).sort((a, b) => a.sortOrder - b.sortOrder))
      toast({ title: "Default profiles ready", description: "You can now edit the leadership, CTO, and team profiles." })
      router.refresh()
    } catch (error) {
      console.error(error)
      toast({ title: "Unable to seed profiles", description: "Please check the database connection and try again.", variant: "destructive" })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <div className="flex h-[calc(100vh-5vh)] w-full flex-col bg-slate-50 dark:bg-dark-bg">
      <div className="border-b bg-white px-6 py-5 shadow-sm dark:bg-dark-bg">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xl font-bold text-slate-950 dark:text-white">Team, Leadership & CTO</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">Manage executives, the CTO profile, and public-facing delivery team members.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button disabled={isPending} variant="outline" onClick={handleSeed} className="gap-2">
              <Sparkles className="h-4 w-4" /> Seed Defaults
            </Button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={openCreate} className="gap-2 bg-emerald-700 text-white hover:bg-emerald-800">
                  <Plus className="h-4 w-4" /> Add Profile
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
                <DialogHeader>
                  <DialogTitle>{editing ? "Edit Profile" : "Add Profile"}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" value={form.name} onChange={(event) => updateField("name", event.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <select id="category" value={form.category} onChange={(event) => updateField("category", event.target.value)} className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm">
                      <option value="executive">Executive</option>
                      <option value="cto">CTO</option>
                      <option value="team">Team</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" value={form.role} onChange={(event) => updateField("role", event.target.value)} required />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" className="min-h-28" value={form.bio || ""} onChange={(event) => updateField("bio", event.target.value)} />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="imageUrl">Image URL</Label>
                    <Input id="imageUrl" value={form.imageUrl || ""} onChange={(event) => updateField("imageUrl", event.target.value)} placeholder="https://..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profileUrl">Profile URL</Label>
                    <Input id="profileUrl" value={form.profileUrl || ""} onChange={(event) => updateField("profileUrl", event.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sortOrder">Sort Order</Label>
                    <Input id="sortOrder" type="number" value={form.sortOrder} onChange={(event) => updateField("sortOrder", Number(event.target.value))} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="facebookUrl">Facebook URL</Label>
                    <Input id="facebookUrl" value={form.facebookUrl || ""} onChange={(event) => updateField("facebookUrl", event.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="twitterUrl">X URL</Label>
                    <Input id="twitterUrl" value={form.twitterUrl || ""} onChange={(event) => updateField("twitterUrl", event.target.value)} />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
                    <Input id="linkedinUrl" value={form.linkedinUrl || ""} onChange={(event) => updateField("linkedinUrl", event.target.value)} />
                  </div>
                  <label className="flex items-center gap-2 text-sm font-medium">
                    <input type="checkbox" checked={form.published} onChange={(event) => updateField("published", event.target.checked)} /> Published
                  </label>
                  <div className="flex justify-end gap-3 md:col-span-2">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                    <Button type="submit" disabled={isPending} className="bg-emerald-700 text-white hover:bg-emerald-800">{isPending ? "Saving..." : "Save Profile"}</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="mt-5 flex max-w-md items-center gap-2 rounded-md border bg-white px-3 dark:bg-black/30">
          <Search className="h-4 w-4 text-slate-400" />
          <Input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search profiles" className="border-0 shadow-none focus-visible:ring-0" />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredMembers.map((member) => (
            <article key={member.id || member.name} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-black/30">
              <div className="flex items-start gap-4">
                {typeof member.imageUrl === "string" && member.imageUrl ? (
                  <img src={member.imageUrl} alt={member.name} className="h-16 w-16 rounded-full object-cover" />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-800"><UserRound className="h-7 w-7" /></div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase text-emerald-800">{member.category}</span>
                    <span className={member.published ? "text-xs font-semibold text-emerald-700" : "text-xs font-semibold text-slate-400"}>{member.published ? "Published" : "Draft"}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-950 dark:text-white">{member.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{member.role}</p>
                </div>
              </div>
              {member.bio ? <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-500">{member.bio}</p> : null}
              <div className="mt-5 flex gap-3">
                <Button variant="outline" onClick={() => openEdit(member)} className="gap-2"><Edit className="h-4 w-4" /> Edit</Button>
                <Button variant="outline" onClick={() => handleDelete(member)} className="gap-2 text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /> Delete</Button>
              </div>
            </article>
          ))}
          {!filteredMembers.length ? <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">No profiles yet. Seed the defaults or add the CTO and team profiles manually.</div> : null}
        </div>
      </ScrollArea>
    </div>
  )
}


