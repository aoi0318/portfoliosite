import { fetchProjectsData } from '@/app/fetchdata.server'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import parser from 'rich-editor-to-markdown-parser'

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

  // HTMLをマークダウンに変換
  const markdown = parser(project.body)

  return (
    <div>
      <div className="mx-20 mt-10 font-normal text-base font-serif ">
        <div className="flex items-center">
          <img
            src={project.thumbnail.url}
            alt={project.title}
            className="mr-3 rounded-t-full"
          />
          <h2 className="text-2xl font-bold">{project.title}</h2>
        </div>
        <div className="bg-white rounded-b-lg text-xl p-5">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
