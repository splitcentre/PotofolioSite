'use client'

import { useState, useEffect } from 'react'

interface NavbarProps {
  activeNav: string
  onNavClick: (sectionId: string) => void
}

export function Navbar({ activeNav, onNavClick }: NavbarProps) {
  return (
    <nav
      className="fixed top-0 w-full z-50 bg-background transition-all duration-300 m-4"
      style={{
        border: '1px dashed oklch(0.5 0 0)',
        maxWidth: 'calc(100% - 2rem)',
        left: '1rem',
        width: 'auto',
        right: '1rem',
      }}
    >
      <div className="px-6 sm:px-8 lg:px-10 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-serif font-bold text-foreground">Splitcentre</h1>
        <div className="hidden md:flex gap-8">
          {[
            { id: 'tech', label: 'Tech Stack' },
            { id: 'projects', label: 'Projects' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className={`text-sm font-medium transition-colors ${
                activeNav === item.id
                  ? 'text-foreground font-semibold'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
