'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TechStack } from '@/components/tech-stack'
import { Projects } from '@/components/projects'
import { Footer } from '@/components/footer'
import { useScrollVisibility } from '@/hooks/use-scroll-visibility'

const SECTION_IDS = ['home', 'tech', 'projects']

export default function Home() {
  const { visibleSections, activeNav } = useScrollVisibility(SECTION_IDS)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar activeNav={activeNav} onNavClick={scrollToSection} />
      <Hero isVisible={visibleSections['home'] || false} />
      <TechStack isVisible={visibleSections['tech'] || false} />
      <Projects isVisible={visibleSections['projects'] || false} />
      <Footer />
    </div>
  )
}
