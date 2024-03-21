'use client' // Client Componentであることを宣言

import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import ProjectList from './projectList'

interface Project {
  id: string
  thumbnail: { url: string }
  title: string
  body: string
}

interface PaginatedProjectsProps {
  projects: Project[]
}

const PaginatedProjects: React.FC<PaginatedProjectsProps> = ({ projects }) => {
  const [start, setStart] = useState(0)
  const perPage = 5

  const pageChange = (data: { selected: number }) => {
    const pageNumber = data['selected']
    setStart(pageNumber * perPage)
  }

  const pageCount = Math.ceil(projects.length / perPage)

  return (
    <>
      <ProjectList projects={projects.slice(start, start + perPage)} />
      <ReactPaginate
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={pageChange}
        // その他のReactPaginateのプロパティ
      />
    </>
  )
}

export default PaginatedProjects
