"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"

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
  const [sliderPosition, setSliderPosition] = useState(0)

  // Auto-animate slider and change colors
  useEffect(() => {
    const themeKeys = Object.keys(gradientThemes) as (keyof typeof gradientThemes)[]
    const totalThemes = themeKeys.length
    const animationDuration = 2000 // 2 seconds per color
    const totalDuration = totalThemes * animationDuration

    const interval = setInterval(() => {
      setSliderPosition((prevPosition) => {
        const newPosition = (prevPosition + 1) % 100
        const themeIndex = Math.floor((newPosition / 100) * totalThemes)
        const themeKey = themeKeys[themeIndex]
        setCurrentTheme(themeKey)
        return newPosition
      })
    }, totalDuration / 100) // Divide by 100 for smooth 100-step animation

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className={`absolute inset-0 ${gradientThemes[currentTheme]} transition-all duration-1000 ease-in-out`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen text-white">
        {/* Header */}
        <header className="flex items-center justify-between p-6 md:p-8">
          <div className="text-2xl font-bold">ColorNest</div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium hover:text-gray-300 transition-colors">
              PALETTES
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-gray-300 transition-colors">
              THEMES
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-gray-300 transition-colors">
              EXPORT
            </Link>
          </nav>

          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            Save Palette
          </Button>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col justify-center px-6 md:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-sm font-medium tracking-wide">Discover Beautiful Color Combinations</p>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    Create. Explore.<br />
                    Color Harmony.
                  </h1>
                </div>

                <div className="border-l-2 border-white/30 pl-6 max-w-md">
                  <p className="text-sm leading-relaxed text-gray-200">
                    Build stunning color palettes for your next project. Our intelligent color system helps you find the perfect combinations that inspire and captivate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Animated Color Slider */}
        <div className="flex justify-center pb-8">
          <div className="w-64 h-2 bg-black/20 backdrop-blur-sm rounded-full relative overflow-hidden">
            {/* Slider Track */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-blue-600 via-purple-600 via-emerald-600 via-orange-600 to-teal-600 rounded-full" />
            
            {/* Animated Slider Thumb */}
            <div 
              className="absolute top-0 w-4 h-4 bg-white rounded-full shadow-lg transform -translate-y-1 transition-all duration-300 ease-out"
              style={{ left: `${sliderPosition}%` }}
            />
            
            {/* Color Indicators */}
            <div className="absolute inset-0 flex justify-between items-center px-2">
              {colorButtons.map((theme, index) => (
                <div
                  key={theme.name}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor((sliderPosition / 100) * colorButtons.length) === index
                      ? 'bg-white scale-125'
                      : 'bg-white/50 scale-100'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}