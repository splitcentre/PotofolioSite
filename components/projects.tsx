const projectsData = [
  {
    title: 'E-Commerce API',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
  },
  {
    title: 'Real-time Analytics',
    tech: ['Node.js', 'Redis', 'PostgreSQL', 'WebSockets'],
  },
  {
    title: 'Payment Service',
    tech: ['PHP', 'Laravel', 'MySQL', 'Stripe'],
  },
  {
    title: 'User Management',
    tech: ['Node.js', 'PostgreSQL', 'JWT', 'OAuth2'],
  },
  {
    title: 'Notification System',
    tech: ['Node.js', 'RabbitMQ', 'Redis', 'Socket.io'],
  },
  {
    title: 'Data Pipeline',
    tech: ['Node.js', 'PostgreSQL', 'Docker', 'Kafka'],
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
        <h2 className="text-4xl font-serif font-bold text-foreground mb-20 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all hover:shadow-lg group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="w-8 h-8 bg-accent/20 rounded flex items-center justify-center border border-accent/30 group-hover:bg-accent/30 transition-colors">
                  <span className="text-xs text-accent">{'</>'}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded border border-accent/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
