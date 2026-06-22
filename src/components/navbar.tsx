"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon, MessageSquare, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const solutions = [
  { name: "Salons & barbershops", href: "/product", external: false },
  { name: "Cabs & fleets", href: "/contact", external: false },
  { name: "Construction — Neev", href: "https://neev.convoaiservices.com", external: true },
]

const navigation = [
  { name: "Why Us?", href: "/differentiators" },
  { name: "Pricing", href: "/pricing" },
  { name: "Demo", href: "/demo" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Close dropdown on Escape and return focus to trigger (only when dropdown is open)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && solutionsOpen) {
        setSolutionsOpen(false)
        triggerRef.current?.focus()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [solutionsOpen])

  // Reset solutionsOpen when mobile menu opens
  useEffect(() => {
    if (mobileMenuOpen) setSolutionsOpen(false)
  }, [mobileMenuOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3"
          : "py-5"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-opacity duration-300 group-hover:opacity-90">
              <MessageSquare className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-display font-semibold text-foreground">Convo</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Solutions dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onBlur={(e) => {
                if (!dropdownRef.current?.contains(e.relatedTarget as Node)) setSolutionsOpen(false)
              }}
            >
              <button
                type="button"
                ref={triggerRef}
                aria-haspopup="menu"
                aria-expanded={solutionsOpen}
                onClick={() => setSolutionsOpen((prev) => !prev)}
                className={cn(
                  "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  solutionsOpen
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                )}
              >
                Solutions
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    solutionsOpen && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-background border border-border shadow-lg overflow-hidden"
                    role="menu"
                  >
                    {solutions.map((item) => (
                      item.external ? (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          role="menuitem"
                          onClick={() => setSolutionsOpen(false)}
                          className="flex items-center justify-between px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors duration-200"
                        >
                          {item.name}
                          <span className="ml-2 text-xs text-muted-foreground">↗</span>
                        </a>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          role="menuitem"
                          onClick={() => setSolutionsOpen(false)}
                          className={cn(
                            "flex items-center px-4 py-3 text-sm font-medium transition-colors duration-200",
                            pathname === item.href
                              ? "text-primary bg-primary/10"
                              : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                          )}
                        >
                          {item.name}
                        </Link>
                      )
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-lg"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/demo">Watch Demo</Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="/contact">Request Access</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-lg"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 border-b border-border mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3">
              {/* Solutions group */}
              <div>
                <p className="px-4 pb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Solutions
                </p>
                {solutions.map((item) =>
                  item.external ? (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all duration-300"
                    >
                      {item.name}
                      <span className="text-xs text-muted-foreground">↗</span>
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300",
                        pathname === item.href
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>

              {/* Divider */}
              <div className="border-t border-border" />

              {/* Main navigation */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300",
                    pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                  )}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/demo">Watch Demo</Link>
                </Button>
                <Button variant="default" className="w-full" asChild>
                  <Link href="/contact">Request Access</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
