import { fetchProjectsData } from '@/app/fetchdata.server'
import Link from 'next/link'

interface Project {
  id: string
  thumbnail: { url: string }
  title: string
  body: string
}

export default async function page() {
  const projectsData = await fetchProjectsData()
  {
  }

  return (
    <div>
      {projectsData.contents.map((project: Project) => (
        <div key={project.id} className="m-3">
          <Link href={`/projects/${project.id}`}>
            <img
              src={project.thumbnail.url}
              className="rounded-lg"
              width="300"
              height="200"
            />
            <div className="font-normal text-[#29261b] text-xl font-serif m-3 ">
              {project.title}
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}
