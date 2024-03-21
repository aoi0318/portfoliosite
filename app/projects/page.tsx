import PaginatedProjects from '@/app/components/PaginatedProjects'
import { fetchProjectsData } from '@/app/fetchdata.server'

export default async function Page() {
  const projectsData = await fetchProjectsData()

  return (
    <div>
      <PaginatedProjects projects={projectsData.contents} />
    </div>
  )
}
