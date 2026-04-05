"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"

// Navigation header with mobile hamburger menu
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#problem", label: "Problem" },
    { href: "#personas", label: "Who We Help" },
    { href: "#solution", label: "Solution" },
    { href: "#features", label: "Features" },
    { href: "#architecture", label: "How It Works" },
    { href: "#tech-stack", label: "Tech Stack" },
    { href: "#roadmap", label: "Roadmap" },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Wifi className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">EduReach</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
