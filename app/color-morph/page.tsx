"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

const gradientThemes = {
  dark: "bg-gradient-to-br from-gray-900 via-black to-gray-800",
  blue: "bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900",
  purple: "bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900",
  green: "bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900",
  orange: "bg-gradient-to-br from-orange-900 via-red-800 to-pink-900",
  teal: "bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900",
}

const colorButtons = [
  { name: "dark", color: "bg-gray-800", label: "Dark" },
  { name: "blue", color: "bg-blue-600", label: "Blue" },
  { name: "purple", color: "bg-purple-600", label: "Purple" },
  { name: "green", color: "bg-emerald-600", label: "Green" },
  { name: "orange", color: "bg-orange-600", label: "Orange" },
  { name: "teal", color: "bg-teal-600", label: "Teal" },
]

export default function Component() {
  const [currentTheme, setCurrentTheme] = useState<keyof typeof gradientThemes>("dark")

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className={`absolute inset-0 ${gradientThemes[currentTheme]}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen text-white">
        {/* Header */}
        <header className="flex items-center justify-between p-6 md:p-8">
          <div className="text-2xl font-bold">NovaSpark</div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium hover:text-gray-300 transition-colors">
              WORKS
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-gray-300 transition-colors">
              LAB
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-gray-300 transition-colors">
              TEAM
            </Link>
          </nav>

          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            Get in Touch
          </Button>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col justify-center px-6 md:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-sm font-medium tracking-wide">Creative Solutions for Visionary Brands</p>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    Impactful Design.<br />
                    Memorable Stories.
                  </h1>
                </div>

                <div className="border-l-2 border-white/30 pl-6 max-w-md">
                  <p className="text-sm leading-relaxed text-gray-200">
                    We believe design is a language. Our mission is to help you tell your story in a way that inspires and connects with your audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Color Theme Selector */}
        <div className="flex justify-center pb-8">
          <div className="flex space-x-4 bg-black/20 backdrop-blur-sm rounded-full p-3">
            {colorButtons.map((theme) => (
              <button
                key={theme.name}
                onClick={() => setCurrentTheme(theme.name as keyof typeof gradientThemes)}
                className={`w-8 h-8 rounded-full ${theme.color} transition-all duration-300 hover:scale-110 ${
                  currentTheme === theme.name
                    ? "ring-2 ring-white ring-offset-2 ring-offset-transparent scale-110"
                    : "hover:ring-1 hover:ring-white/50"
                }`}
                title={theme.label}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
