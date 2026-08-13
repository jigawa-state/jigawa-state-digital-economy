export const dynamic = "force-dynamic"

import { getAllTeamMembers } from "@/actions/team-members"
import { TeamMembersActionArea } from "./_components/TeamMembersActionArea"
import { PublicTeamMember } from "@/lib/site-content"

const TeamMembersPage = async () => {
  const members = (await getAllTeamMembers()) as PublicTeamMember[]

  return (
    <div className="flex bg-white dark:bg-dark-bg">
      <TeamMembersActionArea members={members} />
    </div>
  )
}

export default TeamMembersPage
