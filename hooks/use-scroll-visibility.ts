'use client'

import { useState, useEffect } from 'react'

interface VisibilityState {
  [key: string]: boolean
}

export function useScrollVisibility(sectionIds: string[]) {
  const [visibleSections, setVisibleSections] = useState<VisibilityState>({})
  const [activeNav, setActiveNav] = useState(sectionIds[0] || '')

  useEffect(() => {
    const handleScroll = () => {
      const newVisible: VisibilityState = {}

      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          const isVisible =
            rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2
          newVisible[id] = isVisible
          if (isVisible) setActiveNav(id)
        }
      })
      setVisibleSections(newVisible)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  return { visibleSections, activeNav }
}
