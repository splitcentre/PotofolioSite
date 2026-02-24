import Image from 'next/image'
import StackIcon from 'tech-stack-icons'

const technologies = [
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'JavaScript', icon: 'js' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'PHP', icon: 'php' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'Java', icon: 'java' },
  { name: 'Express.js', icon: 'expressjs' },
  { name: 'Laravel', icon: 'laravel' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Git', icon: 'git' },
  { name: 'Google Cloud', icon: 'gcloud' },
  { name: 'Github', icon: 'github' },
]

interface TechStackProps {
  isVisible: boolean
}

export function TechStack({ isVisible }: TechStackProps) {
  return (
    <section
      id="tech"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0.3 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-foreground mb-16 text-center">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 bg-background rounded-lg border border-border hover:border-foreground/30 transition-all hover:shadow-lg group cursor-pointer"
            >
              <div className="mb-3 group-hover:scale-110 transition-transform w-8 h-8">
                <StackIcon name={tech.icon} />
              </div>
              <span className="text-sm font-medium text-foreground text-center group-hover:text-foreground/70 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
