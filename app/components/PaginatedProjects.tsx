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
  const perPage = 4

  const pageChange = (data: { selected: number }) => {
    const pageNumber = data.selected
    setStart(pageNumber * perPage)
  }

  const pageCount = Math.ceil(projects.length / perPage)

  return (
    <div className="bg-white mx-20 my-10 py-2 rounded-lg flex flex-col">
      <div className="container flex-grow">
        <ProjectList projects={projects.slice(start, start + perPage)} />
      </div>
      <div className="flex justify-center items-center py-8">
        <ReactPaginate
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={pageChange}
          containerClassName="inline-flex space-x-2"
          pageClassName="mx-2"
          pageLinkClassName="px-3 py-2 border-zinc-400 text-zinc-400 hover:bg-zinc-400 hover:text-black focus:outline-none"
          activeClassName="border-b-2 border-zinc-400"
          previousLabel="PREV"
          nextLabel="NEXT"
          previousClassName="mx-2"
          nextClassName="mx-2"
          previousLinkClassName="px-3 py-2 text-zinc-400 hover:bg-zinc-400 hover:text-black focus:outline-none rounded-lg"
          nextLinkClassName="px-3 py-2 text-zinc-400 hover:bg-zinc-400 hover:text-black focus:outline-none rounded-lg"
          disabledClassName="opacity-50 cursor-not-allowed"
          breakLabel="..."
          breakClassName="mx-2"
          breakLinkClassName="px-3 py-2 border border-white text-white hover:bg-white hover:text-black focus:outline-none"
        />
      </div>
    </div>
  )
}

export default PaginatedProjects
