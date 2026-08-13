"use client"

import { FormEvent, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Edit, Plus, Search, Sparkles, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { createSiteSection, deleteSiteSection, seedDefaultSiteSections, updateSiteSection } from "@/actions/site-sections"
import { PublicSiteSection } from "@/lib/site-content"

type SectionForm = Omit<PublicSiteSection, "id">

const emptySection: SectionForm = {
  key: "",
  eyebrow: "",
  title: "",
  subtitle: "",
  body: "",
  ctaLabel: "",
  ctaUrl: "",
  imageUrl: "",
  sectionType: "content",
  sortOrder: 0,
  published: true,
}

export function SiteSectionsActionArea({ sections }: { sections: PublicSiteSection[] }) {
  const [items, setItems] = useState<PublicSiteSection[]>(sections)
  const [searchTerm, setSearchTerm] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editing, setEditing] = useState<PublicSiteSection | null>(null)
  const [form, setForm] = useState<SectionForm>(emptySection)
  const [isPending, setIsPending] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const filteredSections = useMemo(() => {
    return items.filter((item) => {
      const haystack = `${item.key} ${item.title} ${item.subtitle || ""} ${item.sectionType}`.toLowerCase()
      return haystack.includes(searchTerm.toLowerCase())
    })
  }, [items, searchTerm])

  const openCreate = () => {
    setEditing(null)
    setForm(emptySection)
    setIsDialogOpen(true)
  }

  const openEdit = (section: PublicSiteSection) => {
    setEditing(section)
    setForm({
      key: section.key,
      eyebrow: section.eyebrow || "",
      title: section.title,
      subtitle: section.subtitle || "",
      body: section.body || "",
      ctaLabel: section.ctaLabel || "",
      ctaUrl: section.ctaUrl || "",
      imageUrl: section.imageUrl || "",
      sectionType: section.sectionType,
      sortOrder: section.sortOrder,
      published: section.published,
    })
    setIsDialogOpen(true)
  }

  const updateField = (field: keyof SectionForm, value: string | number | boolean) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsPending(true)

    try {
      const result = editing?.id ? await updateSiteSection(editing.id, form) : await createSiteSection(form)

      if (result?.error) {
        toast({ title: "Unable to save section", description: result.error, variant: "destructive" })
        return
      }

      const saved = result.siteSection as PublicSiteSection
      setItems((current) => {
        const next = editing?.id ? current.map((item) => (item.id === editing.id ? saved : item)) : [...current, saved]
        return next.sort((a, b) => a.sortOrder - b.sortOrder)
      })
      toast({ title: editing ? "Section updated" : "Section created", description: "The public website content has been refreshed." })
      setIsDialogOpen(false)
      router.refresh()
    } catch (error) {
      console.error(error)
      toast({ title: "Unable to save section", description: "Please check the form and try again.", variant: "destructive" })
    } finally {
      setIsPending(false)
    }
  }

  const handleDelete = async (section: PublicSiteSection) => {
    if (!section.id || !window.confirm(`Delete ${section.title}?`)) return

    await deleteSiteSection(section.id)
    setItems((current) => current.filter((item) => item.id !== section.id))
    toast({ title: "Section deleted", description: "The section was removed from the website." })
    router.refresh()
  }

  const handleSeed = async () => {
    setIsPending(true)
    try {
      const result = await seedDefaultSiteSections()
      setItems((result.siteSections as PublicSiteSection[]).sort((a, b) => a.sortOrder - b.sortOrder))
      toast({ title: "Default sections ready", description: "You can now edit the government-branded default sections." })
      router.refresh()
    } catch (error) {
      console.error(error)
      toast({ title: "Unable to seed sections", description: "Please check the database connection and try again.", variant: "destructive" })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <div className="flex h-[calc(100vh-5vh)] w-full flex-col bg-slate-50 dark:bg-dark-bg">
      <div className="border-b bg-white px-6 py-5 shadow-sm dark:bg-dark-bg">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xl font-bold text-slate-950 dark:text-white">Site Sections</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">Create and update reusable homepage/about content blocks.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button disabled={isPending} variant="outline" onClick={handleSeed} className="gap-2">
              <Sparkles className="h-4 w-4" /> Seed Defaults
            </Button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={openCreate} className="gap-2 bg-emerald-700 text-white hover:bg-emerald-800">
                  <Plus className="h-4 w-4" /> Add Section
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
                <DialogHeader>
                  <DialogTitle>{editing ? "Edit Section" : "Add Section"}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="key">Section Key</Label>
                    <Input id="key" value={form.key} onChange={(event) => updateField("key", event.target.value)} placeholder="initiatives" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sectionType">Section Type</Label>
                    <select id="sectionType" value={form.sectionType} onChange={(event) => updateField("sectionType", event.target.value)} className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm">
                      <option value="content">Content</option>
                      <option value="feature">Feature</option>
                      <option value="cards">Cards</option>
                      <option value="stats">Stats</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eyebrow">Eyebrow</Label>
                    <Input id="eyebrow" value={form.eyebrow || ""} onChange={(event) => updateField("eyebrow", event.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sortOrder">Sort Order</Label>
                    <Input id="sortOrder" type="number" value={form.sortOrder} onChange={(event) => updateField("sortOrder", Number(event.target.value))} />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" value={form.title} onChange={(event) => updateField("title", event.target.value)} required />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="subtitle">Subtitle</Label>
                    <Textarea id="subtitle" value={form.subtitle || ""} onChange={(event) => updateField("subtitle", event.target.value)} />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="body">Body</Label>
                    <Textarea id="body" className="min-h-36" value={form.body || ""} onChange={(event) => updateField("body", event.target.value)} placeholder="For cards/stats, use one item per line: Heading|Description" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ctaLabel">CTA Label</Label>
                    <Input id="ctaLabel" value={form.ctaLabel || ""} onChange={(event) => updateField("ctaLabel", event.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ctaUrl">CTA URL</Label>
                    <Input id="ctaUrl" value={form.ctaUrl || ""} onChange={(event) => updateField("ctaUrl", event.target.value)} />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="imageUrl">Image URL</Label>
                    <Input id="imageUrl" value={form.imageUrl || ""} onChange={(event) => updateField("imageUrl", event.target.value)} />
                  </div>
                  <label className="flex items-center gap-2 text-sm font-medium">
                    <input type="checkbox" checked={form.published} onChange={(event) => updateField("published", event.target.checked)} /> Published
                  </label>
                  <div className="flex justify-end gap-3 md:col-span-2">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                    <Button type="submit" disabled={isPending} className="bg-emerald-700 text-white hover:bg-emerald-800">{isPending ? "Saving..." : "Save Section"}</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="mt-5 flex max-w-md items-center gap-2 rounded-md border bg-white px-3 dark:bg-black/30">
          <Search className="h-4 w-4 text-slate-400" />
          <Input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search sections" className="border-0 shadow-none focus-visible:ring-0" />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="grid gap-4 p-5 lg:grid-cols-2">
          {filteredSections.map((section) => (
            <article key={section.id || section.key} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-black/30">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase text-emerald-800">{section.sectionType}</span>
                    <span className="text-xs text-slate-500">Order {section.sortOrder}</span>
                    <span className={section.published ? "text-xs font-semibold text-emerald-700" : "text-xs font-semibold text-slate-400"}>{section.published ? "Published" : "Draft"}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-950 dark:text-white">{section.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{section.key}</p>
                </div>
              </div>
              {section.subtitle ? <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{section.subtitle}</p> : null}
              <div className="mt-5 flex gap-3">
                <Button variant="outline" onClick={() => openEdit(section)} className="gap-2"><Edit className="h-4 w-4" /> Edit</Button>
                <Button variant="outline" onClick={() => handleDelete(section)} className="gap-2 text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /> Delete</Button>
              </div>
            </article>
          ))}
          {!filteredSections.length ? <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">No site sections yet. Seed the defaults or add a new section.</div> : null}
        </div>
      </ScrollArea>
    </div>
  )
}

