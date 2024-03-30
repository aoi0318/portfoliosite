import Page from '@/app/projects/page'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import parser from 'rich-editor-to-markdown-parser'
import { fetchProfileData } from './fetchdata.server'

export default async function Home() {
  const profileData = await fetchProfileData()

  // HTMLをマークダウンに変換
  const markdown = parser(profileData.body)

  return (
    <div>
      <div className="text-center mb-10">
        <img
          src={profileData.icon.url}
          alt={profileData.name}
          className="mx-auto size-52 rounded-full border-8 "
        />
        <div className="font-normal text-2xl font-serif m-3 ">
          {profileData.name}
        </div>
        <div className="font-normal text-base font-serif">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>
      </div>
      <Page />
    </div>
  )
}
