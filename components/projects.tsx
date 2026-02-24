const projectsData = [
  {
    title: 'Paradiso API',
    description: 'A comprehensive backend API for managing complex business operations and integrations.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'REST API'],
    github: 'https://github.com/splitcentre/paradiso-api',
  },
  {
    title: 'Warasify Backend',
    description: 'Robust backend service powering the Warasify platform with scalable architecture.',
    tech: ['Node.js', 'PostgreSQL', 'Authentication', 'API'],
    github: 'https://github.com/iwpsl/backend',
  },
]

interface ProjectsProps {
  isVisible: boolean
}

export function Projects({ isVisible }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="py-32 px-4 sm:px-6 lg:px-8 transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0.3 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-foreground mb-20 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, idx) => (
            <a
              key={idx}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition-all hover:shadow-lg group hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-accent transition-colors flex-1">
                  {project.title}
                </h3>
                <div className="w-10 h-10 bg-accent/20 rounded flex items-center justify-center border border-accent/30 group-hover:bg-accent/30 transition-colors flex-shrink-0 ml-4">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 6l6 6m0 0l-6 6m6-6H7" />
                  </svg>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded border border-accent/20 group-hover:bg-accent/20 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border/50">
                <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors">View on GitHub →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
