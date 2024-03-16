import 'server-only'

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
