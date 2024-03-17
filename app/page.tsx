import parse from 'html-react-parser'
import Link from 'next/link'
import { fetchProfileData, fetchProjectsDataHome } from './fetchdata.server'

interface Project {
  id: string
  thumbnail: { url: string }
  title: string
  body: string
}

export default async function Home() {
  const profileData = await fetchProfileData()
  {
  }

  const projectsDataHome = await fetchProjectsDataHome()
  {
  }

  return (
    <div>
      <div className="text-center mb-10">
        <img
          src={profileData.icon.url}
          className="mx-auto size-52 rounded-full border-8 "
        />
        <div className="font-normal text-[#29261b] text-2xl font-serif m-3 ">
          {profileData.name}
        </div>
        <div className="font-normal text-[#6E57FF] hover:text-[#6E57FF] text-base font-serif">
          {parse(profileData.body)}
        </div>
      </div>
      <div className="bg-white border border-slate-100 flex flex-wrap justify-center">
        {projectsDataHome.contents.map((project: Project) => (
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
    </div>
  )
}
