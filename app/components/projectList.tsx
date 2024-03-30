import Link from 'next/link'

interface Project {
  id: string
  thumbnail: { url: string }
  title: string
  body: string
}

interface ProjectListProps {
  projects: Project[]
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-4">
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Link href={`/projects/${project.id}`}>
              <img
                alt={project.title}
                src={project.thumbnail.url}
                className="w-full h-48 object-cover"
                width="300"
                height="200"
              />
              <div className="p-4">
                <div className="font-normal text-xl font-serif">
                  {project.title}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
