interface HeroProps {
  isVisible: boolean
}

export function Hero({ isVisible }: HeroProps) {
  return (
    <section
      id="home"
      className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0.3 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight">
                Raihan Alfian Pratama
              </h2>
              <p className="text-xl text-accent font-semibold">Backend Developer & API Specialist</p>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I build robust, scalable APIs and backend systems using modern technologies. Specialized in
              designing efficient database architectures and creating high-performance REST APIs.
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center border-2 border-accent/30">
              <img
                src="/hero-bg.jpg?height=320&width=320"
                alt="Raihan Alfian Pratama"
                className="w-72 h-72 rounded-full object-cover border-4 border-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
