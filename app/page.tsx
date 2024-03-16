import parse from 'html-react-parser'
import { fetchProfileData, fetchProjectsData } from './fetchdata.sever'

interface Project {
  id: string
  thumbnail: { url: string }
  title: string
  body: string
}

export default async function Home() {
  const profileData = await fetchProfileData()
  {
    console.log(profileData)
  }

  const projectsData = await fetchProjectsData()
  {
    console.log(projectsData)
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
        {projectsData.contents.map((project: Project) => (
          <div key={project.id} className="m-3">
            <img
              src={project.thumbnail.url}
              className="rounded-lg"
              width="300"
              height="200"
            />
            <div className="font-normal text-[#29261b] text-xl font-serif m-3 ">
              {project.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
