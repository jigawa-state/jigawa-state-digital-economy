export const dynamic = "force-dynamic"

import { getAllSiteSections } from "@/actions/site-sections"
import { SiteSectionsActionArea } from "./_components/SiteSectionsActionArea"
import { PublicSiteSection } from "@/lib/site-content"

const SiteSectionsPage = async () => {
  const sections = (await getAllSiteSections()) as PublicSiteSection[]

  return (
    <div className="flex bg-white dark:bg-dark-bg">
      <SiteSectionsActionArea sections={sections} />
    </div>
  )
}

export default SiteSectionsPage
