import 'server-only'

interface Project {
  id: string
  thumbnail: { url: string }
  title: string
  body: string
}

export const fetchProfileData = async () => {
  const res = await fetch('https://1krtwcw7ez.microcms.io/api/v1/profile', {
    headers: {
      'X-API-KEY': process.env.API_KEY || '',
    },
  })
  if (!res.ok) {
    throw new Error('Error fetching data')
  }
  const profileData = await res.json()
  return profileData
}

export const fetchProjectsDataHome = async () => {
  const res = await fetch(
    'https://1krtwcw7ez.microcms.io/api/v1/projects?orders=-completion&limit=4',
    {
      headers: {
        'X-API-KEY': process.env.API_KEY || '',
      },
    },
  )
  if (!res.ok) {
    throw new Error('Error fetching data')
  }
  const projectsDataHome = await res.json()
  return projectsDataHome
}

export const fetchProjectsData = async () => {
  const res = await fetch(
    'https://1krtwcw7ez.microcms.io/api/v1/projects?orders=-completion',
    {
      headers: {
        'X-API-KEY': process.env.API_KEY || '',
      },
    },
  )
  if (!res.ok) {
    throw new Error('Error fetching data')
  }
  const projectsData = await res.json()
  return projectsData
}

export async function getStaticProps({
  params,
}: {
  params: { id: string }
}): Promise<{ project: { project: Project } }> {
  const data = await fetchProjectsData()
  const project = data.contents.find(
    (project: Project) => project.id === params.id,
  )

  return {
    project,
  }
}
