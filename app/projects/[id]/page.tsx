import { fetchProjectsData } from '@/app/fetchdata.server'
import perse from 'html-react-parser'

interface Project {
  id: string
  thumbnail: { url: string }
  title: string
  body: string
}

export async function getStaticPaths(): Promise<{
  paths: string[]
  fallback: boolean
}> {
  const data = await fetchProjectsData()
  const paths = data.contents.map((project: Project) => ({
    params: { id: project.id },
  }))

  return { paths, fallback: false }
}

export default async function projectsId({
  params,
}: {
  params: { id: string }
}) {
  const data = await fetchProjectsData()
  const project = data.contents.find(
    (project: Project) => project.id === params.id,
  )

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div>
      <div>
        <img src={project.thumbnail.url} alt={project.title} />
        <h2>{project.title}</h2>
        {perse(project.body)}
      </div>
    </div>
  )
}
